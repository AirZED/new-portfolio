// importing from react-dom
import { Link } from "react-router-dom";
// importing style
import style from "./../styles/Project.module.css";
// importing context

export type ProjectProps = {
  topic: string;
  image: string;
  doneAt: string;
  stack: string;
  description?: string;
  url: string;
  id: number | string;
  category: string;
  github: string;
};

const Project = ({
  topic,
  image,
  doneAt,
  stack,
  id,
}: ProjectProps): JSX.Element => {
  return (
    <Link to={`/projects/${id}`} className={style.project}>
      <div className={style["project-child"]}>
        <img src={image} className={style.img} alt={topic} />
        <div className={style["project-name-section"]}>
          <h1 className={style["project-name"]}>{topic}</h1>
          <p className={style["project-stack"]}>{stack}</p>
        </div>
        <p className={style["project-date"]}>/{doneAt}</p>
      </div>
    </Link>
  );
};

export default Project;
