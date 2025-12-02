export interface WorkExperience {
    id: number;
    company: string;
    position: string;
    employmentType: string;
    startDate: string;
    endDate: string;
    duration: string;
    location: string;
    description: string;
    skills: string[];
}

const work_experience_data: WorkExperience[] = [
    {
        id: 1,
        company: "Buildorz",
        position: "Back End Developer",
        employmentType: "Full-time",
        startDate: "Apr 2024",
        endDate: "Present",
        duration: "1 yr 9 mos",
        location: "New Delhi, Delhi, India · Remote",
        description:
            "Integrate smart contracts using Web3.js, and Ethers.js for EVM-compatible chains. Develop scalable backend systems using Node.js, TypeScript, and Express, optimizing blockchain interactions.",
        skills: [
            "MySQL",
            "Typescript",
            "Express Js",
            "NodeJs",
            "Web3",
            "Amazon Web Services (AWS)",
        ],
    },
    {
        id: 2,
        company: "Google Developer Student Clubs - University Of Uyo",
        position: "Lead Developer",
        employmentType: "Seasonal",
        startDate: "Aug 2023",
        endDate: "Present",
        duration: "2 yrs 5 mos",
        location: "Nigeria · On-site",
        description:
            "Work with my Co-Dev Lead, the Student Lead and other Leads on sensitizing, organizing hackathons and educating newbies and tech enthusiasts on what works and how to get started in tech.",
        skills: [
            "Leading Development Teams",
            "Web Development",
            "Analytical Skills",
            "Team Leadership",
        ],
    },
    {
        id: 3,
        company: "LAskill Training Center",
        position: "Software Engineer",
        employmentType: "Internship",
        startDate: "Mar 2024",
        endDate: "Aug 2024",
        duration: "6 mos",
        location: "Uyo, Akwa Ibom State, Nigeria · On-site",
        description:
            "I primarily enjoyed this role as I got to work with newbies in the web development space and bringing them up the speed with the noise and quiet",
        skills: [
            "JavaScript",
            "Teaching",
            "React Js",
            "Leadership",
            "Express Js",
            "NodeJs",
            "Back-End Web Development",
        ],
    },
    {
        id: 4,
        company: "CodeRigi",
        position: "Frontend Engineer",
        employmentType: "Internship",
        startDate: "Jul 2023",
        endDate: "Dec 2023",
        duration: "6 mos",
        location: "Nigeria · Hybrid",
        description:
            "I craft visually stunning and user-friendly web interfaces that captivate audiences. My expertise in responsive design ensures an optimal user experience across all devices. I collaborate closely with cross-functional teams to align web development with business goals. My passion for performance optimization leads to faster-loading, more efficient websites. I stay at the forefront of industry trends to ensure we're using the latest tools and technologies.",
        skills: ["css", "JavaScript", "React.js", "Node.js", "HTML5"],
    },
    {
        id: 5,
        company: "Hotels.ng",
        position: "Backend Engineer",
        employmentType: "Internship",
        startDate: "Sep 2023",
        endDate: "Oct 2023",
        duration: "2 mos",
        location: "Nigeria · Remote",
        description:
            "HNG Internship help mold me as a Backend Engineer into a detailed, result oriented and time conscious Backend Engineer with their rigorous but amazing Internship build, and hands on experience with building real life application and also collaborating with other engineers",
        skills: ["Express.js", "MySQL", "TypeScript", "Node.js"],
    },
    {
        id: 6,
        company: "Hotels.ng",
        position: "Frontend Engineer",
        employmentType: "Internship",
        startDate: "Oct 2022",
        endDate: "Dec 2022",
        duration: "3 mos",
        location: "Uyo, Akwa Ibom State, Nigeria",
        description: "",
        skills: [
            "JavaScript",
            "Cascading Style Sheets (CSS)",
            "React.js",
            "Analytical Skills",
            "GitHub",
        ],
    },
    {
        id: 7,
        company: "Start Innovation Hub Nigeria",
        position: "Software Engineer",
        employmentType: "Internship",
        startDate: "Jul 2022",
        endDate: "Nov 2022",
        duration: "5 mos",
        location: "Uyo, Akwa Ibom State, Nigeria",
        description: "Project Create 3.0",
        skills: [
            "JavaScript",
            "Cascading Style Sheets (CSS)",
            "React.js",
            "Analytical Skills",
        ],
    },
];

export default work_experience_data;

