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
    name: "React",
    icon: web,
  },
  {
    name: "Next.js",
    icon: backend,
  },
  {
    name: "TailwindCSS",
    icon: mobile,
  },
  {
    name: "Express.js",
    icon: creator,
  },
  {
    name: "Node.js",
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
    name: "Indecisive Food App",
    description:
      "Android application to implement various random choice menus to provide to the user to allow them to make a decision" +
        " on what food they want to choose based on the nearby restaurants. ",
    tags: [
      {
        name: "Android Studio",
        color: "blue-text-gradient",
      },
      {
        name: "Java",
        color: "green-text-gradient",
      },
    ],
    image: placeholder,
    project_link: "https://github.com/GeorgeG518/indecisive-app",
  },
  {
    name: "MTSU Project: Lab Finder Website",
    description:
      "Developed a website for Middle Tennessee State University’s Psychology department and students. Allowed students and professors to " +
        "post and join research labs.",
    tags: [
      {
        name: "React Vite",
        color: "blue-text-gradient",
      },
      {
        name: "HTML",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: placeholder,
    project_link: "#",
  },
  {
    name: "Data Visualizations",
    description:
      "Dashboards and visualizations of various datasets using Power BI, Tableau, and Jupyter Notebook.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Power BI / Tableau",
        color: "green-text-gradient",
      },
      {
        name: "SQL",
        color: "pink-text-gradient",
      },
    ],
    image: placeholder,
    project_link: "https://spicy-attack-034.notion.site/530b78f61d894c6987035609c70c303b?v=312c88d2b8564f5486fb13275dec66f2",
  },
  // {
  //   name: "Project 4",
  //   description:
  //     "Lorem ipsum dolor sit amet. Ut maxime illo ab esse doloribus ab suscipit quis quo iste similique non molestiae veritatis. Sed facere eos atque quas ut veniam sunt? Sed saepe harum ad delectus debitis ea illum rerum est labore illo et ipsam voluptas.",
  //   tags: [
  //     {
  //       name: "ML",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "Unity",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "Flutter",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: placeholder,
  //   project_link: "#",
  // },
];

export {
  socials,
  technologies,
  projects,
  educationList,
};
