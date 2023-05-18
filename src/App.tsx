// importing Context
import ContextProvider from "./store/contextProvider";

// Importing components
import Home from "./sections/Home";
import Nav from "./components/Nav";
import AboutMe from "./sections/AboutMe";
import SelectedProjects from "./sections/SelectedProjects";
import ContactMe from "./sections/ContactMe";

// importing style
import "./App.css";

const App = () => {
  return (
    <ContextProvider className="App">
      <Nav />
      <Home />
      <AboutMe />
      <SelectedProjects />
      <ContactMe />
    </ContextProvider>
  );
};

export default App;
