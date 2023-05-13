import meals from "./../assets/projects/mealapp.png";

// importing style
import style from "./../styles/Project.module.css";

interface ProjectProps {
  topic?: string;
  image?: string;
  imageAlt?: string;
}

const Project = ({ topic, image, imageAlt }: ProjectProps): JSX.Element => {
  return (
    <div className={style.project}>
      <div className={style.image}>
        <img src={meals} alt="meals app" />
      </div>

      <div className={style.text}>
        <p>Conversion from word to pdf</p>
        <text>55</text>
      </div>

      {/* <p>{topic}</p>
      <img src={image} alt={imageAlt} /> */}
    </div>
  );
};

export default Project;
