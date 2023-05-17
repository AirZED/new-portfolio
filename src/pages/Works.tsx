// importing style
import style from "./../styles/Work.module.css";

// importing supporting components
import Project from "../components/Project";

// importing data
import data from "../assets/projects_data.json";
console.log(data);

interface ProjectType {
  topic: string;
  description: string;
  id: number;
}

const Works = (): JSX.Element => {
  return (
    <div className={style.work} id="projects">
      <Project />
    </div>
  );
};

export default Works;
