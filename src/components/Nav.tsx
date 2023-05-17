// importing from react
import { Fragment, useState } from "react";

// importing from react router dom
import { Link } from "react-router-dom";

// importing components
import Button from "./Button";
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
  const [openNav, setOpenNav] = useState(false);

  const openNavHandler = () => {
    setOpenNav((prev) => !prev);
  };
  const navClassName = `${style.nav} ${style.close}`;

  const CloseNav = () => {
    return (
      <nav className={navClassName}>
        <h1 className={style.name}>
          MFONISO <span>UKPABIO</span>
        </h1>
        <div className={style["nav-icons"]}>
          <span>
            <CiLight className={style.icon} />
            Light
          </span>
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
        <div >
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
