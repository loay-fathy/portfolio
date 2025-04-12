import {
    angular,
    backend,
    calendar,
    creator,
    css,
    dashboard,
    docker,
    figma,
    git,
    html,
    javascript,
    magonga,
    mobile,
    msc,
    nodejs,
    none,
    reactjs,
    redux,
    shebaPlastic,
    shoppy,
    southcorner,
    tailwind,
    threejs,
    typescript,
    web,
    workshop,
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Software Engineer",
        icon: web,
    },
    {
        title: "Frontend Developer",
        icon: mobile,
    },
    {
        title: "React Developer",
        icon: backend,
    },
    {
        title: "Angular Developer",
        icon: creator,
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Redux Toolkit",
        icon: redux,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "Angular",
        icon: angular,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "figma",
        icon: figma,
    },
    {
        name: "docker",
        icon: docker,
    },
];

const experiences = [
    {
        title: "Front End Developer",
        company_name: "sheba plastic",
        icon: shebaPlastic,
        iconBg: "#E6DEDD",
        date: "April 2024 - July 2024",
        points: [
            "Completed a 3-month internship at Sheba Plastic, focusing on front-end development tasks.",
            " Gained hands-on experience with React and Tailwind CSS, improving the usability and design of client-facing tools.",
            " Collaborated with cross-functional teams to enhance user interfaces and ensure seamless functionality."
        ],
    },
    {
        title: "Technical Team Member",
        company_name: "Microsoft Student Club",
        icon: msc,
        iconBg: "#383E56",
        date: "July 2023 - Jan 2024",
        points: [
            "Volunteered as front end instructor in microsoft student club in arab open university.",
            "Provided guidance and instructions to AOU students.",
            "Participating in code reviews and providing constructive feedback to other students.",
        ],
    },
    {
        title: "lorem ipsum",
        company_name: "lorem",
        icon: none,
        iconBg: "#383E56",
        date: "Jan 2021 - Feb 2022",
        points: [
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        ],
    },
    {
        title: "lorem ipsum",
        company_name: "lorem",
        icon: none,
        iconBg: "#E6DEDD",
        date: "Jan 2021 - Feb 2022",
        points: [
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        ],
    },
];

const testimonials = [
    {
        testimonial:
            "I thought it was impossible to make a website as beautiful as our product, but Loay proved me wrong.",
        name: "Sara Lee",
        designation: "CFO",
        company: "Acme Co",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial:
            "I've never met a web developer who truly cares about their clients' success like Loay does.",
        name: "Chris Brown",
        designation: "COO",
        company: "DEF Corp",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial:
            "After Loay optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Lisa Wang",
        designation: "CTO",
        company: "456 Enterprises",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
];

const projects = [
    {
        name: "shoppy",
        description:
            "Single Page application for an online shop that allows people to search and buy products, the website is fully responsive and Enhanced with the smooth animations to get best ui\\ux.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "redux",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: shoppy,
        source_code_link: "https://shoppy-dashboard.vercel.app",
    },
    {
        name: "Dashboard",
        description:
            `Created a dynamic React dashboard with Syncfusion with CMS (content managment system), offering diverse charts and essential tools like a text editor and color picker.`,
        tags: [
            {
                name: "React",
                color: "blue-text-gradient",
            },
            {
                name: "Syncfussion",
                color: "green-text-gradient",
            },
            {
                name: "Tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: dashboard,
        source_code_link: "https://dashboard-rose-five-20.vercel.app",
    },
    {
        name: "Magonga",
        description:
            "I designed and developed a responsive landing page for Gaming Development Startup. The landing page was created to effectively showcase their product lines and drive user engagement.",
        tags: [
            {
                name: "HTML",
                color: "blue-text-gradient",
            },
            {
                name: "CSS",
                color: "green-text-gradient",
            },
            {
                name: "JavaScript",
                color: "pink-text-gradient",
            },
        ],
        image: magonga,
        source_code_link: "https://github.com/loay-fathy/project_3",
    },
    {
        name: "South Corner",
        description:
            `responsive and user-friendly website for a Barber Shop using HTML, CSS, and Bootstrap, with pages like services, about us, and contact form, showcasing the barbershop's offerings to potential clients`,
        tags: [
            {
                name: "HTML",
                color: "blue-text-gradient",
            },
            {
                name: "CSS",
                color: "green-text-gradient",
            },
            {
                name: "Bootstrap",
                color: "pink-text-gradient",
            },
        ],
        image: southcorner,
        source_code_link: "https://dashboard-rose-five-20.vercel.app",
    },
    {
        name: "Landing Page",
        description:
            `simple landing page built with HTML, CSS, and Bootstrap. The page is fully responsive and includes a contact form.`,
        tags: [
            {
                name: "HTML",
                color: "blue-text-gradient",
            },
            {
                name: "CSS",
                color: "green-text-gradient",
            },
            {
                name: "Bootstrap",
                color: "pink-text-gradient",
            },
        ],
        image: workshop,
        source_code_link: "https://landing-page-sigma-two-87.vercel.app/",
    },
    {
        name: "Calendar Web App",
        description: "A React calendar app with robust event management, real-time search, and data persistence. editing, month navigation, and JSON export functionality while utilizing modern React practices and Tailwind CSS for styling.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "tailwind",
                color: "green-text-gradient",
            },
            {
                name: "Shadcn",
                color: "pink-text-gradient",
            },
        ],
        image: calendar,
        source_code_link: "https://calendar-app-smoky.vercel.app/",
    },
];

export {services, technologies, experiences, testimonials, projects};
