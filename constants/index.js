import {
  web,
  backend,
  creator,
  mobile,
  github,
  linkedin,
  python,
  powerbi,
  powerbiblack,
  tableau,
  linegraph,
  sql,
  cloud,
  placeholder
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "edu",
    title: "Education",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const socials = [
  {
    title: "Github",
    icon: github,
    link: "https://github.com/dpb3k",
  },
  {
    title: "LinkedIn",
    icon: linkedin,
    link: "https://www.linkedin.com/in/dennis-bandavong-b3981325b/",
  },
];

const technologies = [
  {
    name: "Python",
    icon: python,
  },
  {
    name: "SQL",
    icon: sql,
  },
  {
    name: "Tableau",
    icon: tableau,
  },
  {
    name: "Power BI",
    icon: powerbiblack,
  },
  {
    name: "Statistic",
    icon: linegraph,
  },
  {
    name: "Cloud Computing",
    icon: cloud,
  },
  {
    name: "Digital Forensics",
    icon: web,
  },
  {
    name: "Network Analysis",
    icon: backend,
  },
  {
    name: "OS",
    icon: mobile,
  },
  {
    name: "Malware Analysis",
    icon: creator,
  },
  {
    name: "SIEM",
    icon: mobile,
  },

];

const educationList = [
  {
    title: "Bachelor of Applied Science",
    company_name: "Middle Tennessee State University",
    location: "Murfreesboro, TN",
    date: "2019 - 2023",
  },
];

const projects = [
  {
    name: "Project 1",
    description:
      "Lorem ipsum dolor sit amet. Ut maxime illo ab esse doloribus ab suscipit quis quo iste similique non molestiae veritatis. Sed facere eos atque quas ut veniam sunt? Sed saepe harum ad delectus debitis ea illum rerum est labore illo et ipsam voluptas.      ",
    tags: [
      {
        name: "ReactJS",
        color: "blue-text-gradient",
      },
      {
        name: "Redux",
        color: "green-text-gradient",
      },
      {
        name: "Django",
        color: "pink-text-gradient",
      },
    ],
    image: placeholder,
    project_link: "#",
  },
  {
    name: "Project 2",
    description:
      "Lorem ipsum dolor sit amet. Ut maxime illo ab esse doloribus ab suscipit quis quo iste similique non molestiae veritatis. Sed facere eos atque quas ut veniam sunt? Sed saepe harum ad delectus debitis ea illum rerum est labore illo et ipsam voluptas.",
    tags: [
      {
        name: "AI",
        color: "blue-text-gradient",
      },
      {
        name: "Unity",
        color: "green-text-gradient",
      },
      {
        name: "ML",
        color: "pink-text-gradient",
      },
    ],
    image: placeholder,
    project_link: "#",
  },
  {
    name: "Project 3",
    description:
      "Lorem ipsum dolor sit amet. Ut maxime illo ab esse doloribus ab suscipit quis quo iste similique non molestiae veritatis. Sed facere eos atque quas ut veniam sunt? Sed saepe harum ad delectus debitis ea illum rerum est labore illo et ipsam voluptas.",
    tags: [
      {
        name: "AR",
        color: "blue-text-gradient",
      },
      {
        name: "Unity",
        color: "green-text-gradient",
      },
      {
        name: "Flutter",
        color: "pink-text-gradient",
      },
    ],
    image: placeholder,
    project_link: "#",
  },
  {
    name: "Project 4",
    description:
      "Lorem ipsum dolor sit amet. Ut maxime illo ab esse doloribus ab suscipit quis quo iste similique non molestiae veritatis. Sed facere eos atque quas ut veniam sunt? Sed saepe harum ad delectus debitis ea illum rerum est labore illo et ipsam voluptas.",
    tags: [
      {
        name: "ML",
        color: "blue-text-gradient",
      },
      {
        name: "Unity",
        color: "green-text-gradient",
      },
      {
        name: "Flutter",
        color: "pink-text-gradient",
      },
    ],
    image: placeholder,
    project_link: "#",
  },
];

export {
  socials,
  technologies,
  projects,
  educationList,
};
