import { useEffect, useMemo, useRef } from 'react';
import FlowHero from '../../src/components/flow/FlowHero';
import FlowQuickNav from '../../src/components/flow/FlowQuickNav';
import FlowSection from '../../src/components/flow/FlowSection';
import FlowSideNav from '../../src/components/flow/FlowSideNav';
import flowSections from '../../src/components/flow/flowSectionsData';
import Layout from '../../src/components/layout/Layout';

const navSections = flowSections.map(({ id, label }) => ({ id, label }));

export default function FluxoPMO() {
  const navContainerRef = useRef(null);

  useEffect(() => {
    document.body.classList.add('flow-body');
    return () => {
      document.body.classList.remove('flow-body');
    };
  }, []);

  useEffect(() => {
    const navContainer = navContainerRef.current;
    if (!navContainer) {
      return undefined;
    }

    const navLinks = Array.from(navContainer.querySelectorAll('a[data-section]'));
    if (!navLinks.length) {
      return undefined;
    }

    const sections = Array.from(
      new Set(
        navLinks
          .map((link) => {
            const sectionId = link.dataset.section || link.getAttribute('href')?.replace('#', '');
            const sectionEl = sectionId ? document.getElementById(sectionId) : null;
            if (sectionEl) {
              link.dataset.section = sectionId;
            }
            return sectionEl;
          })
          .filter(Boolean)
      )
    );

    if (!sections.length) {
      return undefined;
    }

    const setActiveLink = (sectionId) => {
      navLinks.forEach((link) => {
        const isActive = link.dataset.section === sectionId;
        link.classList.toggle('active', isActive);
        if (isActive) {
          link.setAttribute('aria-current', 'true');
        } else {
          link.removeAttribute('aria-current');
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: '-35% 0px -45% 0px',
      threshold: [0.25, 0.5, 0.75],
    };

    const observer = new IntersectionObserver((entries) => {
      const visibleSections = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

      if (visibleSections.length > 0) {
        setActiveLink(visibleSections[0].target.id);
        return;
      }

      const aboveViewport = entries
        .filter((entry) => entry.boundingClientRect.top < 0)
        .sort((a, b) => b.boundingClientRect.top - a.boundingClientRect.top);

      if (aboveViewport.length > 0) {
        setActiveLink(aboveViewport[0].target.id);
      }
    }, observerOptions);

    sections.forEach((section) => observer.observe(section));

    const initialId = window.location.hash ? window.location.hash.substring(1) : sections[0].id;
    if (initialId) {
      setActiveLink(initialId);
    }

    const handleClick = (event) => {
      const sectionId = event.currentTarget.dataset.section;
      if (sectionId) {
        setActiveLink(sectionId);
      }
    };

    navLinks.forEach((link) => {
      link.addEventListener('click', handleClick);
    });

    return () => {
      observer.disconnect();
      navLinks.forEach((link) => {
        link.removeEventListener('click', handleClick);
        link.classList.remove('active');
        link.removeAttribute('aria-current');
      });
    };
  }, []);

  const sectionsToRender = useMemo(
    () =>
      flowSections.map((section) => (
        <FlowSection key={section.id} id={section.id} badge={section.badge} title={section.title}>
          {section.content}
        </FlowSection>
      )),
    []
  );

  return (
    <Layout
      title="Fluxo do PMO Educacross"
      description="Detalhamento do fluxo integrado do PMO Educacross com governança baseada em Stage Gates."
      hero={<FlowHero />}
      mainClassName="flow-page"
    >
      <div className="flow-main-layout" ref={navContainerRef}>
        <FlowSideNav sections={navSections} />
        <div className="flow-main-content">
          <FlowQuickNav sections={navSections} />
          <main className="flow-content">{sectionsToRender}</main>
        </div>
      </div>
    </Layout>
  );
}
