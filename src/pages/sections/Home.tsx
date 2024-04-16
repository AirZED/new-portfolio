//importing from react-router-dom
import { scrollToView } from "../../utils/utils";
import { ComponentRefs } from "../../App";
// importing style
import style from "./../../styles/Home.module.css";
// importing from react icons
import { MdOutlineArrowOutward } from "react-icons/md";
import NavLinks from "../../components/NavLinks";

interface HomeProps {
  componentsRef: ComponentRefs;
}

const Home = ({ componentsRef }: HomeProps) => {
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
        <h1>Mfoniso Ukpabio</h1>
        <p>Software Engineer</p>
      </div>

      <div>
        <div className={style.menu}>
          <MenuItem
            word="About Mfoniso"
            componentRef={componentsRef.aboutRef}
          />
          <MenuItem
            word="Some Selected Projects"
            componentRef={componentsRef.projectRef}
          />
          <MenuItem word="Contacts" componentRef={componentsRef.contactRef} />
        </div>
        <NavLinks />
      </div>
    </div>
  );
};
export default Home;
