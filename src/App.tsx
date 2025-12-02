import React, { useContext, useRef, Fragment, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

// importing Context
import portfolioContext from "./store/portfolioStore";
// Importing components
import Layout from "./pages/sections/Layout";
import Home from "./pages/sections/Home";
import AboutMe from "./pages/sections/AboutMe";
import Specialtys from "./pages/sections/Specialty";
import SelectedProjects from "./pages/sections/SelectedProjects";
import WorkExperience from "./pages/sections/WorkExperience";
import ContactMe from "./pages/sections/ContactMe";
import ProjectSection from "./pages/ProjectSection";
// importing utilities
import { scrollToView } from "./utils/utils";
// importing style
import "./App.css";

export interface ComponentRefs {
  [key: string]: React.RefObject<any>;
}

const App = () => {
  const projectRef = useRef<ComponentRefs>({});
  const aboutRef = useRef<ComponentRefs>({});
  const contactRef = useRef<ComponentRefs>({});
  const expertiseRef = useRef<ComponentRefs>({});
  const experienceRef = useRef<ComponentRefs>({});
  const Contx = useContext(portfolioContext);

  const componentsRef = { projectRef, aboutRef, contactRef, expertiseRef, experienceRef };

  const HomeRoute = () => {
    const location = useLocation();

    // Handle navigation from project page to scroll to projects section
    useEffect(() => {
      if (location.state && (location.state as any).scrollToProjects) {
        // Wait for components to render, then scroll
        setTimeout(() => {
          if (Contx?.openCollapsibleSection && projectRef.current) {
            scrollToView(projectRef, Contx.openCollapsibleSection, "My Works");
          }
        }, 100);
        // Clear the state to prevent re-scrolling on re-renders
        window.history.replaceState({}, document.title);
      }
    }, [location.state, Contx]);

    return (
      <Fragment>
        <Home componentsRef={componentsRef} />
        <AboutMe ref={aboutRef} />
        <Specialtys ref={expertiseRef} />
        <WorkExperience ref={experienceRef} />
        <SelectedProjects ref={projectRef} />
        <ContactMe ref={contactRef} />
      </Fragment>
    );
  };

  return (
    <Layout componentsRef={componentsRef}>
      <Routes>
        <Route path="/" element={<HomeRoute />} />
        <Route path="/projects/:id" element={<ProjectSection />} />
      </Routes>
    </Layout>
  );
};

export default App;
