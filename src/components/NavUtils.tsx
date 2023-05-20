import { ReactNode } from "react";
import { HashLink } from "react-router-hash-link";
import style from "./../styles/Nav.module.css";
import { MdOutlineArrowOutward } from "react-icons/md";
import { CgClose } from "react-icons/cg";

type DarkModeProps = {
  childNode: ReactNode;
  type: string;
  darkModeHandler: () => void;
};

export const DarkModeComponent = ({
  childNode,
  type,
  darkModeHandler,
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
export const EachLink = ({ text, to }: LinkProps): JSX.Element => {
  return (
    <HashLink to={to}>
      <p>{text}</p>
      <MdOutlineArrowOutward className={style["link-icon"]} />
    </HashLink>
  );
};

interface LogoSectionProps {
  openNavHandler: () => void;
}

export const LogoSection = ({ openNavHandler }: LogoSectionProps) => {
  return (
    <div className={style.logo}>
      <h1 className={style.name}>MFONISO UKPABIO</h1>
      <CgClose className={style["close-icon"]} onClick={openNavHandler} />
    </div>
  );
};
