import { useState } from "react";

// importing from react router dom
import { Route, Routes } from "react-router-dom";

// Importing components
import Home from "./pages/Home";
import Nav from "./components/Nav";
import AboutMe from "./pages/AboutMe";
import Works from "./pages/Works";

//importing component
import Project from "./components/Project";

interface ProjectType {
  topic: string;
  description: string;
  id: number;
}
type UserArray = ProjectType[];

//importing json file
import data from "./assets/projects_data.json";
const projects: UserArray = data;

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="works" element={<Works />} />
      </Routes>
    </div>
  );
};

export default App;
