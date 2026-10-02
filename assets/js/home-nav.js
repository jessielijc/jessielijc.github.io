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
      const projectsReached = projectsSection.getBoundingClientRect().top <= navbarHeight + 32;
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

    publicationsLink.addEventListener("click", () => setCurrentSection("publications"));
    projectsLink.addEventListener("click", () => setCurrentSection("projects"));
    aboutLink.addEventListener("click", () => setCurrentSection("about"));
    window.addEventListener("hashchange", scheduleUpdate);
    window.addEventListener("resize", scheduleUpdate);
    window.addEventListener("scroll", scheduleUpdate, { passive: true });

    updateCurrentSection();
  };

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", initializeHomeNavigation, { once: true });
  else initializeHomeNavigation();
})();
