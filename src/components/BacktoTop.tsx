// importing from react icons
import { IoIosArrowUp } from "react-icons/io";

const BacktoTop = (): JSX.Element => {
  const scrolltoTopHandler = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div
      className="fixed bottom-8 right-16 rounded-full h-12 w-12 flex items-center justify-center bg-[var(--light-bg)] cursor-pointer animate-[showMoreBtn_0.2s_linear] transition-all duration-500 shadow-[0_0.1rem_0.5rem_var(--lessdark-bg)] hover:bg-[var(--dark-bg)] hover:[&>*]:text-[var(--light-bg)] [&>*]:text-[1.5rem] [&>*]:text-[var(--dark-bg)] max-[700px]:right-4 max-[700px]:bottom-4"
      title="Back to top"
      onClick={scrolltoTopHandler}
    >
      <IoIosArrowUp />
    </div>
  );
};

export default BacktoTop;
