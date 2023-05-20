// importing from react
import { Fragment, useState, useContext, ReactNode } from "react";

// importing from react-hash-link
import { HashLink } from "react-router-hash-link";

// importing store
import portfolioContext from "../store/portfolioStore";

// importing components
import Portal from "./Backdrop";

// importing from react-icons
import { CgMenuRight } from "react-icons/cg";
import { CgClose } from "react-icons/cg";
import { MdOutlineArrowOutward } from "react-icons/md";

// Importing style
import style from "./../styles/Nav.module.css";

// importing from react-icons
import { CiLight, CiDark } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";

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

  interface LinkProps {
    text: string;
    to: string;
  }
  const EachLink = ({ text, to }: LinkProps): JSX.Element => {
    return (
      <HashLink to={to}>
        <p>{text}</p>
        <MdOutlineArrowOutward className={style["link-icon"]} />
      </HashLink>
    );
  };

  const navClassName = `${style.nav} ${style.close}`;

  const CloseNav = () => {
    const navClose = Contx.scrollPosition > window.innerHeight / 4;

    return (
      <nav className={navClassName}>
        <h1 className={style.name}>
          MFONISO <span>UKPABIO</span>
        </h1>

        <div className={style["close-menu"]}>
          {navClose && (
            <div className={style["close-nav"]}>
              <EachLink text="About" to="/#info" />
              <EachLink text="Projects" to="/#projects" />
              <EachLink text="Contact" to="/#contacts" />
            </div>
          )}

          <div className={style["nav-icons"]}>
            {!Contx.darkMode && (
              <DarkModeCompoenent
                type="Dark"
                childNode={<MdDarkMode className={style["dark-icon"]} />}
              />
            )}
            {Contx.darkMode && (
              <DarkModeCompoenent type="Light" childNode={<CiLight />} />
            )}

            <CgMenuRight
              className={style["more-icon"]}
              onClick={openNavHandler}
            />
          </div>
        </div>
      </nav>
    );
  };

  // Links

  const OpenNav = () => {
    return (
      <nav className={style.nav}>
        <nav className={style.more}>
          <div className={style.open}>
            <div className={style.header}>
              <h1 className={style.name}>MFONISO UKPABIO</h1>
              <CgClose
                className={style["close-icon"]}
                onClick={openNavHandler}
              />
            </div>
            <EachLink text="About" to="/#info" />
            <EachLink text="Projects" to="/#projects" />
            <EachLink text="Contact" to="/#contacts" />
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
