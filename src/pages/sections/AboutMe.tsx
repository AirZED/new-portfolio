import { forwardRef } from "react";
// importing style
import style from "./../../styles/AboutMe.module.css";

// importing image
import displayImage from "./../../assets/images/me.jpg";

// importing supporting components
import CollapsibleSection from "../../components/CollapsibleSection";

const AboutMe = forwardRef((props, ref: any) => {
  return (
    <div className={style.about} id="info" ref={ref}>
      <CollapsibleSection title="About Mfoniso" defaultExpanded={true}>
        <div className="flex items-start justify-center gap-4 w-full">
          <div className="flex object-cover h-[35rem] w-[35rem] rounded-[50px] overflow-hidden">
            <img src={displayImage} alt="mfoniso standing and smiling" className="w-full h-full object-cover" />
          </div>
          <div className={style.text}>
            <p>
              <span>Mfoniso Ukpabio</span> is a highly skilled and detail-oriented
              Software Engineer, specializing in Rust, ExpressJs, TypeScript,
              Next.js, React, and Node.js. With a strong background in
              problem-solving, Data Structures, and Algorithms (DSA), Mfoniso
              brings a deep understanding of efficient code implementation and
              optimization strategies. Their dedication to delivering high-quality
              and scalable solutions is evident through their successful
              completion of multiple internships and ongoing studies in Computer
              Engineering at the University of Uyo.
            </p>
          </div>
        </div>
      </CollapsibleSection>
    </div>
  );
});

export default AboutMe;
