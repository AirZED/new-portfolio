// importing from react
import { Fragment, useState, useContext, useEffect } from "react";
import { ComponentRefs } from "../App";

// importing store
import portfolioContext from "../store/portfolioStore";
// importing components
import Backdrop from "../components/Backdrop";
// importing supporting component
import {
  DarkModeComponent,
  EachLink,
  LogoSection,
} from "../components/NavUtils";
// importing from react-icons
import { CgMenuRight } from "react-icons/cg";
import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";
// Importing style
import style from "./../styles/Nav.module.css";

interface NavBarProps {
  componentsRef: ComponentRefs;
}

const Nav = ({ componentsRef }: NavBarProps) => {
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

  useEffect(() => {
    if (Contx.pageWidth > 699) {
      setOpenNav(false);
    }
  }, [Contx.pageWidth]);

  const navClassName = `${style.nav} ${style.close}`;

  const NavEntities = (
    <Fragment>
      <EachLink
        text="About"
        to="/#info"
        componentRef={componentsRef.aboutRef}
      />
      <EachLink
        text="Projects"
        to="/#projects"
        componentRef={componentsRef.projectRef}
      />
      <EachLink
        text="Contact"
        to="/#contacts"
        componentRef={componentsRef.contactRef}
      />
    </Fragment>
  );

  const BigScreenNav = () => {
    const navClose = Contx.scrollPosition > window.innerHeight / 4;

    return (
      <nav className={navClassName}>
        <h1 className={style.name}>
          MFONISO <span>UKPABIO</span>
        </h1>

        <div className={style["close-menu"]}>
          {navClose && <div className={style["close-nav"]}>{NavEntities}</div>}

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
          {NavEntities}
        </div>
        <div className={style["more-info"]}>food</div>
      </nav>
    );
  };

  return (
    <Fragment>
      {!openNav && <BigScreenNav />}
      {openNav && (
        <div>
          <Backdrop closeBackdrop={openNavHandler} />
          <SmallScreenNav />
        </div>
      )}
    </Fragment>
  );
};

export default Nav;