import { ReactNode } from "react";
import style from "./../styles/Nav.module.css";
import { MdOutlineArrowOutward } from "react-icons/md";
import { CgClose } from "react-icons/cg";
import { scrollToView } from "./../utils/utils";

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
  to?: string;
  componentRef: any;
}

export const EachLink = ({ text, componentRef }: LinkProps): JSX.Element => {
  return (
    <li onClick={scrollToView.bind(null, componentRef)}>
      <p>{text}</p>
      <MdOutlineArrowOutward className={style["link-icon"]} />
    </li>
  );
};

interface LogoSectionProps {
  openNavHandler: () => void;
}

export const LogoSection = ({ openNavHandler }: LogoSectionProps) => {
  return (
    <div className={style.logo}>
      <h1 className={style.name}>M</h1>
      <CgClose className={style["close-icon"]} onClick={openNavHandler} />
    </div>
  );
};
