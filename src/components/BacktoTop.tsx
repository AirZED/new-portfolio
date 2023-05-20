// importing from react icons
import { IoIosArrowUp } from "react-icons/io";

// importing style
import style from "./../styles/BacktopTop.module.css";

const BacktoTop = (): JSX.Element => {
  const scrolltoTopHandler = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div
      className={style.backtotop}
      title="Back to top"
      onClick={scrolltoTopHandler}
    >
      <IoIosArrowUp />
    </div>
  );
};

export default BacktoTop;
