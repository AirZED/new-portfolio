//importing from react-router-dom
// import { HashRouter } from "react-router-dom";

// importing custom hook
import useAnimate from "../hooks/useAnimate";

// importing style
import style from "./../styles/Home.module.css";

// importing supporting component
import Button from "../components/Button";

interface Props {
  word: string;
  className?: string;
}

const MenuItem = (props: Props): JSX.Element => {
  return (
    <div id="menu-item">
      <div className={style.dot}></div>
      <h1>{props.word}</h1>
    </div>
  );
};

const Home = () => {
  // calling currentText hook
  const currentText = useAnimate("Mfoniso Ukpabio");

  return (
    <div className={style.home}>
      <div className={style.topic}>
        <h1>{currentText}</h1>
        <p>BACKEND AND FRONTEND WEB DEVELOPER</p>
      </div>

      <div className={style.menu}>
        <MenuItem word="Info" />
        <MenuItem word="Projects" />
        <MenuItem word="Contacts" />
      </div>

      {/* <div className={style.summary}>{
        <p className={style.skill}>
          My skills include developing and maintaining databases, building
          RESTful APIs, ensuring security and data integrity, and
          troubleshooting issues and building dynamic user interfaces for web
          applications.
        </p>
        <div>
          <p className={style.stack}>NODE, EXPRESS JS, REACT JS AND MONGO DB</p>
          <Button content="Contact Me" />
        </div>}
      </div> */}
    </div>
  );
};
export default Home;
