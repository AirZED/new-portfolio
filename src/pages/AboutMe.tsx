// importing style
import style from "./../styles/AboutMe.module.css";

// importing image
import displayImage from "./../assets/images/me.jpg";

// importing supporting component
import Topic from "../components/Topic";

const AboutMe = () => {
  return (
    <div className={style.about}>
      <div>
        <Topic content="About me" />
      </div>
      <div className={style.textArea}>
        <img src={displayImage} alt="mfoniso standing and smiling" />
        <div className={style.text}>
          <div>
            <span>Mfoniso Ukpabio</span> is a detail-oriented MERN stack
            developer who is passionate about problem-solving, Data Structures,
            and Algorithms (DSA). He has completed multiple internships and is
            currently studying Computer Engineering at the University of Uyo.
            Mfoniso is committed to delivering high-quality, scalable, and
            efficient code and has excellent communication skills, making him a
            valuable addition to any team.
          </div>
          <div>
            In addition to his technical skills, Mfoniso is a natural leader who
            enjoys collaborating with others to achieve common goals. He has a
            passion for communication and is excited about the growing tech
            scene in Uyo, Nigeria. With his skills, passion, and natural
            abilities, Mfoniso is well-equipped to build cutting-edge web
            applications and contribute to any team's success.
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
