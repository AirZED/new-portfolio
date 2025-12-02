import { forwardRef } from "react";
// importing supporting components
import CollapsibleSection from "../../components/CollapsibleSection";
// Importing style
import style from "./../../styles/Specialtys.module.css";
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
      <div className={style.specialty}>
        <div className={style.topic}>
          <span>{icon}</span>
          <div className={style.details}>
            <h1 className={style.name}>
              {name}
              <div className={className && style[className]}></div>
            </h1>
            <h1>{stack}</h1>
          </div>
        </div>
        <p>{description}</p>
      </div>
    );
  };

  return (
    <div className={style.specialtys} ref={ref}>
      <CollapsibleSection title="My Expertise">
        <div className={style["specialtys-body"]}>
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
