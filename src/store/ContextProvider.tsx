import React, { ReactNode, useState } from "react";
import portfolioContext from "./portfolioStore";

type contextProps = {
  children: ReactNode[];
  className: string;
};

const ContextProvider = ({ children, className }: contextProps) => {
  const [darkMode, setDarkMode] = useState(false);

  const darkModeHandler = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <portfolioContext.Provider value={{ darkMode, darkModeHandler }}>
      {children}
    </portfolioContext.Provider>
  );
};

export default ContextProvider;
