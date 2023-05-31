// importing from react
import { useContext } from "react";
// importing style
import style from "./../styles/Project.module.css";
// importing context
import portfolioContext from "../store/portfolioStore";

export type ProjectProps = {
  topic: string;
  image: string;
  doneAt: string;
  stack: string;
  description?: string;
  url: string;
  id: number | string;
};

const Project = ({
  topic,
  image,
  doneAt,
  stack,
  url,
  id,
}: ProjectProps): JSX.Element => {
  const Contx = useContext(portfolioContext);
  return (
    <div
      className={style.project}
      onClick={Contx.openProjectHandler.bind(null, id)}
    >
      <div className={style["project-child"]}>
        <img src={image} className={style.img} alt={topic} />
        <div className={style["project-name-section"]}>
          <h1 className={style["project-name"]}>{topic}</h1>
          <p className={style["project-stack"]}>{stack}</p>
        </div>
        <p className={style["project-date"]}>({doneAt.slice(-2)})</p>
      </div>
    </div>
  );
};

export default Project;
