// importing from react
import { forwardRef } from "react";

// importing style
import style from "./../../styles/SelectedProjects.module.css";
// importing supporting components
import Project from "../../components/Project";
import CollapsibleSection from "../../components/CollapsibleSection";
// importing data
import projectData from "../../assets/projects_data";

const SelectedProjects = forwardRef((props, ref: any) => {
  return (
    <div className={style.projects} id="projects" ref={ref}>
      <CollapsibleSection title="My Works">
        <div className={style["projects-header"]}>
          <span>BUILD YEAR</span>
        </div>

        {projectData.map((el) => (
          <Project
            github={el.github}
            url={el.url}
            topic={el.topic}
            image={el.image}
            doneAt={el.doneAt}
            stack={el.stack}
            key={el.id}
            id={el.id}
            category={el.category}
          />
        ))}

        <div className={style["see-more-projects"]}>
          <h2>Want to see more?</h2>
          <p>
            Reach me out at{" "}
            <a href="mailto:ukpabiomfoniso@gmail.com">ukpabiomfoniso@gmail.com</a>
          </p>
        </div>
      </CollapsibleSection>
    </div>
  );
});

export default SelectedProjects;
