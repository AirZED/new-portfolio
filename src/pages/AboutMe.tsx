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
        <Topic content="About me" />
      </div>
      <div className={style.textArea}>
        <img src={displayImage} alt="mfoniso standing and smiling" />
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
          <div>
            Beyond technical proficiency, Mfoniso possesses exceptional
            communication skills and thrives in collaborative environments.
            Their natural leadership qualities and passion for the rapidly
            growing tech scene in Uyo, Nigeria, make them a valuable addition to
            any team. Mfoniso's drive to stay ahead of industry trends, combined
            with their ability to inspire and motivate others, positions them as
            a capable developer capable of building cutting-edge web
            applications and driving impactful contributions to team success.
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
