import { useContext } from "react";

// importing Context
import ContextProvider from "./store/ContextProvider";
import portfolioContext from "./store/portfolioStore";

// Importing components
import Home from "./sections/Home";
import Nav from "./components/Nav";
import AboutMe from "./sections/AboutMe";
import SelectedProjects from "./sections/SelectedProjects";
import ContactMe from "./sections/ContactMe";
import BacktoTop from "./components/BacktoTop";

// importing style
import "./App.css";

const App = () => {
  const Contx = useContext(portfolioContext);
  return (
    <ContextProvider>
      <Nav />
      <Home />
      <AboutMe />
      <SelectedProjects />
      <ContactMe />
      {Contx.scrollPosition > window.innerHeight && <BacktoTop />}
    </ContextProvider>
  );
};

export default App;
