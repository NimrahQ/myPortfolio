import {
  mobile,
  creator,
  gsap,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  git,
  figma,
  rollienation,
  Esspfa,
  Stratesfy,
  Dipixels,
  goodgoblin,
  pixelpulse,
  everlybeauty,
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

const Services = [
  {
    title: "UI/UX Developer",
    icon: web,
  },
  {
    title: "React Js ",
    icon: mobile,
  },

  {
    title: "Next Js",
    icon: creator,
  },
  {
    title: "Gsap Animations",
    icon: gsap,
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
];

const experiences = [
  {
    title: "Next.js Developer",
    company_name: "Dipixels",
    icon: Dipixels,
    iconBg: "#383E56",
    date: "nov 2023 - Present",
    points: [
      "Developing and maintaining web applications using Next.js and other related technologies.",
      "Integrated third-party APIs to enhance functionality and data retrieval, improving overall user experience",
      "Implemented state management using React Context and Redux for complex application data flow",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React.js Developer",
    company_name: "Esspfa",
    icon: Esspfa,
    iconBg: "#E6DEDD",
    date: " June 2023 - Oct 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Here I use to work with gsap and css animations on nft and metaverse sites ",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Utilized build tools and optimized assets to improve website loading speed and performance",
    ],
  },
  {
    title: "Web Developer Intern",
    company_name: "Stratesfy",
    icon: Stratesfy,
    iconBg: "#383E56",
    date: "Jan 2022 - March 2022",
    points: [
      "I used to lean html css and relative libraries of ui such as bootstrap ",
      "lear about css basics Grid and flex and other major properties of styling",
      "Implementing responsive design",
      "Basic ui testing and jest testing"
    
    ],
  },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
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
    name: "goodgoblin.ai",
    description:
      "Web-based platform. that use to manage your college applications as admission provider for undergrades  providing  efficient solution for counseling or elevating your career.",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "Node.js",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: goodgoblin,
    source_code_link: "https://www.goodgoblin.ai/",
  },
  {
    name: "Everly Beauty",
    description:
      "Web application for A laser hair removal  services and also A sort of E-commerce shop of cosmetics Products with Interactive UI of 3d images calculators discounts packages and a chatbot",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "Strapi",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: everlybeauty,
    source_code_link: "https://www.everlybeauty.ca/",
  },
  {
    name: "Pixel Pulse",
    description:
      "A comprehensive UI selling platform that allows users to buy UI, Logo's, and Animations gifs and design patterns, and offers customize UI's as per recommendations or destinations.",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "Node.js",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: pixelpulse,
    source_code_link: "https://pixelpulse.dipixels.com/",
  },
  {
    name: "Rollie-Nation",
    description:
      "A website of a Brand that use to sell shoes With a Fully interactive and animated UI designs ",
    tags: [
      {
        name: "react.js, Gsap",
        color: "blue-text-gradient",
      },
      {
        name: "node.js",
        color: "green-text-gradient",
      },
      {
        name: "css scss",
        color: "pink-text-gradient",
      },
    ],
    image: rollienation,
    sourc_code_link: "",
  },
];

export { Services, technologies, experiences, testimonials, projects };
