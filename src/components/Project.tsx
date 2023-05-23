// importing style
import style from "./../styles/Project.module.css";

interface ProjectProps {
  topic: string;
  image: string;
  doneAt: string;
  stack: string;
  url: string;
}

const Project = ({
  topic,
  image,
  doneAt,
  stack,
  url,
}: ProjectProps): JSX.Element => {
  return (
    <div className={style.project}>
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
