import { forwardRef } from "react";
// importing supporting components
import CollapsibleSection from "../../components/CollapsibleSection";
// importing data
import workExperienceData from "../../assets/work_experience_data";

const WorkExperience = forwardRef((props, ref: any) => {
    return (
        <div className="p-0 h-auto text-[var(--dark-bg)] bg-[var(--light-bg)]" id="experience" ref={ref}>
            <CollapsibleSection title="Work Experience">
                <div className="flex flex-col gap-8 mt-12 max-[700px]:gap-6">
                    {workExperienceData.map((experience) => (
                        <div key={experience.id} className="border-[0.5px] border-[var(--dark-bg)] p-8 rounded-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(0,0,0,0.1)] max-[700px]:p-6">
                            <div className="flex justify-between items-start mb-6 flex-wrap gap-4 max-[1000px]:flex-col">
                                <div className="flex-1 min-w-[250px]">
                                    <h3 className="text-[2rem] font-black mb-2 text-[var(--dark-bg)] max-[1000px]:text-[1.7rem] max-[700px]:text-[1.5rem] max-[500px]:text-[1.3rem]">{experience.position}</h3>
                                    <div className="flex items-center gap-2 text-[1.3rem] text-[var(--dark-bg)] flex-wrap max-[1000px]:text-[1.2rem] max-[700px]:text-[1.1rem] max-[500px]:text-base max-[500px]:flex-col max-[500px]:items-start max-[500px]:gap-1">
                                        <span className="font-semibold">{experience.company}</span>
                                        <span className="opacity-60 max-[500px]:hidden">·</span>
                                        <span className="opacity-80">{experience.employmentType}</span>
                                    </div>
                                </div>
                                <div className="flex flex-col items-end text-right gap-1 max-[1000px]:items-start max-[1000px]:text-left">
                                    <span className="text-[1.3rem] font-semibold text-[var(--dark-bg)] max-[1000px]:text-[1.2rem] max-[700px]:text-[1.1rem]">
                                        {experience.startDate} - {experience.endDate}
                                    </span>
                                    <span className="text-[1.1rem] opacity-70 max-[700px]:text-base">
                                        {experience.duration}
                                    </span>
                                </div>
                            </div>
                            <div className="border-l-[0.5px] border-[var(--dark-bg)] pl-6 ml-4 max-[700px]:pl-4 max-[700px]:ml-2">
                                <p className="text-[1.2rem] mb-4 opacity-80 italic max-[700px]:text-[1.1rem]">{experience.location}</p>
                                {experience.description && (
                                    <p className="text-[1.3rem] leading-[1.6] mb-4 text-justify max-[700px]:text-[1.1rem] max-[700px]:leading-[1.5] max-[500px]:text-base">{experience.description}</p>
                                )}
                                {experience.skills.length > 0 && (
                                    <div className="text-[1.2rem] mt-4 pt-4 border-t-[0.5px] border-black/10 max-[700px]:text-base max-[500px]:text-[0.9rem]">
                                        <span className="font-semibold">Skills: </span>
                                        {experience.skills.map((skill, index) => (
                                            <span key={index} className="opacity-90">
                                                {skill}
                                                {index < experience.skills.length - 1 && " · "}
                                            </span>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </CollapsibleSection>
        </div>
    );
});

export default WorkExperience;

