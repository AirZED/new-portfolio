//importing from react-router-dom
import { useContext } from "react";
import { scrollToView } from "../../utils/utils";
import { ComponentRefs } from "../../App";
import portfolioContext from "../../store/portfolioStore";
// importing from react icons
import { MdOutlineArrowOutward } from "react-icons/md";
import NavLinks from "../../components/NavLinks";

interface HomeProps {
  componentsRef: ComponentRefs;
}

const Home = ({ componentsRef }: HomeProps) => {
  const context = useContext(portfolioContext);

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
      <li id="menu-item" onClick={handleClick} className="flex cursor-pointer items-center my-2 group">
        <div className="invisible w-0 opacity-0 transition-all duration-300 ease-in bg-[var(--dark-bg)] rounded-full mr-0 h-[0.7rem] group-hover:visible group-hover:w-[0.7rem] group-hover:opacity-100 group-hover:mr-4"></div>
        <h1 className="text-[1.8rem] flex group-hover:text-[var(--lessdark-bg)]">{props.word}</h1>
        <MdOutlineArrowOutward className="ml-2 text-[1.5rem]" />
      </li>
    );
  };

  return (
    <div className="bg-[var(--light-bg)] h-auto pt-32 px-16 pb-0 max-[1200px]:pt-24 max-[1200px]:px-16 max-[700px]:pt-16 max-[700px]:px-4 [&_*]:text-[var(--dark-bg)] pcx">
      <div>
        <h1 className="leading-[10rem] font-black text-[10rem] text-[var(--dark-bg)] max-[700px]:text-[8rem] max-[700px]:leading-[8rem] max-[700px]:font-bold max-[700px]:mb-3 max-[550px]:text-[4.5rem] max-[550px]:leading-[5.5rem] max-[550px]:pt-8">Mfoniso Ukpabio</h1>
        <p className="text-[4rem] max-[700px]:text-[2.5rem] max-[550px]:text-[1.5rem]">Software Engineer</p>
      </div>

      <div className="mt-16 max-[550px]:mt-8">
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
        <div className="mt-8 max-[550px]:mt-6">
          <NavLinks />
        </div>
      </div>
    </div>
  );
};
export default Home;
