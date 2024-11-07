import {
  javascript,
  html,
  css,
  reactjs,
  figma,
  tailwind,
  nodejs,
  git,
  meta,
  wTHa_Networks,
  upwork,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  madolla,
  netWoods,
  maliDuka,
  animeWorld,
  houseHunt,
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
    id: "projects",
    title: "Projects",
  },
  {
    id: "certifications",
    title: "Certifications",
  },
  {
    id: "contact",
    title: "Contact",
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
    name: "React JS",
    icon: reactjs,
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
    name: "Figma",
    icon: figma,
  },

  {
    name: "git",
    icon: git,
  },
];
const experiences = [
  {
    title: "Full stack Developer",
    company_name: "Upwork",
    icon: upwork,
    iconBg: "#6fda44",
    date: "Jan 2022 - Present",
    points: [
      "Designing and building complete web solutions, handling both front-end and back-end development.",
      "Creating responsive, user-friendly interfaces to enhance the user experience.",
      "Implementing robust server-side logic to ensure applications are scalable and secure.",
      "Working directly with clients to understand their needs and deliver high-quality code.",
      "Ensuring that all solutions meet performance, security, and scalability requirements.",
      "For more details on my freelance work, visit my Upwork profile.",
    ],
    link: "https://www.upwork.com/freelancers/~012b9b4876c8a66a8e?mp_source=share",
  },
  // {
  //   title: "Front End Developer",
  //   company_name: "wTHa Networks",
  //   icon: wTHa_Networks,
  //   "iconBg": "#1E293B",
  //   // "date": "Dec 2023 - Apr 2024",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborated with cross-functional teams to ensure application security through rigorous testing and best practices.",
  //     "Played a role in product design to improve user experience and meet client requirements.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Stayed current with technology trends to continually improve web solutions and positively impact client operations.",
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
    name: "House Hunt",
    description:
      "House Hunter is a MERN full-stack web app that simplifies finding and connecting with potential homes for rent or sale. Users can explore listings, chat directly with property owners or landlords, and view available properties on an interactive map. Built with MongoDB, Express.js, React.js, and Node.js, House Hunter delivers a seamless experience, allowing users to discover their next home and easily communicate in real-time with owners or landlords.",
    tags: [
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "Express.js",
        color: "purple-text-gradient",
      },
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Node",
        color: "orange-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "pink-text-gradient",
      },
    ],
    image: houseHunt,
    source_code_link: "https://kejahousehunter.onrender.com/",
  },
  {
    name: "MaliDuka",
    description:
      "E-commerce website, using React, JavaScript,Vite, and Tailwind CSS. The website features a broad product catalog spanning electronics, fashion, and home goods. Key elements include detailed product pages, a shopping cart, and no log-in requirement for checkout. The responsive design ensures a smooth shopping experience on any device. This solution enhances user engagement, simplifies the purchasing process, and effectively broadens MaliDuka’s market reach.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "orange-text-gradient",
      },
      {
        name: "Vite",
        color: "purple-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "pink-text-gradient",
      },
    ],
    image: maliDuka,
    source_code_link: "https://maliduka.onrender.com/",
  },
  {
    name: "NetWoods",
    description:
      "A company profile website for NetWoods, dedicated to providing reliable internet connectivity to rural areas. Using Next.js, TypeScript, and Tailwind CSS, I developed a responsive and user-friendly site that showcases NetWoods' company overview, services, contact information and the Google Maps API embedded map to showcase the company's location. This solution enhances NetWoods' online presence, allowing potential clients to easily access information about the company's services and reach out for inquiries, ultimately driving business growth and community impact.",
    tags: [
      {
        name: "Next.js",
        color: "white",
      },
      {
        name: "TypeScript",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "pink-text-gradient",
      },
    ],
    image: netWoods,
    source_code_link: "https://netwoods.onrender.com/",
  },
  {
    name: "Madolla Vape",
    description:
      "An e-commerce website for Madolla Vape, built with React, Vite, JavaScript, and Tailwind CSS. Designed to offer a user-friendly and accessible online store, it allows customers to browse and purchase high-quality vape pens without needing to log in. The solution includes detailed product pages, a shopping cart,no log-in requirement for checkout, and a responsive design, ensuring an optimal experience on any device. By streamlining the shopping process and enhancing user satisfaction, the website effectively expands market reach and encourages business growth.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "orange-text-gradient",
      },
      {
        name: "Vite",
        color: "purple-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "pink-text-gradient",
      },
    ],
    image: madolla,
    source_code_link: "https://maddolla-vape.onrender.com/",
  },
  {
    name: "Anime world",
    description:
      "Anime world is an web application that gives the user access to anime and manga information.",
    tags: [
      {
        name: "HTML",
        color: "white",
      },
      {
        name: "JavaScript",
        color: "orange-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: animeWorld,
    source_code_link: "https://github.com/Houstin0/project-anime-world",
  },
  {
    name: "Recipe API with CLI",
    description:
      "Recipe Manager and Meal Planner CLI is a Flask API with a  command-line application designed to help you organize your recipes and plan for meals. With this tool, you can store, categorize, search for recipes, plan meals, and even generate shopping lists based on your meal plans. Whether you're a culinary enthusiast or just trying to simplify your meal planning, this CLI app has you covered.",
    tags: [
      {
        name: "Flask",
        color: "black-text-gradient",
      },
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "sqlalchemy",
        color: "orange-text-gradient",
      },
      {
        name: "alembic",
        color: "pink-text-gradient",
      }
    ],
    image: "/projectapi.gif",
    source_code_link: "https://github.com/Houstin0/project_Recipe_Manager",
  },
  // {
  //   name: "Car Rent",
  //   description:
  //     "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
  //   tags: [
  //     {
  //       name: "react",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "mongodb",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "tailwind",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: carrent,
  //   source_code_link: "https://github.com/",
  // },
  // {
  //   name: "Job IT",
  //   description:
  //     "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
  //   tags: [
  //     {
  //       name: "react",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "restapi",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "scss",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: jobit,
  //   source_code_link: "https://github.com/",
  // },
  // {
  //   name: "Trip Guide",
  //   description:
  //     "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
  //   tags: [
  //     {
  //       name: "nextjs",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "supabase",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: tripguide,
  //   source_code_link: "https://github.com/",
  // },
];

export { technologies, experiences, testimonials, projects };
