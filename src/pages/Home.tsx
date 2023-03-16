// importing custom hook
import useAnimate from "../hooks/useAnimate";

// importing style
import style from "./../styles/Home.module.css";

// importing supporting component
import Button from "../components/Button";

interface Props {
  word: string;
}

const Home = () => {
  // calling currentText hook
  const currentText = useAnimate("FRONTEND & SERVER SIDE WEB DEVELOPER");

  const displayTopic = (
    <h1 className={style.topic}>
      <span>{currentText[0]}</span> {currentText[1]}{" "}
      <span>{currentText[2]}</span> <span>{currentText[3]}</span>{" "}
      {currentText[4]} {currentText[5]}
    </h1>
  );

  return (
    <div className={style.home}>
      {displayTopic}

      <div className={style.summary}>
        <p className={style.skill}>
          My skills include developing and maintaining databases, building
          RESTful APIs, ensuring security and data integrity, and
          troubleshooting issues and building dynamic user interfaces for web
          applications.
        </p>
        <div>
          <p className={style.stack}>NODE, EXPRESS JS, REACT JS AND MONGO DB</p>
          <Button content="Contact Me" />
        </div>
      </div>
    </div>
  );
};
export default Home;
