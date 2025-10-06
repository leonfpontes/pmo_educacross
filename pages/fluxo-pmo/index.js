import Script from 'next/script';
import FlowHero from '@/app/(public)/fluxo-pmo/_components/FlowHero';
import FlowQuickNav from '@/app/(public)/fluxo-pmo/_components/FlowQuickNav';
import FlowSection from '@/app/(public)/fluxo-pmo/_components/FlowSection';
import FlowSideNav from '@/app/(public)/fluxo-pmo/_components/FlowSideNav';
import flowSections from '@/app/(public)/fluxo-pmo/_data/sections';
import Layout from '@/components/layout/SiteLayout';

const navSections = flowSections.map(({ id, label }) => ({ id, label }));
const flowScript = `
(function () {
  if (typeof window === 'undefined') {
    return;
  }

  var body = document.body;
  if (!body) {
    return;
  }

  var addBodyClass = function () {
    body.classList.add('flow-body');
  };

  var removeBodyClass = function () {
    body.classList.remove('flow-body');
  };

  addBodyClass();
  window.addEventListener('pageshow', addBodyClass);
  window.addEventListener('pagehide', removeBodyClass);
  window.addEventListener('beforeunload', removeBodyClass);

  var navContainer = document.querySelector('.flow-main-layout');
  if (!navContainer) {
    return;
  }

  var navLinks = Array.prototype.slice.call(navContainer.querySelectorAll('a[data-section]'));
  if (!navLinks.length) {
    return;
  }

  var sections = Array.from(new Set(navLinks.map(function (link) {
    var sectionId = link.dataset.section || (link.getAttribute('href') || '').replace('#', '');
    var sectionEl = sectionId ? document.getElementById(sectionId) : null;

    if (sectionEl) {
      link.dataset.section = sectionId;
    }

    return sectionEl;
  }).filter(Boolean)));

  if (!sections.length) {
    return;
  }

  var setActiveLink = function (sectionId) {
    navLinks.forEach(function (link) {
      var isActive = link.dataset.section === sectionId;
      link.classList.toggle('active', isActive);

      if (isActive) {
        link.setAttribute('aria-current', 'true');
      } else {
        link.removeAttribute('aria-current');
      }
    });
  };

  var observerOptions = { root: null, rootMargin: '-35% 0px -45% 0px', threshold: [0.25, 0.5, 0.75] };
  var observer = new IntersectionObserver(function (entries) {
    var visibleSections = entries.filter(function (entry) { return entry.isIntersecting; }).sort(function (a, b) {
      return b.intersectionRatio - a.intersectionRatio;
    });

    if (visibleSections.length > 0) {
      setActiveLink(visibleSections[0].target.id);
      return;
    }

    var aboveViewport = entries.filter(function (entry) {
      return entry.boundingClientRect.top < 0;
    }).sort(function (a, b) {
      return b.boundingClientRect.top - a.boundingClientRect.top;
    });

    if (aboveViewport.length > 0) {
      setActiveLink(aboveViewport[0].target.id);
    }
  }, observerOptions);

  sections.forEach(function (section) {
    observer.observe(section);
  });

  var initialId = window.location.hash ? window.location.hash.substring(1) : sections[0].id;
  if (initialId) {
    setActiveLink(initialId);
  }

  var handleClick = function (event) {
    var sectionId = event.currentTarget.dataset.section;
    if (sectionId) {
      setActiveLink(sectionId);
    }
  };

  navLinks.forEach(function (link) {
    link.addEventListener('click', handleClick);
  });

  var cleanup = function () {
    observer.disconnect();
    navLinks.forEach(function (link) {
      link.removeEventListener('click', handleClick);
      link.classList.remove('active');
      link.removeAttribute('aria-current');
    });
    removeBodyClass();
    window.removeEventListener('pageshow', addBodyClass);
    window.removeEventListener('pagehide', removeBodyClass);
    window.removeEventListener('beforeunload', removeBodyClass);
    window.removeEventListener('pagehide', cleanup);
  };

  window.addEventListener('pagehide', cleanup);
})();
`;

export default function FluxoPMO() {
  return (
    <Layout
      title="Fluxo do PMO Educacross"
      description="Detalhamento do fluxo integrado do PMO Educacross com governança baseada em Stage Gates."
      hero={<FlowHero />}
      mainClassName="flow-page"
    >
      <Script id="flow-navigation-script" strategy="lazyOnload">
        {flowScript}
      </Script>
      <div className="flow-main-layout">
        <FlowSideNav sections={navSections} />
        <div className="flow-main-content">
          <FlowQuickNav sections={navSections} />
          <main className="flow-content">
            {flowSections.map((section) => (
              <FlowSection key={section.id} id={section.id} badge={section.badge} title={section.title}>
                {section.content}
              </FlowSection>
            ))}
          </main>
        </div>
      </div>
    </Layout>
  );
}
