// importing supporting component
import Topic from "../components/Topic";

// importing style
import style from "./../styles/ContactMe.module.css";

// importing from react icons
import { MdOutlineArrowOutward } from "react-icons/md";

const ContactMe = () => {
  return (
    <div className={style.contact} id="contacts">
      <Topic content="Contact Me" />
      <p>
        Ready to bring your vision to life? Let's collaborate and create an
        exceptional online presence. Contact me today!!!
      </p>
      <a href="mailto:ukpabiomfoniso@gmail.com">
        Send Me an Email <MdOutlineArrowOutward />
      </a>
    </div>
  );
};

export default ContactMe;
