import { forwardRef } from "react";
// importing supporting component
import CollapsibleSection from "../../components/CollapsibleSection";
// importing from react icons
import { MdOutlineArrowOutward } from "react-icons/md";

const ContactMe = forwardRef((props, ref: any) => {
  return (
    <div className="p-0 h-auto" id="contacts" ref={ref}>
      <CollapsibleSection title="Contact Me">
        <p className="text-[2rem] max-[700px]:text-[1.3rem] max-[500px]:text-base">
          Ready to bring your vision to life? Let's collaborate and create an
          exceptional online presence. Contact me today!!!
        </p>
        <a href="mailto:ukpabiomfoniso@gmail.com" className="mt-8 font-black text-[2.5rem] no-underline flex items-center justify-start text-[var(--dark-bg)] gap-2 max-[700px]:text-[1.4rem] max-[700px]:mt-2 max-[500px]:text-[1.1rem]">
          Send Me an Email <MdOutlineArrowOutward />
        </a>
      </CollapsibleSection>
    </div>
  );
});

export default ContactMe;
