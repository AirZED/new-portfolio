import { ReactNode } from "react";
import { HashLink } from "react-router-hash-link";
import style from "./../styles/Nav.module.css";
import { MdOutlineArrowOutward } from "react-icons/md";

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
