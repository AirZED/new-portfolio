import { ReactNode, useContext } from "react";
import { MdOutlineArrowOutward } from "react-icons/md";
import { CgClose } from "react-icons/cg";
import { scrollToView } from "./../utils/utils";
import portfolioContext from "../store/portfolioStore";

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
    <span onClick={darkModeHandler} className="flex items-center justify-center ml-4 text-[var(--dark-bg)] cursor-pointer font-light [&>*]:text-[1.8rem]">
      {childNode}
      {type}
    </span>
  );
};

interface LinkProps {
  text: string;
  to?: string;
  componentRef: any;
  sectionTitle?: string;
}

export const EachLink = ({ text, componentRef, sectionTitle }: LinkProps): JSX.Element => {
  const context = useContext(portfolioContext);

  const handleClick = () => {
    scrollToView(
      componentRef,
      context?.openCollapsibleSection,
      sectionTitle
    );
  };

  return (
    <li onClick={handleClick} className="no-underline text-[1.2rem] font-black p-4 flex items-center justify-between text-[var(--dark-bg)] cursor-pointer gap-1 [&>*]:transition-[ease-in_1s] [&>*]:m-0 [&>*]:font-light [&:hover_p]:animate-[move-up-and-back_0.5s_forwards] [&>div:hover_.link-icon]:animate-[move-up-and-back_0.5s]">
      <p>{text}</p>
      <MdOutlineArrowOutward className="link-icon" />
    </li>
  );
};

interface LogoSectionProps {
  openNavHandler: () => void;
}

export const LogoSection = ({ openNavHandler }: LogoSectionProps) => {
  return (
    <div className="flex items-center justify-between h-16 px-4">
      <h1 className="bg-[var(--dark-bg)] text-[var(--light-bg)] text-[1.3rem] h-10 w-[2.3rem] items-center justify-center flex [clip-path:polygon(50%_0,100%_25%,100%_75%,50%_100%,0_75%,0_25%)] max-[700px]:text-base">M</h1>
      <CgClose className="text-[2rem] cursor-pointer" onClick={openNavHandler} />
    </div>
  );
};
