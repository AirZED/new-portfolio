import { forwardRef } from "react";
// importing image
import displayImage from "./../../assets/images/me.jpg";
// importing supporting components
import CollapsibleSection from "../../components/CollapsibleSection";

const AboutMe = forwardRef((props, ref: any) => {
  return (
    <div className="p-0 text-[var(--dark-bg)] bg-[var(--light-bg)] h-auto mt-[2rem]" id="info" ref={ref}>
      <CollapsibleSection title="About Mfoniso" defaultExpanded={true}>
        <div className="flex items-start justify-center gap-16 w-full max-[1200px]:flex-col max-[1200px]:items-center max-[1200px]:gap-12">
          <img
            src={displayImage}
            alt="mfoniso standing and smiling"
            className="h-[25rem] w-[25rem] object-cover rounded-full border-[0.5px] border-white shadow-[0_0_1rem_1rem_rgba(160,158,158,0.397)] flex-shrink-0 max-[1200px]:h-[22rem] max-[1200px]:w-[22rem] max-[700px]:h-[18rem] max-[700px]:w-[18rem] max-[500px]:h-[15rem] max-[500px]:w-[15rem]"
          />
          <div className="w-full flex-1">
            <p className="text-[2rem] font-normal text-justify leading-[1.8] max-[1200px]:text-[1.8rem] max-[700px]:text-[1.5rem] max-[700px]:leading-[1.6] max-[500px]:text-[1.2rem] max-[500px]:leading-[1.5]">
              <span className="font-black max-[700px]:text-[1.6rem] max-[500px]:text-[1.3rem]">Mfoniso Ukpabio</span> is a highly skilled and detail-oriented
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
