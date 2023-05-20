export const scrollToView = (element: any) => {
  element.current?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};
