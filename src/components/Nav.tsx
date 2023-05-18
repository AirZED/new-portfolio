// importing from react
import { Fragment, useState, useContext, ReactNode } from "react";

// importing store
import portfolioContext from "../store/portfolioStore";

// importing components
import Portal from "./Backdrop";

// importing from react-icons
import { CiCircleMore } from "react-icons/ci";
import { CgClose } from "react-icons/cg";
import { MdOutlineArrowOutward } from "react-icons/md";

// Importing style
import style from "./../styles/Nav.module.css";

// importing from react-icons
import { CiLight, CiDark } from "react-icons/ci";

const Nav = () => {
  const Contx = useContext(portfolioContext);
  const [openNav, setOpenNav] = useState(false);

  const darkModeHandler = () => {
    const root = document.querySelector("html");
    root?.classList.toggle("dark");
    Contx.darkModeHandler();
  };
  const openNavHandler = () => {
    setOpenNav((prev) => !prev);
  };

  type DarkModeProps = {
    childNode: ReactNode;
    type: string;
  };

  const DarkModeCompoenent = ({
    childNode,
    type,
  }: DarkModeProps): JSX.Element => {
    return (
      <span onClick={darkModeHandler} className={style["mode-icons"]}>
        {childNode}
        {type}
      </span>
    );
  };

  const navClassName = `${style.nav} ${style.close}`;

  const CloseNav = () => {
    return (
      <nav className={navClassName}>
        <h1 className={style.name}>
          MFONISO <span>UKPABIO</span>
        </h1>
        <div className={style["nav-icons"]}>
          {!Contx.darkMode && (
            <DarkModeCompoenent type="Dark" childNode={<CiDark />} />
          )}
          {Contx.darkMode && (
            <DarkModeCompoenent type="Light" childNode={<CiLight />} />
          )}

          <CiCircleMore className={style.icon} onClick={openNavHandler} />
        </div>
      </nav>
    );
  };

  // Links
  interface LinkProps {
    text: string;
  }
  const EachLink = ({ text }: LinkProps): JSX.Element => {
    return (
      <li>
        <div>
          <p>{text}</p>
          <MdOutlineArrowOutward className={style["link-icon"]} />
        </div>
      </li>
    );
  };

  const OpenNav = () => {
    return (
      <nav className={style.nav}>
        <nav className={style.more}>
          <div className={style.open}>
            <div className={style.header}>
              <h1 className={style.name}>MFONISO UKPABIO</h1>
              <CgClose className={style.icon} onClick={openNavHandler} />
            </div>
            <EachLink text="HOME" />
            <EachLink text="SERVICES" />
            <EachLink text="WORKS" />
            <EachLink text="ABOUT" />
            <EachLink text="CONTACT" />
          </div>
        </nav>
        <div className={style["more-info"]}>food</div>
      </nav>
    );
  };

  return (
    <Fragment>
      {!openNav && <CloseNav />}
      {openNav && (
        <Portal closeBackdrop={openNavHandler} element={<OpenNav />} />
      )}
    </Fragment>
  );
};

export default Nav;
