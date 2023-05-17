import { useState } from "react";

// Importing components
import Home from "./sections/Home";
import Nav from "./components/Nav";
import AboutMe from "./sections/AboutMe";
import SelectedProjects from "./sections/SelectedProjects";

// importing style
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Nav />
      <Home />
      <AboutMe />
      <SelectedProjects />
    </div>
  );
};

export default App;
