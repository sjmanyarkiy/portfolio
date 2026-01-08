import { NextResponse } from "next/server";

const experienceData = [
    {
        icon: "/images/icon/tailwind-icon.svg",
        role: "Client Relationship Manager, eProd Solutions",
        location: "Onsite",
        startYear: "2024",
        endYear: "2025",
        bulletPoints: [
            "Architected and deployed database solutions for 4 enterprise clients, achieving 100% uptime and optimizing query performance by 40%",
            "Led technical implementation of international agricultural technology projects across multiple countries, configuring databases and ensuring proper system deployment.",
            "Conducted 9 technical training sessions including cross-functional deployment projects requiring coordination within fixed timeframes."
        ]
    },
    {
        icon: "/images/icon/asana-icon.svg",
        role: "IT Systems Intern, Penda Health",
        location: "Nairobi, Kenya",
        startYear: "2023",
        endYear: "2023",
        bulletPoints: [
            "Developed and implemented a new internal knowledge base system for 200+ employees, resulting in a 25% reduction in IT support tickets.",
            "Provided first level technical support for general business systems, addressing and resolving technical issues promptly while ensuring minimal disruption to business operations.",
            "Conducted monthly Business Continuity Planning (BCP) and thorough assessments of current infrastructure, identifying vulnerabilities and potential points of failure, providing insights and recommendations."
        ]
    },
    {
        icon: "/images/icon/asana-icon.svg",
        role: "Backend Software Developer, MAAT Systems",
        location: "Nairobi, Kenya",
        startYear: "2022",
        endYear: "2023",
        bulletPoints: [
            "Architected and developed a proprietary technology matching platform using PHP/Laravel and MySQL, implementing optimized database queries and indexing strategies that improved matching algorithm performance by 15%.",
            "Built 3 full-stack web applications for the medical industry using Laravel, React, and MySQL in a multi-data center environment, implementing database replication and load balancing that increased system efficiency by 30%.",
            "Managed production Apache and Nginx web servers for 90+ clients, implementing automated monitoring and backup solutions that achieved 99.9% uptime and reduced server downtime by 20%."
        ]
    }
]

const educationData = [
    {
        date: "Sep 2015 - May 2019",
        title: "Bsc. in Business Information Technology",
        subtitle: "Pratt Institute — Brooklyn, NY"
    },
    {
        date: "Mar 2021 - Aug 2021",
        title: "Full Stack Software Engineering Certificate",
        subtitle: "Google UX Design - Coursera"
    },
    {
        date: "Jan 2020 - Mar 2020",
        title: "Front-End Web Development Bootcamp",
        subtitle: "General Assembly — New York, NY"
    }
];


const projectOverview = {
    caseStudies: [
        { name: "Wellnest", url: "#" },
        { name: "ScoutHire", url: "#" },
    ],
    sideProjects: [
        { name: "RentEase", url: "https://renteasekenya.netlify.app/" },
        { name: "GoShort", url: "https://github.com/sjmanyarkiy/GoShort" },
        { name: "OrbitPay Mobile App", comingSoon: true },
        { name: "Siteflow Page Builder", comingSoon: true },
    ]
};


export const GET = async () => {
    return NextResponse.json({
        experienceData,
        educationData,
        projectOverview
    });
};