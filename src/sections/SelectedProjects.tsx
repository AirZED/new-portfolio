// importing from react
import { useRef, forwardRef } from "react";
// importing style
import style from "./../styles/SelectedProjects.module.css";

// importing supporting components
import Project from "../components/Project";
import Topic from "../components/Topic";

// importing data
import projectData from "../assets/projects_data";

const SelectedProjects = forwardRef((props, ref: any) => {
  // const projectRef = useRef<HTMLDivElement | null>(null);
  return (
    <div className={style.projects} id="projects" ref={ref}>
      <div className={style["projects-header"]}>
        <Topic content={"Some Selected Projects"} />
        <p>Build year</p>
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
