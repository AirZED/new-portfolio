import { Fragment, useState, useContext } from "react";
import ReactDOM from "react-dom";

import image1 from "./../assets/projects/mealapp.png";

// importing context
import portfolioContext from "../store/portfolioStore";

// importing style
import style from "./../styles/ProjectSection.module.css";
// importing props
import { ProjectProps } from "./Project";

// importing react icon
import { CgClose } from "react-icons/cg";

// import supporting element
import Backdrop from "./Backdrop";

const ProjectSection = (props: any): JSX.Element => {
  const Contx = useContext(portfolioContext);
  const data: ProjectProps = props.data.project;

  const [showProject, setShowProject] = useState(false);

  const openProjectHandler = () => {
    setShowProject(true);
  };

  const closeProjectHandler = () => {
    setShowProject(false);
  };

  const ViewProject = () => {
    return (
      <Backdrop closeBackdrop={closeProjectHandler}>
        <div className={style["child-project"]}>
          <CgClose
            onClick={Contx.closeProjectHandler}
            className={style["close-icon"]}
          />
          <div className={style.description}>
            <strong>Frontend Dev</strong>
            <h1>{data.topic}</h1>
            <p>
              Home{">"}My Works{">"}
              {data.topic}
            </p>
            <p>{data.description}</p>
            <div className={style.stack}>
              <h3>Technologies</h3>
              <p>{data.stack}</p>
            </div>
          </div>
          <img src={data.image} alt={data.topic} />

          <div className={style.next}>
            <h2>Next Project</h2>
          </div>
        </div>
      </Backdrop>
    );
  };

  const portal = document.getElementById("portal") as HTMLElement;
  // portal.style.zIndex = "2000";
  return <Fragment>{ReactDOM.createPortal(<ViewProject />, portal)}</Fragment>;
};

export default ProjectSection;
