import { ReactNode, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
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

  // Scroll to top when component mounts or when id changes
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'instant'
    });
  }, [id]);

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
      <Link to={`/projects/${project.id}`} className="border-[0.5px] border-transparent bg-[var(--dark-bg)] h-10 w-10 rounded-full flex items-center justify-center no-underline [&>*]:fill-[var(--light-bg)] [&>*]:text-[var(--light-bg)]">
        {icon}
      </Link>
    );
  };
  return (
    <div className="bg-[var(--light-bg)] m-0 mx-auto py-20 px-24 pb-8 max-[700px]:w-full max-[700px]:h-auto max-[700px]:py-20 max-[700px]:px-4 max-[700px]:pb-4">
      <div className="flex gap-2 items-center justify-center text-[1.2rem] max-[700px]:gap-1 max-[700px]:text-base text-[var(--dark-bg)]">
        <IoCaretBackCircle onClick={closeProjectHandler} className="cursor-pointer text-[var(--dark-bg)] w-10 h-10 max-[700px]:w-8 max-[700px]:h-8" />
        Back to Home
      </div>
      <div className="text-[var(--dark-bg)]">
        <strong className="border-b-[0.5px] border-[var(--accent-color2)]">{data.category}</strong>
        <h1 className="text-[3rem] font-black font-['Poppins',sans-serif] max-[700px]:text-[2rem]">{data.topic}</h1>
        <p className="my-8 text-[1.5rem] text-justify max-[700px]:text-base">
          Home{" > "}My Projects{" > "}
          {data.topic}
        </p>
        <p className="my-8 text-[1.5rem] text-justify max-[700px]:text-base">{data.description}</p>
        <div className="flex gap-8 my-4 w-full max-[700px]:flex-col max-[700px]:gap-4">
          <div>
            <h3 className="text-[1.5rem] max-[700px]:text-base">Technologies</h3>
            <p>{data.stack}</p>
          </div>
          <div className="flex gap-8 max-[700px]:gap-4">
            <a href={`${data.url}`} target="_blank" className="text-[1.5rem] cursor-pointer flex items-center justify-center gap-2 text-[var(--dark-bg)] font-black hover:text-[var(--accent-color1)] max-[700px]:text-base max-[700px]:gap-1">
              {data.category === "Backend Dev."
                ? "Open Project Documentation"
                : "Open Project"}{" "}
              <MdOutlineArrowOutward />
            </a>
            <a href={data.github} className="text-[1.5rem] cursor-pointer flex items-center justify-center gap-2 text-[var(--dark-bg)] font-black hover:text-[var(--accent-color1)] max-[700px]:text-base max-[700px]:gap-1">
              View Github
              <FiGithub />
            </a>
          </div>
        </div>
      </div>
      <img src={data.image} alt={data.topic} className="w-full rounded-md" />
      <div className="bottom-8 right-8 h-32 w-80 rounded-md bg-[var(--light-bg)] fixed border-[0.5px] border-[var(--dark-bg)] p-4 max-[700px]:w-full max-[700px]:static">
        <div className="items-center flex gap-4 max-[700px]:justify-between">
          <p className="text-[1.2rem] text-[var(--dark-bg)]">Next Project</p>
          {previousProject && (
            <NavigateBtn project={previousProject} icon={<FcPrevious />} />
          )}
          {nextProject && (
            <NavigateBtn project={nextProject} icon={<FcNext />} />
          )}
        </div>
        <h2 className="text-[1.5rem] text-right max-[700px]:text-[1.3rem] text-[var(--dark-bg)]">{nextProject && nextProject.topic}</h2>
      </div>
    </div>
  );
};

export default ProjectSection;
