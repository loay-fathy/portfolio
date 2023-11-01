import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  angular,
  git,
  figma,
  docker,
  nasa,
  msc,
  none,
  shoppy,
  magonga,
  tripguide,
  threejs,
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
    title: "Web Developer",
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
    title: "Technical Team Member",
    company_name: "Microsoft Student Club",
    icon: msc,
    iconBg: "#383E56",
    date: "July 2023 - Jan 2024",
    points: [
      "Worked as instructor in microsoft student club in arab open university.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality sessions.",
      "Provided guidance and instructions to AOU students.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Nasa International Space Apps",
    company_name: "nasa space apps cairo",
    icon: nasa,
    iconBg: "#E6DEDD",
    date: "Oct 2023",
    points: [
      "particpated in nasa space apps hackathon to solve earth and space problems",
      "collaborating with my 6 members team, We were working on a project that uses raw data from the DSCOVR satellite to accurately forecast and assess the impact of solar storms.",
      "We have designed a userfriendly website interface that shows four graphs: the Kp index graph, which shows the global geomagnetic activity, and three tables that show the importance of plasma wind parameters. We also have an anomaly detection system that reports any unusual events, and warning banners that alert users about possible solar storm threats, so they can take preventive actions",
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
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
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
        name: "bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "react-icons",
        color: "pink-text-gradient",
      },
    ],
    image: shoppy,
    source_code_link: "https://github.com/loay-fathy/shoppy",
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
    name: "Cinerama",
    description:
      "Designed and developed a comprehensive film rating website that allows users to discover, explore, and rate movies from various genres and eras. The website provides valuable information and user-generated reviews to help film enthusiasts make informed viewing choices.",
    tags: [
      {
        name: "Angular",
        color: "blue-text-gradient",
      },
      {
        name: "SCSS",
        color: "green-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/loay-fathy/Cinerama",
  },
];

export { services, technologies, experiences, testimonials, projects };
