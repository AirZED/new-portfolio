// importing from react
import { Fragment, useState, useContext } from "react";

// importing store
import portfolioContext from "../store/portfolioStore";
// importing components
import Portal from "./Backdrop";
// importing supporting component
import { DarkModeComponent, EachLink, LogoSection } from "./NavUtils";
// importing from react-icons
import { CgMenuRight, CgClose } from "react-icons/cg";
import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";
// Importing style
import style from "./../styles/Nav.module.css";

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

  const navClassName = `${style.nav} ${style.close}`;

  const BigScreenNav = () => {
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
              <DarkModeComponent
                type="Dark"
                childNode={<MdDarkMode className={style["dark-icon"]} />}
                darkModeHandler={darkModeHandler}
              />
            )}
            {Contx.darkMode && (
              <DarkModeComponent
                type="Light"
                childNode={<CiLight />}
                darkModeHandler={darkModeHandler}
              />
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

  
  const SmallScreenNav = () => {
    return (
      <nav className={style.nav}>
        <div className={style.open}>
          <LogoSection openNavHandler={openNavHandler} />
          <EachLink text="About" to="/#info" />
          <EachLink text="Projects" to="/#projects" />
          <EachLink text="Contact" to="/#contacts" />
        </div>
        <div className={style["more-info"]}>food</div>
      </nav>
    );
  };

  return (
    <Fragment>
      {!openNav && <BigScreenNav />}
      {openNav && (
        <Portal closeBackdrop={openNavHandler} element={<SmallScreenNav />} />
      )}
    </Fragment>
  );
};

export default Nav;
