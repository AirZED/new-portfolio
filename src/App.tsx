import React, { useContext, useRef, Fragment } from "react";
import { Routes, Route } from "react-router-dom";

// importing Context
import portfolioContext from "./store/portfolioStore";
// Importing components
import Layout from "./pages/sections/Layout";
import Home from "./pages/sections/Home";
import AboutMe from "./pages/sections/AboutMe";
import Specialtys from "./pages/sections/Specialty";
import SelectedProjects from "./pages/sections/SelectedProjects";
import ContactMe from "./pages/sections/ContactMe";
import ProjectSection from "./pages/ProjectSection";
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
  const Contx = useContext(portfolioContext);

  const componentsRef = { projectRef, aboutRef, contactRef, expertiseRef };

  const HomeRoute = () => {
    return (
      <Fragment>
        <Home componentsRef={componentsRef} />
        <AboutMe ref={aboutRef} />
        <Specialtys ref={expertiseRef} />
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
