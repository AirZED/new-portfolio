import { forwardRef } from "react";
// importing style
import style from "./../../styles/WorkExperience.module.css";
// importing supporting components
import CollapsibleSection from "../../components/CollapsibleSection";
// importing data
import workExperienceData from "../../assets/work_experience_data";

const WorkExperience = forwardRef((props, ref: any) => {
    return (
        <div className={style.experience} id="experience" ref={ref}>
            <CollapsibleSection title="Work Experience">
                <div className={style["experience-list"]}>
                    {workExperienceData.map((experience) => (
                        <div key={experience.id} className={style["experience-item"]}>
                            <div className={style["experience-header"]}>
                                <div className={style["experience-title"]}>
                                    <h3 className={style.position}>{experience.position}</h3>
                                    <div className={style["company-info"]}>
                                        <span className={style.company}>{experience.company}</span>
                                        <span className={style.separator}>·</span>
                                        <span className={style["employment-type"]}>
                                            {experience.employmentType}
                                        </span>
                                    </div>
                                </div>
                                <div className={style["experience-dates"]}>
                                    <span className={style.duration}>
                                        {experience.startDate} - {experience.endDate}
                                    </span>
                                    <span className={style["duration-label"]}>
                                        {experience.duration}
                                    </span>
                                </div>
                            </div>
                            <div className={style["experience-details"]}>
                                <p className={style.location}>{experience.location}</p>
                                {experience.description && (
                                    <p className={style.description}>{experience.description}</p>
                                )}
                                {experience.skills.length > 0 && (
                                    <div className={style.skills}>
                                        <span className={style["skills-label"]}>Skills: </span>
                                        {experience.skills.map((skill, index) => (
                                            <span key={index} className={style.skill}>
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

