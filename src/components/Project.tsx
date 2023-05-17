import meals from "./../assets/projects/mealapp.png";

// importing style
import style from "./../styles/Project.module.css";

interface ProjectProps {
  topic?: string;
  image?: string;
  imageAlt?: string;
  doneAt?: string;
}

const Project = ({
  topic,
  image,
  imageAlt,
  doneAt,
}: ProjectProps): JSX.Element => {
  return (
    <div className={style.project}>
      <img src={meals} className={style.img} alt="meals app" />

      <div>
        <h1 className={style["project-name"]}>Conversion from word to pdf</h1>
        <p className={style["project-stack"]}>Next Js, Material Icon</p>
      </div>
      <p className={style["project-date"]}>/{21}</p>
    </div>
  );
};

export default Project;
