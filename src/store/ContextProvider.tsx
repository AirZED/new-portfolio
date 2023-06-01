import { ReactNode, useState, useEffect, Fragment } from "react";
import portfolioContext from "./portfolioStore";

// importing data
import projectData from "./../assets/projects_data";

type contextProps = {
  children: ReactNode[] | ReactNode;
};

type ProjectProps = {
  isActive: boolean;
  project: any;
};

const ContextProvider = ({ children }: contextProps) => {
  const [darkMode, setDarkMode] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [width, setWidth] = useState(0);
  const [project, setProject] = useState<ProjectProps>({
    isActive: false,
    project: null,
  });

  const darkModeHandler = (): void => {
    setDarkMode((prev) => !prev);
  };

  const openProjectHandler = (id: number | string) => {
    const filteredProject = projectData.find((el) => id === el.id);
    if (filteredProject)
      setProject({ isActive: true, project: filteredProject });
  };

  const closeProjectHandler = () => {
    setProject({ isActive: false, project: null });
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

  const contextValue = {
    darkMode,
    darkModeHandler,
    scrollPosition,
    pageWidth: width,
    project,
    openProjectHandler,
    closeProjectHandler,
  };

  return (
    <portfolioContext.Provider value={contextValue}>
      <Fragment>{children}</Fragment>
    </portfolioContext.Provider>
  );
};

export default ContextProvider;
