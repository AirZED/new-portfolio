// importing from react
import { Fragment, useState, useContext, useEffect } from "react";
// importing from useLocation
import { useLocation } from "react-router-dom";
import { ComponentRefs } from "../../App";
// importing store
import portfolioContext from "../../store/portfolioStore";
// importing components
import Backdrop from "../../components/Backdrop";
import NavLinks from "../../components/NavLinks";

// importing supporting component
import {
  DarkModeComponent,
  EachLink,
  LogoSection,
} from "../../components/NavUtils";
// importing from react-icons
import { CgMenuRight } from "react-icons/cg";
import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";

interface NavBarProps {
  componentsRef: ComponentRefs;
}

const Nav = ({ componentsRef }: NavBarProps) => {
  const { pathname } = useLocation();
  const Contx = useContext(portfolioContext);
  const [openNav, setOpenNav] = useState(false);

  const darkModeHandler = () => {
    const root = document.querySelector("html");
    root?.classList.toggle("dark");
    Contx.darkModeHandler();
  };

  // handle add to localstorage

  const openNavHandler = () => {
    setOpenNav(true);
  };

  const closeNavHandler = () => {
    setOpenNav(false);
  };

  useEffect(() => {
    if (Contx.pageWidth > 699) {
      setOpenNav(false);
    }
  }, [Contx.pageWidth]);

  const NavEntities = (
    <Fragment>
      <EachLink
        text="About"
        to="/#info"
        componentRef={componentsRef.aboutRef}
        sectionTitle="About Mfoniso"
      />
      <EachLink
        text="Expertise"
        to="/#expertise"
        componentRef={componentsRef.expertiseRef}
        sectionTitle="My Expertise"
      />
      <EachLink
        text="Experience"
        to="/#experience"
        componentRef={componentsRef.experienceRef}
        sectionTitle="Work Experience"
      />
      <EachLink
        text="Projects"
        to="/#projects"
        componentRef={componentsRef.projectRef}
        sectionTitle="My Works"
      />
      <EachLink
        text="Contact"
        to="/#contacts"
        componentRef={componentsRef.contactRef}
        sectionTitle="Contact Me"
      />
    </Fragment>
  );

  const BigScreenNav = () => {
    const navClose = Contx.scrollPosition > window.innerHeight / 4;

    if (navClose) {
      return (
        <nav className="flex flex-row justify-between items-center fixed top-0 right-0 left-0 z-[101] h-20 w-full p-0 gap-2 bg-[var(--light-bg)] px-36 border-b-[0.5px] border-[#ccc]/50 max-[700px]:px-4">
          <h1 className="bg-[var(--dark-bg)] text-[var(--light-bg)] text-[1.3rem] h-10 w-[2.3rem] items-center justify-center flex [clip-path:polygon(50%_0,100%_25%,100%_75%,50%_100%,0_75%,0_25%)]">M</h1>

          <div className="flex items-center">
            <div className="flex gap-2 items-center list-none max-[700px]:hidden">
              {pathname === "/" && NavEntities}
            </div>

            <div className="flex items-center">
              {!Contx.darkMode && (
                <DarkModeComponent
                  type="Dark"
                  childNode={<MdDarkMode />}
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
                className="hamburger-mobile text-[1.7rem] ml-4 cursor-pointer text-[var(--dark-bg)]"
                onClick={openNavHandler}
                aria-label="Open menu"
              />
            </div>
          </div>
        </nav>
      );
    }

    return (
      <nav className="flex flex-row justify-between items-center fixed top-0 right-0 left-0 z-[101] h-16 w-full p-0 gap-2">
        <h1 className="bg-[var(--dark-bg)] text-[var(--light-bg)] text-[1.3rem] h-10 w-[2.3rem] items-center justify-center flex [clip-path:polygon(50%_0,100%_25%,100%_75%,50%_100%,0_75%,0_25%)]">M</h1>

        <div className="flex items-center">
          <div className="flex items-center">
            {!Contx.darkMode && (
              <DarkModeComponent
                type="Dark"
                childNode={<MdDarkMode />}
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
              className="hamburger-mobile text-[1.7rem] ml-4 cursor-pointer text-[var(--dark-bg)]"
              onClick={openNavHandler}
              aria-label="Open menu"
            />
          </div>
        </div>
      </nav>
    );
  };

  const SmallScreenNav = () => {
    return (
      <nav className="flex flex-col justify-between items-center fixed top-0 right-0 left-0 z-[101] h-auto w-full p-0 gap-2 border-b-[0.5px] border-[var(--dark-bg)]">
        <div className="relative flex flex-col m-0 h-full w-full bg-[var(--nav-bg)] [&>*]:flex [&>*]:items-center">
          <LogoSection openNavHandler={closeNavHandler} />
          <div className="flex items-center flex-col w-full [&_li]:border-t-[0.5px] [&_li]:border-[var(--dark-bg)] [&_li]:w-full" onClick={closeNavHandler}>
            {pathname === "/" && NavEntities}
          </div>
        </div>
        <div className="bg-[var(--nav-bg)] h-16 px-4 w-full [&>div]:p-0 [&>div]:border-none [&>div]:w-full [&>div]:justify-between [&>div_a]:p-0 [&>div_a]:m-0">
          <NavLinks />
        </div>
      </nav>
    );
  };

  return (
    <Fragment>
      {!openNav && <BigScreenNav />}
      {openNav && (
        <Backdrop closeBackdrop={closeNavHandler}>
          <SmallScreenNav />
        </Backdrop>
      )}
    </Fragment>
  );
};

export default Nav;
