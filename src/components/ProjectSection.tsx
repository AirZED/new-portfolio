import { Fragment, useState } from "react";
import ReactDOM from "react-dom";
// importing style
import style from "./../styles/ProjectSection.module.css";

// import supporting element
import Backdrop from "./Backdrop";

const ProjectSection = (): JSX.Element => {
  const [showProject, setShowProject] = useState(false);

  const openProjectHandler = () => {
    setShowProject((prev) => !prev);
  };

  const ViewProject = () => {
    return (
      <div className={style["project-portal"]}>
        <Backdrop closeBackdrop={openProjectHandler} />
        <div className={style["child-project"]}>
          this is me an you to the end of time
          <div className={style.footer}></div> 
        </div>
      </div>
    );
  };

  const portal = document.getElementById("portal") as HTMLElement;
  return <Fragment>{ReactDOM.createPortal(<ViewProject />, portal)}</Fragment>;
};

export default ProjectSection;
