import { ReactNode, useState, useEffect, Fragment } from "react";
import portfolioContext from "./portfolioStore";

type contextProps = {
  children: ReactNode[] | ReactNode;
};

const ContextProvider = ({ children }: contextProps) => {
  const [darkMode, setDarkMode] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [width, setWidth] = useState(0);

  const darkModeHandler = () => {
    setDarkMode((prev) => !prev);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.scrollY;
      setScrollPosition(currentPosition);
    };

    const handleWidth = () => {
      setWidth(window.innerWidth);
    }; 

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleWidth);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleWidth);
    };
  }, []);

  return (
    <portfolioContext.Provider
      value={{ darkMode, darkModeHandler, scrollPosition, pageWidth: width }}
    >
      <Fragment>{children}</Fragment>
    </portfolioContext.Provider>
  );
};

export default ContextProvider;
