
// importing style
import style from "./../styles/Project.module.css";

interface ProjectProps {
  topic: string;
  image: string;
  doneAt: string;
  stack: string;
}

const Project = ({
  topic,
  image,
  doneAt,
  stack,
}: ProjectProps): JSX.Element => {
  return (
    <div className={style.project}>
      <img src={image} className={style.img} alt={topic} />

      <div>
        <h1 className={style["project-name"]}>{topic}</h1>
        <p className={style["project-stack"]}>{stack}</p>
      </div>
      <p className={style["project-date"]}>/{doneAt.slice(-2)}</p>
    </div>
  );
};

export default Project;
