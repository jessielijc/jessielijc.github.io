(() => {
  const initializeHomeNavigation = () => {
    const publicationsSection = document.getElementById("publications");
    const navbar = document.getElementById("navbar");
    const aboutItem = document.getElementById("nav-item-about");
    const aboutLink = document.getElementById("nav-link-about");
    const publicationsItem = document.getElementById("nav-item-publications");
    const publicationsLink = document.getElementById("nav-link-publications");
    const projectsSection = document.getElementById("projects");
    const projectsItem = document.getElementById("nav-item-projects");
    const projectsLink = document.getElementById("nav-link-projects");

    if (
      !publicationsSection ||
      !projectsSection ||
      !aboutItem ||
      !aboutLink ||
      !publicationsItem ||
      !publicationsLink ||
      !projectsItem ||
      !projectsLink
    )
      return;

    const navigationItems = [
      { name: "about", item: aboutItem, link: aboutLink },
      { name: "publications", item: publicationsItem, link: publicationsLink },
      { name: "projects", item: projectsItem, link: projectsLink },
    ];

    const setCurrentSection = (currentSection) => {
      navigationItems.forEach(({ name, item, link }) => {
        const isCurrent = name === currentSection;
        item.classList.toggle("active", isCurrent);

        if (isCurrent) link.setAttribute("aria-current", "location");
        else link.removeAttribute("aria-current");

        const marker = link.querySelector(".nav-current-marker");
        if (marker) marker.textContent = isCurrent ? "(current)" : "";
      });
    };

    const updateCurrentSection = () => {
      const navbarHeight = navbar?.getBoundingClientRect().height ?? 0;
      const projectsTop = projectsSection.getBoundingClientRect().top;
      const atPageEnd = window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2;
      // A tall viewport can reach the document end before Projects reaches the navbar.
      const projectsReached = projectsTop <= navbarHeight + 32 || (atPageEnd && projectsTop < window.innerHeight);
      const publicationsReached = publicationsSection.getBoundingClientRect().top <= navbarHeight + 32;
      setCurrentSection(projectsReached ? "projects" : publicationsReached ? "publications" : "about");
    };

    let updateScheduled = false;
    const scheduleUpdate = () => {
      if (updateScheduled) return;
      updateScheduled = true;
      window.requestAnimationFrame(() => {
        updateScheduled = false;
        updateCurrentSection();
      });
    };

    const scrollToSection = (section) => {
      const offset = Number.parseFloat(window.getComputedStyle(section).scrollMarginTop) || 0;
      window.scrollTo({ top: window.scrollY + section.getBoundingClientRect().top - offset, behavior: "instant" });
      scheduleUpdate();
    };

    const navigateToSection = (event, section, name) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      event.preventDefault();

      if (window.location.hash !== `#${name}`) window.history.pushState(null, "", `#${name}`);

      // A same-page anchor does not close Bootstrap's expanded mobile menu.
      const mobileMenu = document.getElementById("navbarNav");
      const mobileToggle = document.querySelector(".navbar-toggler");
      if (mobileMenu?.classList.contains("show")) mobileToggle?.click();
      else if (mobileMenu?.classList.contains("collapsing") && mobileToggle?.getAttribute("aria-expanded") === "true") {
        // Wait for the opening animation before asking Bootstrap to close it.
        const observer = new MutationObserver(() => {
          if (mobileMenu.classList.contains("show")) {
            observer.disconnect();
            mobileToggle.click();
          } else if (!mobileMenu.classList.contains("collapsing")) observer.disconnect();
        });
        observer.observe(mobileMenu, { attributes: true, attributeFilter: ["class"] });
      }

      window.requestAnimationFrame(() => scrollToSection(section));
      setCurrentSection(name);
    };

    const alignHash = () => {
      const section = window.location.hash === "#projects" ? projectsSection : window.location.hash === "#publications" ? publicationsSection : null;
      if (section) window.requestAnimationFrame(() => scrollToSection(section));
      else scheduleUpdate();
    };

    publicationsLink.addEventListener("click", (event) => navigateToSection(event, publicationsSection, "publications"));
    projectsLink.addEventListener("click", (event) => navigateToSection(event, projectsSection, "projects"));
    aboutLink.addEventListener("click", () => setCurrentSection("about"));
    window.addEventListener("hashchange", alignHash);
    window.addEventListener("resize", scheduleUpdate);
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    if (document.readyState === "complete") alignHash();
    else window.addEventListener("load", alignHash, { once: true });

    updateCurrentSection();
  };

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", initializeHomeNavigation, { once: true });
  else initializeHomeNavigation();
})();
