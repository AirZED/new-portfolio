import { forwardRef } from "react";
import displayImage from "./../../assets/images/me.jpg";
import CollapsibleSection from "../../components/CollapsibleSection";

const AboutMe = forwardRef((props, ref: any) => {
  return (
    <div className="p-0 text-[var(--dark-bg)] bg-[var(--light-bg)] h-auto mt-[2rem]" id="info" ref={ref}>
      <CollapsibleSection title="About Mfoniso" defaultExpanded={true}>
        <div className="flex items-start justify-center gap-20 w-full max-[1200px]:flex-col max-[1200px]:items-center max-[1200px]:gap-12">

          {/* Image with accent offset shadow */}
          <div className="relative flex-shrink-0 max-[1200px]:w-auto">
            <img
              src={displayImage}
              alt="Mfoniso Ukpabio"
              className="h-[36rem] w-[27rem] object-cover object-top rounded-2xl relative z-10 max-[1200px]:h-[30rem] max-[1200px]:w-[23rem] max-[700px]:h-[26rem] max-[700px]:w-[20rem] max-[500px]:h-[22rem] max-[500px]:w-[17rem]"
            />
            <div className="absolute inset-0 rounded-2xl bg-[var(--accent-color1)] translate-x-3 translate-y-3 z-0 max-[700px]:translate-x-2 max-[700px]:translate-y-2" />
          </div>

          {/* Text content */}
          <div className="w-full flex-1 flex flex-col gap-6 pt-2">
            <span className="text-[0.85rem] font-semibold tracking-[0.2em] uppercase text-[var(--accent-color1)]">
              Who I am
            </span>

            <p className="text-[1.9rem] font-normal leading-[1.75] max-[1200px]:text-[1.7rem] max-[700px]:text-[1.45rem] max-[700px]:leading-[1.65] max-[500px]:text-[1.15rem] max-[500px]:leading-[1.55]">
              <span className="font-black">Mfoniso Ukpabio</span> is a Software Engineer with a strong focus on building
              scalable, high-performance systems. Specializing in{" "}
              <span className="text-[var(--accent-color1)] font-semibold">Rust, C++, TypeScript, Next.js, React,</span> and{" "}
              <span className="text-[var(--accent-color1)] font-semibold">Node.js</span>, Mfoniso brings depth in
              systems-level thinking alongside full-stack fluency and hands-on experience building{" "}
              <span className="text-[var(--accent-color1)] font-semibold">AI agents</span>. Also an active{" "}
              <span className="text-[var(--accent-color1)] font-semibold">researcher</span> across{" "}
              <span className="text-[var(--accent-color1)] font-semibold">AI, IoT,</span> and{" "}
              <span className="text-[var(--accent-color1)] font-semibold">Blockchain</span>. A{" "}
              <span className="text-[var(--accent-color1)] font-semibold">First Class graduate</span> in Computer
              Engineering from the{" "}
              <span className="font-semibold">University of Uyo</span>, with real-world experience across multiple
              engineering internships.
            </p>

            {/* Stat highlights */}
            <div className="flex gap-8 border-l-4 border-[var(--accent-color1)] pl-6 my-2 max-[500px]:flex-col max-[500px]:gap-4">
              <div>
                <p className="text-[2rem] font-black text-[var(--accent-color1)]">1st</p>
                <p className="text-[0.9rem] opacity-70 tracking-wide uppercase">Class Honours</p>
              </div>
              <div className="w-[0.5px] bg-[var(--dark-bg)] opacity-20 max-[500px]:hidden" />
              <div>
                <p className="text-[2rem] font-black text-[var(--accent-color1)]">5+</p>
                <p className="text-[0.9rem] opacity-70 tracking-wide uppercase">Years building</p>
              </div>
              <div className="w-[0.5px] bg-[var(--dark-bg)] opacity-20 max-[500px]:hidden" />
              <div>
                <p className="text-[2rem] font-black text-[var(--accent-color1)]">Full</p>
                <p className="text-[0.9rem] opacity-70 tracking-wide uppercase">Stack + Systems</p>
              </div>
              <div className="w-[0.5px] bg-[var(--dark-bg)] opacity-20 max-[500px]:hidden" />
              <div>
                <p className="text-[2rem] font-black text-[var(--accent-color1)]">3</p>
                <p className="text-[0.9rem] opacity-70 tracking-wide uppercase">Research Areas</p>
              </div>
            </div>

            {/* Skill tags */}
            <div className="flex flex-wrap gap-3 mt-1">
              {["Rust", "C++", "TypeScript", "Next.js", "React", "Node.js", "Express.js", "AI Agents", "IoT", "Blockchain", "DSA"].map((skill) => (
                <span
                  key={skill}
                  className="text-[0.95rem] font-medium px-4 py-1.5 border-[0.5px] border-[var(--accent-color1)] text-[var(--accent-color1)] rounded-full tracking-wide"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

        </div>
      </CollapsibleSection>
    </div>
  );
});

export default AboutMe;
