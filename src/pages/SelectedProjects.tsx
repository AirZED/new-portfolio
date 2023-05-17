// importing style
import style from "./../styles/SelectedProjects.module.css";

// importing supporting components
import Project from "../components/Project";
import Topic from "../components/Topic";

// importing data
import data from "../assets/projects_data.json";
console.log(data);

interface ProjectType {
  topic: string;
  description: string;
  id: number;
}

const SelectedProjects = (): JSX.Element => {
  return (
    <div className={style.work} id="projects">
      <Topic content={"Some Selected Projects"} />
      <Project />
    </div>
  );
};

export default SelectedProjects;
