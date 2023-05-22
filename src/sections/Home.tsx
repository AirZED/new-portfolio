//importing from react-router-dom
import { scrollToView } from "../utils/utils";
import { ComponentRefs } from "../App";

// importing custom hook
import useAnimate from "../hooks/useAnimate";

// importing style
import style from "./../styles/Home.module.css";

// importing from react icons
import { MdOutlineArrowOutward } from "react-icons/md";

interface HomeProps {
  componentsRef: ComponentRefs;
}

const Home = ({ componentsRef }: HomeProps) => {
  // calling currentText hook
  const currentText = useAnimate("Mfoniso Ukpabio");

  interface MenuItemProps {
    word: string;
    className?: string;
    componentRef: any;
  }

  const MenuItem = (props: MenuItemProps): JSX.Element => {
    return (
      <li id="menu-item" onClick={scrollToView.bind(null, props.componentRef)}>
        <div className={style.dot}></div>
        <h1>{props.word}</h1>
        <MdOutlineArrowOutward className={style["more-icon"]} />
      </li>
    );
  };

  return (
    <div className={style.home}>
      <div className={style.topic}>
        <h1>{currentText}</h1>
        <p>Backend and Frontend Web Developer</p>
      </div>

      <div className={style.menu}>
        <MenuItem word="About Mfoniso" componentRef={componentsRef.aboutRef} />
        <MenuItem
          word="Some Selected Projects"
          componentRef={componentsRef.projectRef}
        />
        <MenuItem word="Contacts" componentRef={componentsRef.contactRef} />
      </div>
    </div>
  );
};
export default Home;
