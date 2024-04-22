import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  postgresql,
  rubyrails,
  graphql,
  sqlserver,
  mysql,
  rest,
  komikult,
  leaderboard,
  math,
  movie,
  nyeusi,
  space,
  coverhunt,
  dcc,
  moneris,
  oracle,
  jr,
  TC,
  covid,
  ToDoList,
  FV,
  LA,
  kelhel,
  microverse,
  VAG,
} from "../assets";

export const navLinks = [
  {
    id: "IT",
    // title: "IT - Financial Planning - Capital Expense",
  },
  {
    id: "BR",
    //title: "Business Resilience - BCDR",
  },
  {
    id: "PR",
    //title: "Program Mangement for Products",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: frontend,
  },
  {
    title: "Software Developer",
    icon: backend,
  },
  {
    title: "UI/UX Developer",
    icon: ux,
  },
  {
    title: "Software Engineer",
    icon: prototyping,
  },
];

const technologies = [
  {
    name: "Program Management",
  },
  {
    name: "stakeholder Management",
  },
  {
    name: "Vendor Management",
  },
  {
    name: "Cross Functional collaboration",
  },
  {
    name: "Strategic Planning",
  },
  {
    name: "Risk Management",
  },
  {
    name: "Team Leadership and development",
  },
  {
    name: "Change Management",
  },
  {
    name: "Continuous improvement",
  },
  {
    name: "Agile Methodology and Scrum",
  },
  {
    name: "Lean Management",
  },
  // {
  //   name: "CSS 3",
  //   icon: css,
  // },
  // {
  //   name: "JavaScript",
  //   icon: javascript,
  // },
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
  // {
  //   name: "React JS",
  //   icon: reactjs,
  // },
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
  // {
  //   name: "Tailwind CSS",
  //   icon: tailwind,
  // },
  // {
  //   name: "Node JS",
  //   icon: nodejs,
  // },
  // {
  //   name: "SQL Server",
  //   icon: sqlserver,
  // },
  // {
  //   name: "SQL",
  //   icon: graphql,
  // },
  // {
  //   name: "MySQL",
  //   icon: mysql,
  // },
  // {
  //   name: "git",
  //   icon: git,
  // },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "Project Co-ordinator",
    company_name: "LogicAdd Software Private Ltd (Internship)",
    icon: LA,
    iconBg: "#333333",
    date: "Dec 2016 - Feb 2017",
  },
  {
    title: "Program Manager",
    company_name: "Oracle Cerner Healthcare, India",
    icon: oracle,
    iconBg: "#333333",
    date: "Feb 2017 - April 2022",
  },
  {
    title: "Program Manager",
    company_name: "Oracle Cerner Healthcare, Canada",
    icon: oracle,
    iconBg: "#333333",
    date: "May 2022 - Aug 2022",
  },
  {
    title: "Senior Scrum Master",
    company_name: "Moneris Solutions",
    icon: moneris,
    iconBg: "#333333",
    date: "Sept 2022 - Present",
  },
];

const projects = [
  {
    id: "project-1",
    name: "Hackathon Winner",
    description:
      "As a seasoned Program Manager, I am known for spearheading transformative capital and expense planning initiatives" +
      "that drive efficiency and transparency across departments. By introducing effective processes and leveraging technology," +
      "I have reduced manual processes by an impressive 80%, resulting in significant time and cost savings. My meticulous attention" +
      "to detail ensures accuracy and compliance with organizational policies, while my strategic approach to budgeting and expense" +
      "tracking provides leadership with real-time insights for informed decision-making. Through compelling business case studies," +
      "I secure budget approvals and garner support from stakeholders, fostering alignment with organizational goals. With a focus on" +
      "building collaborative partnerships and driving operational excellence, I am passionate about leveraging my expertise to deliver" +
      "measurable results and drive innovation in every project I undertake.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: jr,
    demo: "#",
    demo: "https://play.google.com/store/apps/details?id=com.jeevaraksha.emergency&hl=en_US&gl=US",
  },
  {
    id: "project-2",
    name: "Virtual Art Gallery",
    description:
      "With a virtual gallery, there is no drop-off and pick-up." +
      "How convenient is that! Viewers and potential buyers can revisit" +
      "your artworks multiple times without traveling to a physical place," +
      "where some might never even get to.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: VAG,
    repo: "https://github.com/mohit9222/virtual-art-gallery",
    demo: "https://mohit9222.github.io/virtual-art-gallery/",
  },
  {
    id: "project-3",
    name: "Triple Court Mobile App",
    description:
      "Triplecourt is to provide the users with an integrated version" +
      "of all kinds of fitness facilities in a single application. The application" +
      "is designed to provide a more user friendly application along with additional" +
      "benefits where the user need not download each fitness facility through a" +
      "different application.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: TC,
    repo: "#",
    demo: "#",
  },
  {
    id: "project-4",
    name: "Covid-19 Tracker",
    description: `A single-page application that allows users to search for any movie or show's ratings and its details.`,
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: covid,
    repo: "https://github.com/mohit9222/Covid-19",
    demo: "https://mohit9222.github.io/Covid-19/",
  },
  {
    id: "project-5",
    name: "To-Do-List App",
    description:
      "With the To-Do-List App, it is a kind of app that is used to" +
      "maintain our day-to-day tasks or list everything that we have" +
      "to do, with the most important tasks at the top of the list, and" +
      "the least important tasks at the bottom. It is helpful in planning" +
      "our daily schedules.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: ToDoList,
    repo: "https://github.com/mohit9222/todolist",
    demo: "https://mohit9222.github.io/todolist/",
  },
  // {
  //   id: 'project-6',
  //   name: 'Form Validation',
  //   description:
  //     'This is a Form Validation using React JS.',
  //   tags: [
  //     {
  //       name: 'nextjs',
  //       color: 'blue-text-gradient',
  //     },
  //     {
  //       name: 'supabase',
  //       color: 'green-text-gradient',
  //     },
  //     {
  //       name: 'css',
  //       color: 'pink-text-gradient',
  //     },
  //   ],
  //   image: nyeusi,
  //   repo: 'https://github.com/mohit9222/Form-Validation',
  //   demo: 'https://mohit9222.github.io/Form-Validation/',
  // },
];

export { services, technologies, experiences, projects };
