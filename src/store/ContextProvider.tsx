import React, { ReactNode, useState, useEffect } from "react";
import portfolioContext from "./portfolioStore";

type contextProps = {
  children: ReactNode[] | ReactNode;
};

const ContextProvider = ({ children }: contextProps) => {
  const [darkMode, setDarkMode] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const darkModeHandler = () => {
    setDarkMode((prev) => !prev);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.pageYOffset;
      setScrollPosition(currentPosition);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <portfolioContext.Provider
      value={{ darkMode, darkModeHandler, scrollPosition }}
    >
      <div className="App">{children}</div>
    </portfolioContext.Provider>
  );
};

export default ContextProvider;
