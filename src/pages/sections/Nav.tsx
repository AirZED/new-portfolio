import { Fragment, useState, useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ComponentRefs } from "../../App";
import portfolioContext from "../../store/portfolioStore";
import Backdrop from "../../components/Backdrop";
import NavLinks from "../../components/NavLinks";
import { DarkModeComponent, EachLink, LogoSection } from "../../components/NavUtils";
import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";

interface NavBarProps {
  componentsRef: ComponentRefs;
}

const HamburgerIcon = ({ onClick }: { onClick: () => void }) => (
  <button
    onClick={onClick}
    aria-label="Open menu"
    className="hidden max-[700px]:flex flex-col gap-[5px] justify-center items-end w-8 h-8 ml-3 cursor-pointer group"
  >
    <span className="w-6 h-[1.5px] bg-[var(--dark-bg)] rounded-full block transition-all duration-300 group-hover:w-5" />
    <span className="w-4 h-[1.5px] bg-[var(--dark-bg)] rounded-full block transition-all duration-300 group-hover:w-6" />
  </button>
);

const Nav = ({ componentsRef }: NavBarProps) => {
  const { pathname } = useLocation();
  const Contx = useContext(portfolioContext);
  const [openNav, setOpenNav] = useState(false);

  const darkModeHandler = () => {
    const root = document.querySelector("html");
    root?.classList.toggle("dark");
    Contx.darkModeHandler();
  };

  const openNavHandler = () => setOpenNav(true);
  const closeNavHandler = () => setOpenNav(false);

  useEffect(() => {
    if (Contx.pageWidth > 699) setOpenNav(false);
  }, [Contx.pageWidth]);

  const NavEntities = (
    <Fragment>
      <EachLink text="About"      to="/#info"       componentRef={componentsRef.aboutRef}      sectionTitle="About Mfoniso"  />
      <EachLink text="Expertise"  to="/#expertise"  componentRef={componentsRef.expertiseRef}  sectionTitle="My Expertise"   />
      <EachLink text="Experience" to="/#experience" componentRef={componentsRef.experienceRef} sectionTitle="Work Experience" />
      <EachLink text="Projects"   to="/#projects"   componentRef={componentsRef.projectRef}    sectionTitle="My Works"       />
      <EachLink text="Contact"    to="/#contacts"   componentRef={componentsRef.contactRef}    sectionTitle="Contact Me"     />
    </Fragment>
  );

  const DarkToggle = () => (
    <>
      {!Contx.darkMode && <DarkModeComponent type="Dark"  childNode={<MdDarkMode />} darkModeHandler={darkModeHandler} />}
      {Contx.darkMode  && <DarkModeComponent type="Light" childNode={<CiLight />}    darkModeHandler={darkModeHandler} />}
    </>
  );

  const BigScreenNav = () => {
    const scrolled = Contx.scrollPosition > window.innerHeight / 4;

    const Logo = () => (
      <h1 className="bg-[var(--dark-bg)] text-[var(--light-bg)] text-[1.3rem] h-10 w-[2.3rem] items-center justify-center flex [clip-path:polygon(50%_0,100%_25%,100%_75%,50%_100%,0_75%,0_25%)]">
        M
      </h1>
    );

    if (scrolled) {
      return (
        <nav className="flex flex-row justify-between items-center fixed top-2 left-2 right-2 z-[101] h-[4.5rem] bg-[var(--nav-bg)]/95 backdrop-blur-md shadow-[0_4px_24px_rgba(0,0,0,0.08)] border-[0.5px] border-black/[0.06] px-4 max-[700px]:px-3">
          <Logo />
          <div className="flex items-center gap-1">
            <div className="flex gap-1 items-center list-none max-[700px]:hidden">
              {pathname === "/" && NavEntities}
            </div>
            <DarkToggle />
            <HamburgerIcon onClick={openNavHandler} />
          </div>
        </nav>
      );
    }

    return (
      <nav className="flex flex-row justify-between items-center fixed top-2 left-2 right-2 z-[101] h-[4.5rem] px-1 max-[700px]:bg-[var(--nav-bg)]/90 max-[700px]:backdrop-blur-md max-[700px]:shadow-[0_4px_20px_rgba(0,0,0,0.07)] max-[700px]:border-[0.5px] max-[700px]:border-black/[0.06] max-[700px]:px-3">
        <Logo />
        <div className="flex items-center">
          <DarkToggle />
          <HamburgerIcon onClick={openNavHandler} />
        </div>
      </nav>
    );
  };

  const SmallScreenNav = () => (
    <nav className="flex flex-col fixed top-2 left-2 right-2 z-[101] overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.18)] border-[0.5px] border-[var(--dark-bg)]/10 bg-[var(--nav-bg)]">
      <LogoSection openNavHandler={closeNavHandler} />

      <div
        className="flex flex-col w-full [&_li]:border-t-[0.5px] [&_li]:border-[var(--dark-bg)]/10 [&_li]:w-full"
        onClick={closeNavHandler}
      >
        {pathname === "/" && NavEntities}
      </div>

      <div className="px-5 py-4 border-t-[0.5px] border-[var(--dark-bg)]/10">
        <NavLinks />
      </div>
    </nav>
  );

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
