import { forwardRef } from "react";
import CollapsibleSection from "../../components/CollapsibleSection";
import { FaReact, FaNodeJs, FaRobot } from "react-icons/fa";
import { TbCurrencySolana } from "react-icons/tb";

const Specialtys = forwardRef((props, ref: any) => {
  type SpecialtyProps = {
    icon?: JSX.Element;
    name: string;
    stack: string;
    description: string;
    accent?: "orange" | "teal";
  };

  const Specialty = ({ icon, name, stack, description, accent = "orange" }: SpecialtyProps) => {
    return (
      <div className="border-[0.5px] border-[var(--dark-bg)] p-8 h-auto transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(0,0,0,0.09)] hover:border-[var(--accent-color1)] cursor-default max-[1000px]:p-6 max-[700px]:p-5">
        <div className="flex items-center justify-start gap-2">
          <span className="text-[3rem] fill-[var(--dark-bg)] inline-grid max-[1000px]:text-[2.5rem] max-[700px]:text-[2rem]">
            {icon}
          </span>
          <div className="font-black">
            <h1 className="mt-1 text-[2rem] leading-8 relative w-fit max-[1000px]:text-[1.7rem] max-[1000px]:leading-6 max-[700px]:text-[1.2rem] max-[700px]:leading-[1.4rem]">
              {name}
              <div
                className={`h-[0.6rem] w-full bottom-0 absolute -z-10 ${
                  accent === "teal" ? "bg-[var(--accent-color2)]" : "bg-[var(--accent-color1)]"
                }`}
              />
            </h1>
            <p className="text-[1rem] font-normal opacity-70 mt-1 max-[700px]:text-[0.85rem]">{stack}</p>
          </div>
        </div>
        <p className="border-l-2 border-[var(--accent-color1)] my-6 mx-2 py-4 px-5 font-medium text-[1.2rem] max-[1000px]:text-base max-[700px]:text-[0.9rem] max-[700px]:leading-[1.4rem]">
          {description}
        </p>
      </div>
    );
  };

  return (
    <div className="p-0" ref={ref}>
      <CollapsibleSection title="My Expertise">
        <div className="grid grid-cols-2 max-[1000px]:grid-cols-1 gap-0">
          <Specialty
            accent="orange"
            icon={<FaNodeJs />}
            name="Backend Dev"
            stack="C++, Rust, TS, Node.js, NestJS, Express.js"
            description="Proficient in functional and object-oriented programming paradigms, building high-performance APIs and scalable backend systems using Node.js, Rust, and TypeScript."
          />
          <Specialty
            accent="teal"
            icon={<FaReact />}
            name="Frontend Dev"
            stack="React, Next.js, TypeScript, Tailwind"
            description="Passionate about clean, responsive UI/UX — over two years of hands-on experience building production-grade interfaces with React and Next.js."
          />
          <Specialty
            accent="orange"
            icon={<TbCurrencySolana />}
            name="Blockchain Engineer"
            stack="Solana Rust, Sui Move, Web3.js, Ethers.js"
            description="Experienced in building decentralized applications on Solana using Rust and smart contracts on Sui using Move. Full EVM-compatible chain integration via Web3.js and Ethers.js."
          />
          <Specialty
            accent="teal"
            icon={<FaRobot />}
            name="AI & Researcher"
            stack="AI Agents, IoT, Blockchain Research"
            description="Active researcher across AI systems, IoT architecture, and decentralized technologies. Hands-on experience designing and building intelligent agents and exploring applied AI in systems contexts."
          />
        </div>
      </CollapsibleSection>
    </div>
  );
});

export default Specialtys;
