import { max4, snoopy, altest } from "../assets/images";
import {
    bitbucket,
    docker,
    laravel,
    chat,
    contact,
    css,
    map,
    express,
    mysql,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    vue,
    php,
    nodejs,
    react,
    redux,
    sass,
    tailwindcss,
    typescript,
    postgres,
    gps,
    inventory,
    django,
    upload
} from "../assets/icons";

export const skills = [
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    },
    {
        imageUrl: php,
        name: "PHP",
        type: "Backend",
    },
    {
        imageUrl: mysql,
        name: "MySQL",
        type: "Database",
    },
    {
        imageUrl: postgres,
        name: "PostgreSQL",
        type: "Database",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: vue,
        name: "VueJs",
        type: "Frontend"
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: laravel,
        name: "Laravel",
        type: "Backend",
    },
    {
        imageUrl: django,
        name: "Django",
        type: "Backend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
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
        imageUrl: bitbucket,
        name: "Bitbucket",
        type: "Version Control",
    },
    {
        imageUrl: docker,
        name: "Docker",
        type: "Server Virtualization",
    },
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
        link: 'https://github.com/ContrerasHDaniel',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/YourLinkedInUsername',
    }
];

export const projects = [
    {
        iconUrl: upload,
        theme: 'btn-back-orange',
        name: 'CSV Uploader',
        description: 'A simple CSV file uploader. The magic happens in PHP and Laravel backend to process up to 300MB of data (about 1.5 million of rows).',
        link: 'https://vue-uploader-sandy.vercel.app'
    },
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
        theme: 'btn-back-black',
        name: 'Real-time Alerting System',
        description: 'Built a web application to manage radiofrequency devices with security purposes that also allows the authorized users to see real-time alerts when assets of interest are detected',
        //link: 'https://github.com/adrianhajdin/social_media_app',
    },
    {
        iconUrl: chat,
        theme: 'btn-back-orange',
        name: 'SMS Massive Sending System',
        description: 'Developed a full-stack solution for sending, monitoring and managing of massive SMS campaigns',
        //link: 'https://github.com/adrianhajdin/social_media_app',
    },
];