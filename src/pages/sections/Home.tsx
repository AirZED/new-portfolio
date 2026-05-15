//importing from react-router-dom
import { useContext, useState, useEffect } from "react";
import { scrollToView } from "../../utils/utils";
import { ComponentRefs } from "../../App";
import portfolioContext from "../../store/portfolioStore";
// importing from react icons
import { MdOutlineArrowOutward } from "react-icons/md";
import NavLinks from "../../components/NavLinks";

interface HomeProps {
  componentsRef: ComponentRefs;
}

const FULL_NAME = "Mfoniso Ukpabio";

const Home = ({ componentsRef }: HomeProps) => {
  const context = useContext(portfolioContext);
  const [charCount, setCharCount] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (charCount >= FULL_NAME.length) {
      const timer = setTimeout(() => setShowCursor(false), 900);
      return () => clearTimeout(timer);
    }
    const timer = setTimeout(() => setCharCount((c) => c + 1), 65);
    return () => clearTimeout(timer);
  }, [charCount]);

  interface MenuItemProps {
    word: string;
    className?: string;
    componentRef: any;
    sectionTitle?: string;
  }

  const MenuItem = (props: MenuItemProps): JSX.Element => {
    const handleClick = () => {
      scrollToView(
        props.componentRef,
        context?.openCollapsibleSection,
        props.sectionTitle
      );
    };

    return (
      <li id="menu-item" onClick={handleClick} className="flex cursor-pointer items-center my-1 group">
        <div className="invisible w-0 opacity-0 transition-all duration-300 ease-in bg-[var(--dark-bg)] rounded-full mr-0 h-[0.7rem] group-hover:visible group-hover:w-[0.7rem] group-hover:opacity-100 group-hover:mr-4"></div>
        <h1 className="text-[1.8rem] flex group-hover:text-[var(--lessdark-bg)] max-[550px]:text-[1.4rem]">{props.word}</h1>
        <MdOutlineArrowOutward className="ml-2 text-[1.5rem]" />
      </li>
    );
  };

  return (
    <div className="bg-[var(--light-bg)] h-auto pt-32 px-16 pb-0 max-[1200px]:pt-24 max-[1200px]:px-16 max-[700px]:pt-20 max-[700px]:px-4 max-[550px]:pt-16 [&_*]:text-[var(--dark-bg)]">
      <div>
        <h1 className="leading-[10rem] font-black text-[10rem] tracking-tighter text-[var(--dark-bg)] max-[700px]:text-[7rem] max-[700px]:leading-[7.5rem] max-[700px]:font-bold max-[700px]:mb-2 max-[550px]:text-[3.8rem] max-[550px]:leading-[4.2rem] max-[400px]:text-[3.2rem] max-[400px]:leading-[3.6rem]">
          {FULL_NAME.slice(0, charCount)}
          {showCursor && (
            <span className="inline-block bg-[var(--dark-bg)] w-[0.05em] h-[0.8em] ml-[0.05em] translate-y-1 animate-blink" />
          )}
        </h1>
        <p className="text-[4rem] max-[700px]:text-[2rem] max-[550px]:text-[1.3rem]">Software Engineer</p>
      </div>

      <div className="mt-10 max-[550px]:mt-6">
        {/* Separator — mobile only */}
        <div className="hidden max-[700px]:flex items-center gap-3 mb-4">
          <div className="h-[0.5px] w-full bg-[var(--dark-bg)] opacity-15" />
          <span className="text-[0.7rem] tracking-[0.2em] uppercase opacity-40 whitespace-nowrap">Navigate</span>
        </div>

        <div className="w-fit max-[550px]:w-full">
          <MenuItem
            word="About Mfoniso"
            componentRef={componentsRef.aboutRef}
            sectionTitle="About Mfoniso"
          />
          <MenuItem
            word="My Expertise"
            componentRef={componentsRef.expertiseRef}
            sectionTitle="My Expertise"
          />
          <MenuItem
            word="Work Experience"
            componentRef={componentsRef.experienceRef}
            sectionTitle="Work Experience"
          />
          <MenuItem
            word="Some Selected Projects"
            componentRef={componentsRef.projectRef}
            sectionTitle="My Works"
          />
          <MenuItem
            word="Contacts"
            componentRef={componentsRef.contactRef}
            sectionTitle="Contact Me"
          />
        </div>
        <div className="mt-6 max-[550px]:mt-4">
          <NavLinks />
        </div>
      </div>
    </div>
  );
};
export default Home;
