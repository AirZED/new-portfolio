// importing from react icons
import { IoIosArrowUp } from "react-icons/io";

// importing style
import style from "./../styles/BacktopTop.module.css";

const BacktoTop = (): JSX.Element => {
  return (
    <div className={style.backtotop} title="Back to top">
      <IoIosArrowUp />
    </div>
  );
};

export default BacktoTop;
