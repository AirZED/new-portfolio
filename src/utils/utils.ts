export const scrollToView = (element: any, openSection?: (sectionKey: string) => void, sectionTitle?: string) => {
  // If sectionTitle and openSection function are provided, open the collapsible section first
  if (sectionTitle && openSection) {
    openSection(sectionTitle);
  }

  // Wait a bit for the section to open, then scroll
  setTimeout(() => {
    if (element.current) {
      const elementTop = element.current.getBoundingClientRect().top + window.pageYOffset;
      // Account for fixed navigation bar (80px when scrolled, 64px when not)
      const navHeight = window.scrollY > window.innerHeight / 4 ? 80 : 64;
      const offsetPosition = elementTop - navHeight - 20; // Extra 20px for breathing room

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  }, sectionTitle ? 150 : 0); // Wait longer if opening a section
};
