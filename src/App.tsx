import { useContext, useRef } from "react";

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

// importing style
import "./App.css";

const App = () => {
  const projectRef = useRef<HTMLDivElement | null>(null);
  const Contx = useContext(portfolioContext);

  const scrollToView = (element: any) => {
    element.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  return (
    <ContextProvider>
      <Nav />
      <Home />
      <AboutMe />
      <SelectedProjects ref={projectRef} />
      <ContactMe />
      {Contx.scrollPosition > window.innerHeight && <BacktoTop />}
    </ContextProvider>
  );
};

export default App;
