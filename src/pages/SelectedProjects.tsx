// importing style
import style from "./../styles/SelectedProjects.module.css";

// importing supporting components
import Project from "../components/Project";
import Topic from "../components/Topic";

// importing data
import data from "../assets/projects_data.json";

interface ProjectType {
  topic: string;
  description: string;
  id: number;
}

const SelectedProjects = (): JSX.Element => {
  return (
    <div className={style.projects} id="projects">
      <div className={style["projects-header"]}>
        <Topic content={"Some Selected Projects"} />
        <p>A handful of my favorites</p>
      </div>
      <Project /> <Project /> <Project /> <Project /> <Project />
    </div>
  );
};

export default SelectedProjects;
