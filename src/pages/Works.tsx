// importing style
import style from "./../styles/Work.module.css";

// importing supporting components
import Project from "../components/Project";

// importing data
import data from "../assets/projects_data.json";
console.log(data);

const Works = (): JSX.Element => {
  return <div className={style.work}></div>;
};

export default Works;
