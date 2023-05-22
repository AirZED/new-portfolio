// importing from react
import { forwardRef, useContext } from "react";
import portfolioContext from "../store/portfolioStore";
// importing style
import style from "./../styles/SelectedProjects.module.css";
// importing supporting components
import Project from "../components/Project";
import Topic from "../components/Topic";
// importing data
import projectData from "../assets/projects_data";

const SelectedProjects = forwardRef((props, ref: any) => {
  const Contx = useContext(portfolioContext);
  return (
    <div className={style.projects} id="projects" ref={ref}>
      <div className={style["projects-header"]}>
        <Topic
          content={Contx.width > 699 ? "Some Selected Projects" : "Projects"}
        />
        <span>BUILD YEAR</span>
      </div>

      {projectData.map((el) => (
        <Project
          url={el.url}
          topic={el.topic}
          image={el.image}
          doneAt={el.buildDate}
          stack={el.stack}
          key={el.id}
        />
      ))}

      <div className={style["see-more-projects"]}>
        <h2>Want to see more?</h2>
        <p>
          Reach me out at{" "}
          <a href="mailto:ukpabiomfoniso@gmail.com">ukpabiomfoniso@gmail.com</a>
        </p>
      </div>
    </div>
  );
});

export default SelectedProjects;
