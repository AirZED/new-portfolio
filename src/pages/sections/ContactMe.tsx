import { forwardRef } from "react";
// importing supporting component
import CollapsibleSection from "../../components/CollapsibleSection";

// importing style
import style from "./../../styles/ContactMe.module.css";

// importing from react icons
import { MdOutlineArrowOutward } from "react-icons/md";

const ContactMe = forwardRef((props, ref: any) => {
  return (
    <div className={style.contact} id="contacts" ref={ref}>
      <CollapsibleSection title="Contact Me">
        <p>
          Ready to bring your vision to life? Let's collaborate and create an
          exceptional online presence. Contact me today!!!
        </p>
        <a href="mailto:ukpabiomfoniso@gmail.com">
          Send Me an Email <MdOutlineArrowOutward />
        </a>
      </CollapsibleSection>
    </div>
  );
});

export default ContactMe;
