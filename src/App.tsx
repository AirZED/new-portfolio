import React, { useContext, useEffect, useRef, useState } from "react";

// importing Context
import ContextProvider from "./store/ContextProvider";
import portfolioContext from "./store/portfolioStore";
// Importing components
import Home from "./sections/Home";
import Nav from "./sections/Nav";
import AboutMe from "./sections/AboutMe";
import SelectedProjects from "./sections/SelectedProjects";
import ContactMe from "./sections/ContactMe";
import BacktoTop from "./components/BacktoTop";
// importing util
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
  const Contx = useContext(portfolioContext);

  const componentsRef = { projectRef, aboutRef, contactRef };

  return (
    <ContextProvider>
      <Nav componentsRef={componentsRef} />
      <Home componentsRef={componentsRef} />
      <AboutMe ref={aboutRef} />
      <SelectedProjects ref={projectRef} />
      <ContactMe ref={contactRef} />
      {Contx.scrollPosition > window.innerHeight && <BacktoTop />}
    </ContextProvider>
  );
};

export default App;
