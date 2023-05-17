// importing style
import style from "./../styles/AboutMe.module.css";

// importing image
import displayImage from "./../assets/images/me.jpg";

// importing supporting component
import Topic from "../components/Topic";

const AboutMe = () => {
  return (
    <div className={style.about} id="info">
      <div className={style.topic}>
        <Topic content="About Mfoniso" />
      </div>
      <div className={style.textArea}>
        <div className={style.text}>
          <div>
            <span>Mfoniso Ukpabio</span> is a highly skilled and detail-oriented
            MERN stack developer, specializing in TypeScript, Next.js, React,
            and Node.js. With a strong background in problem-solving, Data
            Structures, and Algorithms (DSA), Mfoniso brings a deep
            understanding of efficient code implementation and optimization
            strategies. Their dedication to delivering high-quality and scalable
            solutions is evident through their successful completion of multiple
            internships and ongoing studies in Computer Engineering at the
            University of Uyo.
          </div>
        </div>
          <img src={displayImage} alt="mfoniso standing and smiling" />
      </div>
    </div>
  );
};

export default AboutMe;
