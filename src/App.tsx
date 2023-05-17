import { useState } from "react";

// Importing components
import Home from "./pages/Home";
import Nav from "./components/Nav";
import AboutMe from "./pages/AboutMe";
import SelectedProjects from "./pages/SelectedProjects";

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
