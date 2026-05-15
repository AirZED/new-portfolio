import { forwardRef } from "react";
import CollapsibleSection from "../../components/CollapsibleSection";
import { MdOutlineArrowOutward } from "react-icons/md";

const ContactMe = forwardRef((props, ref: any) => {
  return (
    <div className="p-0 h-auto" id="contacts" ref={ref}>
      <CollapsibleSection title="Contact Me">
        <div className="flex flex-col gap-8 max-[700px]:gap-6">

          <h3 className="text-[4rem] font-black leading-tight tracking-tight max-[700px]:text-[2.8rem] max-[500px]:text-[2.2rem]">
            Got an idea?{" "}
            <span className="text-[var(--accent-color1)]">Let's build it.</span>
          </h3>

          <p className="text-[1.4rem] max-w-[44rem] opacity-70 leading-relaxed max-[700px]:text-[1.2rem] max-[500px]:text-base">
            Open to full-time roles, freelance projects, research collaborations,
            and interesting conversations. Don't hesitate to reach out.
          </p>

          <a
            href="mailto:ukpabiomfoniso@gmail.com"
            className="group mt-2 font-black text-[2rem] no-underline flex items-center gap-3 w-fit border-b-2 border-[var(--dark-bg)] hover:border-[var(--accent-color1)] hover:text-[var(--accent-color1)] transition-all duration-200 pb-1 max-[700px]:text-[1.5rem] max-[500px]:text-[1.1rem]"
          >
            ukpabiomfoniso@gmail.com
            <MdOutlineArrowOutward className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200" />
          </a>

        </div>
      </CollapsibleSection>
    </div>
  );
});

export default ContactMe;
