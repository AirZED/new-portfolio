import { ReactNode, useEffect, useContext } from "react";
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
// importing context
import portfolioContext from "../store/portfolioStore";

const ProjectSection = (): JSX.Element => {
  const { id } = useParams<{ id?: string }>();
  const navigate = useNavigate();
  const context = useContext(portfolioContext);
  const data: any = project_data.find((el) => id && +id === el.id);

  // Scroll to top when component mounts or when id changes
  useEffect(() => {
    window.scrollTo(0, 0);
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

  // Handle navigation to projects section
  const handleProjectsClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    navigate("/", { state: { scrollToProjects: true } });
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
        <strong className="border-b-[0.5px] border-[var(--accent-color2)] pb-1 inline-block mb-4">{data.category}</strong>
        <h1 className="text-[3rem] font-black font-['Poppins',sans-serif] mb-6 max-[700px]:text-[2rem]">{data.topic}</h1>
        <nav className="mb-8 text-[1.2rem] flex items-center gap-2 flex-wrap max-[700px]:text-base max-[700px]:mb-6">
          <Link
            to="/"
            className="text-[var(--dark-bg)] hover:text-[var(--accent-color1)] transition-colors duration-200"
          >
            Home
          </Link>
          <span className="text-[var(--lessdark-bg)]">/</span>
          <a
            href="/"
            onClick={handleProjectsClick}
            className="text-[var(--dark-bg)] hover:text-[var(--accent-color1)] transition-colors duration-200 cursor-pointer"
          >
            My Projects
          </a>
          <span className="text-[var(--lessdark-bg)]">/</span>
          <span className="text-[var(--lessdark-bg)]">{data.topic}</span>
        </nav>
        <p className="my-8 text-[1.5rem] text-justify leading-relaxed max-[700px]:text-base max-[700px]:my-6">{data.description}</p>
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
            {data.github && (
              <a href={data.github} className="text-[1.5rem] cursor-pointer flex items-center justify-center gap-2 text-[var(--dark-bg)] font-black hover:text-[var(--accent-color1)] max-[700px]:text-base max-[700px]:gap-1">
                View Github
                <FiGithub />
              </a>
            )}
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
