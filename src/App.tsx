import { useState } from "react";

// Importing components
import Home from "./pages/Home";
import Nav from "./components/Nav";
import AboutMe from "./pages/AboutMe";
import Works from "./pages/Works";

// importing style
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Nav />
      <Home />
      <AboutMe />
      <Works />
    </div>
  );
};

export default App;
