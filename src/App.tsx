import React, { useContext, useRef, Fragment } from "react";

// importing Context
import ContextProvider from "./store/ContextProvider";
import portfolioContext from "./store/portfolioStore";
// Importing components
import Home from "./sections/Home";
import Nav from "./sections/Nav";
import AboutMe from "./sections/AboutMe";
import Specialtys from "./sections/Specialty";
import SelectedProjects from "./sections/SelectedProjects";
import ContactMe from "./sections/ContactMe";
import BacktoTop from "./components/BacktoTop";
import Footer from "./sections/Footer";
import ProjectSection from "./components/ProjectSection";

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

  return (
    <Fragment>
      {Contx.project.isActive && <ProjectSection data={Contx.project} />}
      <Nav componentsRef={componentsRef} />
      <Home componentsRef={componentsRef} />
      <AboutMe ref={aboutRef} />
      <Specialtys ref={expertiseRef} />
      <SelectedProjects ref={projectRef} />
      <ContactMe ref={contactRef} />
      <Footer />
      {Contx.scrollPosition > window.innerHeight / 2 && <BacktoTop />}
    </Fragment>
  );
};

export default App;
