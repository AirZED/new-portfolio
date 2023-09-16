import { ReactNode } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

// importing style
import style from "./../styles/ProjectSection.module.css";
// importing react icon
import { IoCaretBackCircle } from "react-icons/io5";
import { FcNext, FcPrevious } from "react-icons/fc";
import { FiGithub } from "react-icons/fi";
import { MdOutlineArrowOutward } from "react-icons/md";
// importing data
import project_data from "../assets/projects_data";
// importing types
import { ProjectProps } from "../components/Project";

const ProjectSection = (): JSX.Element => {
  const { id } = useParams<{ id?: string }>();
  const navigate = useNavigate();
  const data: any = project_data.find((el) => id && +id === el.id);

  // Finding index, next and previous
  const index = project_data.findIndex((el) => id && +id === el.id);
  const previousProject = index > 0 && project_data[index - 1];
  const nextProject =
    index + 1 < project_data.length ? project_data[index + 1] : project_data[0];

  // navigating away
  const closeProjectHandler = () => {
    navigate("/");
  };

  type NavigateBtnProps = {
    project: ProjectProps;
    icon: ReactNode;
  };

  const NavigateBtn = ({ project, icon }: NavigateBtnProps) => {
    return (
      <Link to={`/projects/${project.id}`} className={style.icon}>
        {icon}
      </Link>
    );
  };
  return (
    <div className={style["child-project"]}>
      <div className={style["close-sec"]}>
        <IoCaretBackCircle onClick={closeProjectHandler} />
        Back to Home
      </div>
      <div className={style.description}>
        <strong>{data.category}</strong>
        <h1>{data.topic}</h1>
        <p>
          Home{" > "}My Works{" > "}
          {data.topic}
        </p>
        <p>{data.description}</p>
        <div className={style["repo-stack"]}>
          <div className={style.stack}>
            <h3>Technologies</h3>
            <p>{data.stack}</p>
          </div>
          <div className={style.repo}>
            <a href={`${data.url}`}>
              {data.category === "Backend Dev"
                ? "Open Project Documentation"
                : "Open Project"}{" "}
              <MdOutlineArrowOutward />
            </a>
            <a href={data.github}>
              View Github
              <FiGithub />
            </a>
          </div>
        </div>
      </div>
      <img src={data.image} alt={data.topic} />
      <div className={style.next}>
        <div>
          <p>Next Project</p>
          {previousProject && (
            <NavigateBtn project={previousProject} icon={<FcPrevious />} />
          )}
          {nextProject && (
            <NavigateBtn project={nextProject} icon={<FcNext />} />
          )}
        </div>
        <h2>{nextProject && nextProject.topic}</h2>
      </div>
    </div>
  );
};

export default ProjectSection;
