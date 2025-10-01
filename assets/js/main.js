// Scripts principais do site PMO Educacross
// Mantido vazio por enquanto para futura funcionalidade.
'use strict';

document.addEventListener("DOMContentLoaded", () => {
  const navLinks = Array.from(document.querySelectorAll("a[data-section]"));
  if (!navLinks.length) {
    return;
  }

  const sections = Array.from(
    new Set(
      navLinks
        .map((link) => {
          const sectionId = link.dataset.section || link.getAttribute("href").replace("#", "");
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
    return;
  }

  const setActiveLink = (sectionId) => {
    navLinks.forEach((link) => {
      const isActive = link.dataset.section === sectionId;
      link.classList.toggle("active", isActive);
      if (isActive) {
        link.setAttribute("aria-current", "true");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  };

  const observerOptions = {
    root: null,
    rootMargin: "-35% 0px -45% 0px",
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

  const initialId = window.location.hash
    ? window.location.hash.substring(1)
    : sections[0].id;
  if (initialId) {
    setActiveLink(initialId);
  }

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      const sectionId = link.dataset.section;
      if (sectionId) {
        setActiveLink(sectionId);
      }
    });
  });
});
