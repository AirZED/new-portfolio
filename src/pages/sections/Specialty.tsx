import { forwardRef } from "react";
// importing supporting components
import CollapsibleSection from "../../components/CollapsibleSection";
// importing icons
import { FaReact, FaNodeJs } from "react-icons/fa";
import { TbCurrencySolana } from "react-icons/tb";

const Specialtys = forwardRef((props, ref: any) => {
  type SpecialtyProps = {
    icon?: JSX.Element;
    name: string;
    stack: string;
    description: string;
    class?: string;
  };
  const Specialty = ({
    icon,
    name,
    stack,
    class: className,
    description,
  }: SpecialtyProps) => {
    return (
      <div className="border-[0.5px] border-[var(--dark-bg)] flex-1 p-8 h-auto max-[1000px]:p-4 max-[1000px]:w-full max-[1000px]:mb-4 max-[1000px]:last:mb-0 max-[700px]:mb-6 max-[700px]:p-6 max-[700px]:px-4">
        <div className="flex items-center justify-start gap-2">
          <span className="text-[3rem] fill-[var(--dark-bg)] inline-grid max-[1000px]:text-[2.5rem] max-[700px]:text-[2rem]">{icon}</span>
          <div className="font-black">
            <h1 className="mt-1 text-[2rem] leading-8 relative w-fit max-[1000px]:text-[1.7rem] max-[1000px]:leading-6 max-[700px]:text-[1.2rem] max-[700px]:leading-[1.4rem]">
              {name}
              <div className={`h-[0.6rem] w-full bottom-0 absolute -z-10 ${className === "orange" ? "bg-[var(--accent-color2)]" : "bg-[var(--accent-color1)]"}`}></div>
            </h1>
            <h1>{stack}</h1>
          </div>
        </div>
        <p className="border-l-[0.5px] border-[var(--dark-bg)] my-6 mx-6 py-6 px-6 font-medium text-[1.2rem] max-[1000px]:my-5 max-[1000px]:mx-5 max-[1000px]:py-5 max-[1000px]:px-5 max-[1000px]:text-base max-[700px]:my-4 max-[700px]:mx-2 max-[700px]:py-4 max-[700px]:px-4 max-[700px]:text-[0.9rem] max-[700px]:leading-[1.4rem]">{description}</p>
      </div>
    );
  };

  return (
    <div className="p-0" ref={ref}>
      <CollapsibleSection title="My Expertise">
        <div className="flex gap-0 flex-wrap max-[1000px]:flex-col">
          <Specialty
            class="orange"
            icon={<FaNodeJs />}
            name="Backend Dev"
            stack="C++, Rust, TS, NodeJS, NestJS, ExpressJS"
            description="Proficient in functional and object-oriented programming paradigms, skilled in languages such as C++, Python, JavaScript, and TypeScript"
          />
          <Specialty
            icon={<FaReact />}
            name="Frontend Dev"
            stack="React, NextJS"
            description="Enthusiastic about UI/UX design, possessing more than two years of hands-on development expertise in HTML, CSS, JavaScript, as well as React and NextJS frameworks."
          />
          <Specialty
            class="orange"
            icon={<TbCurrencySolana />}
            name="Blockchain Engineer"
            stack="Solana Rust, Sui Move"
            description="Experienced blockchain developer with expertise in building decentralized applications on Solana using Rust and developing smart contracts on Sui using Move programming language."
          />
        </div>
      </CollapsibleSection>
    </div>
  );
});

export default Specialtys;
