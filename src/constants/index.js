import { max4, snoopy, altest } from "../assets/images";
import {
    chat,
    contact,
    css,
    map,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    react,
    redux,
    sass,
    snapgram,
    tailwindcss,
    typescript,
    gps,
    inventory
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "Full stack Developer",
        company_name: "SnoopyLabs",
        icon: snoopy,
        iconBg: "#edf6f9",
        date: "Jun 2019 - Jun 2020",
        points: [
            "Developing real-time web applications using Node.js and vanilla Javascript",
            "Collaborating with cross-functional multi-disciplinary teams including electronic engineers, telecommunications experts, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility implementing Server Side Rendering",
        ],
    },
    {
        title: "React.js and Vue.js Developer",
        company_name: "ALTEST",
        icon: altest,
        iconBg: "#39312F",
        date: "Jun 2020 - Jan 2023",
        points: [
            "Developing and maintaining web applications using React.js, Vue.js and other related technologies.",
            "Collaborating with cross-functional teams including back end developers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Full stack Developer",
        company_name: "Max4 Technologies",
        icon: max4,
        iconBg: "#004365",
        date: "Jan 2023 - Present",
        points: [
            "Developing and maintaining applications using Laravel, Vue.js, vanilla Javascript and other related technologies.",
            "Collaborating with cross-functional teams including product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Implementing self code reviews and providing tests pre-deployment to avoid risks since applications handle high volumes of traffic",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/YourGitHubUsername',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/YourLinkedInUsername',
    }
];

export const projects = [
    {
        iconUrl: map,
        theme: 'btn-back-red',
        name: 'GanTrack',
        description: 'Created a full-stack system that register the GPS data received from an electronic device and renders a map with the last position of said device.',
        //link: 'https://github.com/adrianhajdin/pricewise',
    },
    {
        iconUrl: inventory,
        theme: 'btn-back-blue',
        name: 'Inventory Management System',
        description: 'Developed web and mobile applications to manage items in inventories with the printing of RadioFrequency Tags that allows radio-localization of tagged items via specialized hardware',
        //link: 'https://github.com/adrianhajdin/project_next13_car_showcase',
    },
    {
        iconUrl: gps,
        theme: 'btn-back-orange',
        name: 'Real-time Alerting System',
        description: 'Built a web application to manage radiofrequency devices with security purposes that also allows the authorized users to see real-time alerts when assets of interest are detected',
        //link: 'https://github.com/adrianhajdin/social_media_app',
    },
    {
        iconUrl: chat,
        theme: 'btn-back-black',
        name: 'SMS Massive Sending System',
        description: 'Developed a full-stack solution for sending, monitoring and managing of massive SMS campaigns',
        //link: 'https://github.com/adrianhajdin/social_media_app',
    },
];