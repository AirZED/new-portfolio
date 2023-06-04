import style from "./../../styles/Footer.module.css";

// importing icons
import { FaSmileWink } from "react-icons/fa";

const Footer = () => {
  return (
    <div className={style.footer}>
      <p>Designed and Built with Passion </p>
      <FaSmileWink className={style.icon} />
    </div>
  );
};

export default Footer;
