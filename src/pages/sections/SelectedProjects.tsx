// importing from react
import { forwardRef } from "react";
// importing supporting components
import Project from "../../components/Project";
import CollapsibleSection from "../../components/CollapsibleSection";
// importing data
import projectData from "../../assets/projects_data";

const SelectedProjects = forwardRef((props, ref: any) => {
  return (
    <div className="p-0 h-auto" id="projects" ref={ref}>
      <CollapsibleSection title="My Works">
        <div className="flex items-baseline justify-end max-[700px]:text-center">
          <span className="text-[1.5rem] max-[700px]:text-base">BUILD YEAR</span>
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

        <div className="pt-5 max-[700px]:pt-2">
          <h2 className="no-underline max-[700px]:text-[1.3rem] max-[500px]:text-[1.1rem]">Want to see more?</h2>
          <p className="text-[1.5rem] text-[var(--dark-bg)] max-[700px]:text-[1.3rem] max-[500px]:text-[1.1rem]">
            Reach me out at{" "}
            <a href="mailto:ukpabiomfoniso@gmail.com" className="text-[var(--dark-bg)] ml-1 font-black max-[700px]:ml-0">ukpabiomfoniso@gmail.com</a>
          </p>
        </div>
      </CollapsibleSection>
    </div>
  );
});

export default SelectedProjects;
