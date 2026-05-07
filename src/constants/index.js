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
  nodejs,
  none,
  reactjs,
  redux,
  shoppy,
  barlamanmasr,
  reborn,
  southcorner,
  tailwind,
  threejs,
  typescript,
  web,
  workshop,
  krok,
  hireagents,
  ilm
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
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "AI Engineer",
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
    title: "Software Engineer",
    company_name: "مؤسسة علم الإحياء التراث والخدمات الرقمية",
    icon: none,
    iconBg: "#383E56",
    date: "April 2026 - Present",
    points: [
      "Developing and maintaining modern web applications and AI-powered solutions using React, Next.js, and python.js, with a focus on scalable front-end systems, API integration, and LLM-based workflows including RAG pipelines, embeddings, and document processing.",
    ],
  },
  {
    title: "Freelancer",
    company_name: "WEB DEVELOPER",
    icon: none,
    iconBg: "#383E56",
    date: "Jan 2025 - Present",
    points: [
      "Translated Figma designs into scalable, production-ready web applications using React and Tailwind CSS, ensuring responsiveness and clean component architecture.",
      "Optimized performance through efficient state management, lazy loading, and minimizing unnecessary re-renders.",
      "Delivered project within tight deadlines while maintaining clean architecture.",
    ],
  },
  // {
  //   title: "Technical Team Member",
  //   company_name: "Microsoft Student Club",
  //   icon: msc,
  //   iconBg: "#383E56",
  //   date: "July 2023 - Jan 2024",
  //   points: [
  //     "Volunteered as front end instructor in microsoft student club in arab open university.",
  //     "Provided guidance and instructions to AOU students.",
  //     "Participating in code reviews and providing constructive feedback to other students.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "I highly recommend Loay as a Full-Stack Developer. He consistently delivers clean, scalable solutions and understands both frontend and backend logic deeply. His communication skills, teamwork, and commitment to quality make him a valuable asset to any development team.",
    name: "Amr Tamer",
    company: "colleague",
    image: "/src/assets/amr.png",
  },
  {
    testimonial:
      "Loay has been an exceptional teammate during our time in the ALX software engineering program. His rapid learning curve, willingness to assist others, and unwavering punctuality are truly commendable.",
    name: "AlMonther Abdulhafeez",
    company: "colleague",
    image: "/src/assets/monzer.png",
  },
];

const projects = [
  {
    name: " HireAgents",
    description:
      "AI-powered customer communication platform where businesses can connect WhatsApp accounts, automate replies with AI agents, manage conversations through a shared inbox, track customer relationships, and monitor analytics from a centralized dashboard with multi-team support.",
    tags: [
      {
        name: "Next",
        color: "blue-text-gradient",
      },
      {
        name: "framer-motion",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: hireagents,
    source_code_link: "https://shoppy-dashboard.vercel.app",
  },
  {
    name: "Nizam",
    description:
      "Web-based POS and business management system with sales processing, inventory tracking, role-based access, customer and employee management, expense tracking, and real-time reporting dashboard.",
    tags: [
      {
        name: "Next",
        color: "blue-text-gradient",
      },
      {
        name: "framer-motion",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: reborn,
    source_code_link: "https://shoppy-dashboard.vercel.app",
  },
  {
    name: "Ilm-library",
    description:
      "Designed and built an end-to-end SaaS-style platform that enables organizations, libraries, and researchers to          digitize, organize, and search large collections of multilingual documents — with specialized support for Arabic, Persian, and Urdu texts.",
    tags: [
      {
        name: "Next",
        color: "blue-text-gradient",
      },
      {
        name: "django",
        color: "green-text-gradient",
      },
      {
        name: "postgres",
        color: "pink-text-gradient",
      },
    ],
    image: ilm,
    source_code_link: "https://shoppy-dashboard.vercel.app",
  },
  {
    name: "Krok",
    description:
      "  A bilingual (English/Ukrainian) web application that helps Ukrainian medical students prepare for the Krok licensing exam. Built the frontend with Next.js and Tailwind CSS, delivering a quiz engine with Study and Exam modes, multi-level question filtering (year / subject / system / topic), a favorites & notes system, user history, and a top-students leaderboard.",
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
    image: krok,
    source_code_link: "https://shoppy-dashboard.vercel.app",
  },
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
    name: "Barlaman Masr",
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
    image: barlamanmasr,
    source_code_link: "https://shoppy-dashboard.vercel.app",
  },
  {
    name: "Dashboard",
    description: `Created a dynamic React dashboard with Syncfusion with CMS (content managment system), offering diverse charts and essential tools like a text editor and color picker.`,
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
    name: "Landing Page",
    description: `simple landing page built with HTML, CSS, and Bootstrap. The page is fully responsive and includes a contact form.`,
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
    description:
      "A React calendar app with robust event management, real-time search, and data persistence. editing, month navigation, and JSON export functionality while utilizing modern React practices and Tailwind CSS for styling.",
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

export { services, technologies, experiences, testimonials, projects };
