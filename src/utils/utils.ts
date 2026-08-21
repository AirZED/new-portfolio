const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

// Parses "Mon YYYY" (e.g. "Apr 2024") into a Date at the 1st of that month.
const parseMonthYear = (value: string): Date | null => {
  const [monthStr, yearStr] = value.trim().split(/\s+/);
  const monthIndex = MONTHS.indexOf(monthStr);
  const year = parseInt(yearStr, 10);
  if (monthIndex === -1 || Number.isNaN(year)) return null;
  return new Date(year, monthIndex, 1);
};

// Computes a human-readable duration (e.g. "1 yr 9 mos") from "Mon YYYY" dates.
// endDate of "Present" is treated as today, so ongoing roles stay accurate without manual upkeep.
export const formatDuration = (startDate: string, endDate: string): string => {
  const start = parseMonthYear(startDate);
  const end = endDate.trim().toLowerCase() === "present" ? new Date() : parseMonthYear(endDate);
  if (!start || !end) return "";

  let totalMonths = (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth()) + 1;
  totalMonths = Math.max(totalMonths, 1);

  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  const parts: string[] = [];
  if (years > 0) parts.push(`${years} yr${years > 1 ? "s" : ""}`);
  if (months > 0) parts.push(`${months} mo${months > 1 ? "s" : ""}`);
  return parts.length > 0 ? parts.join(" ") : "1 mo";
};

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
