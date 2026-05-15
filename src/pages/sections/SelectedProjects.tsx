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

        <div className="pt-8 max-[700px]:pt-4 flex flex-col gap-2">
          <h2 className="text-[1.1rem] opacity-60 font-normal tracking-wide uppercase max-[700px]:text-[0.95rem]">Want to see more?</h2>
          <a
            href="mailto:ukpabiomfoniso@gmail.com"
            className="group font-black text-[2rem] no-underline flex items-center gap-2 w-fit hover:text-[var(--accent-color1)] border-b-2 border-[var(--dark-bg)] hover:border-[var(--accent-color1)] pb-1 transition-all duration-200 max-[700px]:text-[1.3rem] max-[500px]:text-[1.1rem]"
          >
            ukpabiomfoniso@gmail.com
          </a>
        </div>
      </CollapsibleSection>
    </div>
  );
});

export default SelectedProjects;
