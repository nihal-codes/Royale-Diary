// Royal Casino Training Diary Data Matrix
// Structured JSON data with 4 Weeks and 6 Cards per week (24 total training days)

export const weeks = [
  {
  week: 1,
  title: "WEEK 1 • REACT FUNDAMENTALS",
  subtitle:
    "Learning the fundamentals of React, component-based architecture, state management, routing, and building my first complete project.",
  themeColor: "emerald",
  cards: [
    {
      day: 1,
      rank: "A",
      suit: "♠",
      category: "React Basics",
      title: "Introduction to React & Project Setup",
      summary:
        "Started my React journey by understanding what React is, how components work, and setting up a React development environment.",
      bulletPoints: [
        "Understood the fundamentals of React.",
        "Learned how components are created and reused.",
        "Completed the initial project setup."
      ],
      technologies: [
        "React",
        "Components",
        "JavaScript"
      ],
      stats: {
        hours: 9
      }
    },

    {
      day: 2,
      rank: "K",
      suit: "♠",
      category: "State & Styling",
      title: "Props, useState & Tailwind CSS",
      summary:
        "Learned how data flows between components using props, managed component state with useState, and explored the basics of Tailwind CSS.",
      bulletPoints: [
        "Learned how props pass data between components.",
        "Used useState to manage component state.",
        "Studied Tailwind CSS setup and utility-first styling.",
        "Explored common Tailwind use cases.",
        "Styled an existing website with Tailwind"
      ],
      technologies: [
        "React",
        "Props",
        "useState",
        "Tailwind CSS"
      ],
      stats: {
        hours: 10
      }
    },

    {
      day: 3,
      rank: "Q",
      suit: "♠",
      category: "Project Development",
      title: "Building My First React Project",
      summary:
        "Started developing a To-Do List application while learning several core React concepts required for building real-world applications.",
      bulletPoints: [
        "Started building a To-Do List application.",
        "Learned passing props as children.",
        "Understood state lifting.",
        "Practiced conditional rendering.",
        "Implemented event handling.",
        "Learned useEffect and useContext.",
        "Explored basic Local Storage concepts."
      ],
      technologies: [
        "React",
        "useEffect",
        "useContext",
        "Local Storage"
      ],
      stats: {
        hours: 9
      }
    },

    {
      day: 4,
      rank: "J",
      suit: "♠",
      category: "React Ecosystem",
      title: "Routing & Advanced React Hooks",
      summary:
        "Completed the basic To-Do application while exploring routing, forms, and additional React hooks for performance and DOM interaction.",
      bulletPoints: [
        "Completed the basic To-Do application.",
        "Learned React Router (react-router-dom).",
        "Studied React Hook Form.",
        "Understood useRef.",
        "Learned useMemo.",
        "Left useCallback for future study."
      ],
      technologies: [
        "React Router",
        "React Hook Form",
        "useRef",
        "useMemo"
      ],
      stats: {
        hours: 10
      }
    },

    {
      day: 5,
      rank: "10",
      suit: "♠",
      category: "State Management",
      title: "Redux Toolkit & Alternative State Libraries",
      summary:
        "Studied the theory behind Redux Toolkit and explored modern state management libraries while building a dashboard project.",
      bulletPoints: [
        "Understood Actions, Reducers, Slice, Store and State.",
        "Learned Redux Toolkit architecture (theory only).",
        "Explored how Recoil works.",
        "Got introduced to Zustand.",
        "Built a dashboard containing a Pomodoro Timer and Theme Switcher.",
        "Used React Recharts for data visualization."
      ],
      technologies: [
        "Redux Toolkit",
        "Recoil",
        "Zustand",
        "React Recharts"
      ],
      stats: {
        hours: 13
      }
    },

    {
      day: 6,
      rank: "9",
      suit: "♠",
      category: "API Integration",
      title: "Fetch API & Data Retrieval",
      summary:
        "Learned how to retrieve data from external APIs using the Fetch API and began building a project using fetched data.",
      bulletPoints: [
        "Learned the Fetch API.",
        "Used the GET request method.",
        "Fetched dummy data from an external API.",
        "Started another project using the fetched data."
      ],
      technologies: [
        "Fetch API",
        "REST API",
        "GET",
        "JavaScript"
      ],
      stats: {
        hours: 7
      }
    }
  ]
},
  {
  week: 2,
  title: "WEEK 2 • PROJECTS, APIs & BACKEND FOUNDATIONS",
  subtitle:
    "Strengthening frontend development through projects while gradually transitioning into backend development with Express, APIs, authentication, and MongoDB.",
  themeColor: "amber",
  cards: [
    {
      day: 7,
      rank: "A",
      suit: "♥",
      category: "Frontend Project",
      title: "Landing Page Development",
      summary:
        "Worked on building a landing page by recreating a provided design reference, focusing on layout, styling, and responsiveness.",
      bulletPoints: [
        "Started building a landing page.",
        "Recreated the design based on a shared reference image.",
        "Practiced component structuring and styling.",
        "Improved frontend development workflow."
      ],
      technologies: [
        "React",
        "Tailwind CSS",
        "CSS",
        "JavaScript"
      ],
      stats: {
        hours: 10
      }
    },

    {
      day: 8,
      rank: "K",
      suit: "♥",
      category: "Project Development",
      title: "Completing the Landing Page",
      summary:
        "Finished the landing page project and continued developing the Fetch API project started earlier.",
      bulletPoints: [
        "Completed the landing page project.",
        "Improved overall UI consistency.",
        "Continued integrating fetched data into the Fetch API project.",
        "Focused on refining project structure."
      ],
      technologies: [
        "React",
        "Tailwind CSS",
        "Fetch API"
      ],
      stats: {
        hours: 10
      }
    },

    {
      day: 9,
      rank: "Q",
      suit: "♥",
      category: "Frontend Development",
      title: "Fetch API Project & Figma Implementation",
      summary:
        "Completed the Fetch API project and began another frontend project by implementing a Figma design with AI assistance.",
      bulletPoints: [
        "Completed the Fetch API project.",
        "Worked with real API data.",
        "Started implementing a Figma design.",
        "Used AI assistance during development."
      ],
      technologies: [
        "React",
        "Fetch API",
        "Figma"
      ],
      stats: {
        hours: 6
      }
    },

    {
      day: 10,
      rank: "J",
      suit: "♥",
      category: "HTTP & Networking",
      title: "HTTP Methods & Axios",
      summary:
        "Learned the major HTTP request methods, explored Axios for handling API requests, and deployed multiple frontend projects.",
      bulletPoints: [
        "Learned GET, POST, PUT, DELETE and PATCH methods.",
        "Studied Axios and its commonly used methods.",
        "Learned axios.create() and interceptors.",
        "Deployed two projects.",
        "Shared one project on LinkedIn.",
        "Identified useNavigate, Zustand and Recoil for future revision."
      ],
      technologies: [
        "Axios",
        "REST APIs",
        "HTTP",
        "React"
      ],
      stats: {
        hours: 11
      }
    },

    {
      day: 11,
      rank: "10",
      suit: "♥",
      category: "Backend Foundations",
      title: "Express.js & Basic Authentication",
      summary:
        "Built a simple authentication system without JWT while beginning backend development using Express and JSON Server.",
      bulletPoints: [
        "Built login and registration pages.",
        "Implemented authentication using simple logic.",
        "Used JSON Server to simulate REST APIs.",
        "Learned Express setup and application structure.",
        "Studied routes, URL parameters, query parameters, request body and headers.",
        "Made the products web application responsive."
      ],
      technologies: [
        "Express.js",
        "JSON Server",
        "REST API",
        "React"
      ],
      stats: {
        hours: 9
      }
    },

    {
      day: 12,
      rank: "9",
      suit: "♥",
      category: "Database Basics",
      title: "MongoDB Introduction & UI Improvements",
      summary:
        "Improved the To-Do application's interface while beginning database development by learning MongoDB installation, setup, and basic CRUD operations.",
      bulletPoints: [
        "Enhanced the To-Do application's UI.",
        "Made the application responsive.",
        "Installed and configured MongoDB.",
        "Learned basic CRUD operations using MongoDB."
      ],
      technologies: [
        "MongoDB",
        "CRUD",
        "React",
        "Tailwind CSS"
      ],
      stats: {
        hours: 7
      }
    }
  ]
},
  {
  week: 3,
  title: "WEEK 3 • FULL-STACK DEVELOPMENT & AUTHENTICATION",
  subtitle:
    "Transitioning from frontend development to full-stack applications by building REST APIs, integrating MongoDB, and implementing secure authentication with JWT and Bcrypt.",
  themeColor: "blue",
  cards: [
    {
      day: 13,
      rank: "A",
      suit: "♣",
      category: "REST APIs",
      title: "Express APIs, Middleware & MongoDB",
      summary:
        "Built my first complete CRUD backend using Express, MongoDB, and Mongoose while understanding how middleware and CORS fit into the request lifecycle.",
      bulletPoints: [
        "Learned API creation using Express.",
        "Understood the purpose of middleware.",
        "Connected Express with MongoDB using Mongoose.",
        "Performed CRUD operations through Mongoose.",
        "Learned why CORS is required.",
        "Built a complete CRUD application using React, Express and MongoDB.",
        "One of the most important learning days so far."
      ],
      technologies: [
        "Express.js",
        "MongoDB",
        "Mongoose",
        "React",
        "CORS"
      ],
      stats: {
        hours: 8
      }
    },

    {
      day: 14,
      rank: "K",
      suit: "♣",
      category: "Backend Project",
      title: "User & Posts Backend",
      summary:
        "Built a simple backend application capable of storing user credentials and posts while understanding the limitations of authentication without JWT.",
      bulletPoints: [
        "Built a backend project with user credentials.",
        "Created a posts feature connected to the database.",
        "Stored user-generated data in MongoDB.",
        "Observed the drawbacks of authentication without protected routes.",
        "Experimented with AI-generated images and videos using Gemini."
      ],
      technologies: [
        "Express.js",
        "MongoDB",
        "Mongoose",
        "Gemini AI"
      ],
      stats: {
        hours: 4
      }
    },

    {
      day: 15,
      rank: "Q",
      suit: "♣",
      category: "Authentication",
      title: "JWT Fundamentals & Mongoose Revision",
      summary:
        "Started learning JSON Web Tokens while revising important Mongoose operations required for backend development.",
      bulletPoints: [
        "Installed and configured JWT.",
        "Learned sign(), decode() and verify().",
        "Revised common Mongoose queries.",
        "Learned findByIdAndUpdate().",
        "Practiced limit() and sorting in ascending and descending order.",
        "Reviewed additional commonly used Mongoose methods."
      ],
      technologies: [
        "JWT",
        "Mongoose",
        "MongoDB"
      ],
      stats: {
        hours: 10
      }
    },

    {
      day: 16,
      rank: "J",
      suit: "♣",
      category: "Secure Authentication",
      title: "Bcrypt, JWT & Protected Routes",
      summary:
        "Implemented a secure authentication flow by combining password hashing with JWT-based authorization and protected backend routes.",
      bulletPoints: [
        "Learned password hashing using Bcrypt.",
        "Implemented login and registration using JWT and Bcrypt.",
        "Generated and sent JWT tokens to the frontend.",
        "Protected backend routes using authentication middleware.",
        "Improved control over secured resources."
      ],
      technologies: [
        "Bcrypt",
        "JWT",
        "Express.js",
        "Middleware"
      ],
      stats: {
        hours: 11
      }
    },

    {
      day: 17,
      rank: "10",
      suit: "♣",
      category: "Authentication System",
      title: "Reliable JWT Authentication Flow",
      summary:
        "Built a more reliable authentication system by combining JWT, Bcrypt, Local Storage, and protected routes while identifying areas for future improvement.",
      bulletPoints: [
        "Integrated JWT authentication.",
        "Used Bcrypt for password security.",
        "Stored authentication tokens using Local Storage.",
        "Implemented protected routes.",
        "Recognized several improvements that could make the system more robust."
      ],
      technologies: [
        "JWT",
        "Bcrypt",
        "Local Storage",
        "Protected Routes"
      ],
      stats: {
        hours: 8
      }
    },

    {
      day: 18,
      rank: "9",
      suit: "♣",
      category: "Major Project",
      title: "Beginning the E-Commerce Project",
      summary:
        "Started developing a complete MERN-based E-Commerce application independently without relying on AI assistance.",
      bulletPoints: [
        "Started building a full-stack E-Commerce website.",
        "Used React for the frontend.",
        "Styled the application using Tailwind CSS.",
        "Built the backend using Express.",
        "Connected the application with MongoDB through Mongoose.",
        "Created initial backend controllers.",
        "Started frontend development."
      ],
      technologies: [
        "React",
        "Tailwind CSS",
        "Express.js",
        "MongoDB",
        "Mongoose"
      ],
      stats: {
        hours: 5
      }
    }
  ]
},
  {
  week: 4,
  title: "WEEK 4 • PROJECT REFINEMENT, DEPLOYMENT & AI EXPLORATION",
  subtitle:
    "Improving authentication architecture, deploying projects, exploring modern frontend tools, and experimenting with AI-powered video generation workflows.",
  themeColor: "purple",
  cards: [
    {
      day: 19,
      rank: "A",
      suit: "♦",
      category: "Authentication",
      title: "Improving the E-Commerce Authentication System",
      summary:
        "Continued developing the E-Commerce project while strengthening its authentication flow and identifying architectural improvements.",
      bulletPoints: [
        "Continued working on the E-Commerce project.",
        "Integrated JWT authentication.",
        "Implemented password hashing using Bcrypt.",
        "Used middleware to secure category routes.",
        "Started analyzing the weaknesses of the current authentication system.",
        "Identified several areas for future improvements."
      ],
      technologies: [
        "JWT",
        "Bcrypt",
        "Express.js",
        "Middleware",
        "MongoDB"
      ],
      stats: {
        hours: 8
      }
    },

    {
      day: 20,
      rank: "K",
      suit: "♦",
      category: "Research",
      title: "Authentication Services & Modern Frameworks",
      summary:
        "Researched production-ready authentication services while studying the limitations of my existing JWT implementation and exploring modern frontend frameworks.",
      bulletPoints: [
        "Reviewed the shortcomings of my JWT implementation.",
        "Researched Clerk for authentication workflows.",
        "Explored MSG91 and SuperProfile services.",
        "Learned about DLT registration requirements.",
        "Got an overview of Next.js.",
        "Explored Angular and Vue at a high level."
      ],
      technologies: [
        "JWT",
        "Clerk",
        "Next.js",
        "Angular",
        "Vue"
      ],
      stats: {
        hours: 6
      }
    },

    {
      day: 21,
      rank: "Q",
      suit: "♦",
      category: "Frontend Development",
      title: "ShadCN UI, GitHub Pages & Role-Based Authorization",
      summary:
        "Learned the fundamentals of ShadCN UI, created a Daily Diary website for GitHub Pages, and improved role-based authorization in the E-Commerce project.",
      bulletPoints: [
        "Learned how ShadCN UI works.",
        "Built a small project for an educational company.",
        "Created and deployed the Daily Diary website on GitHub Pages.",
        "Improved the E-Commerce authentication system.",
        "Implemented role verification.",
        "Restricted admin-only features based on user roles."
      ],
      technologies: [
        "ShadCN UI",
        "React",
        "GitHub Pages",
        "JWT",
        "Role-Based Authorization"
      ],
      stats: {
        hours: 5
      }
    },

    {
      day: 22,
      rank: "J",
      suit: "♦",
      category: "AI Video Generation",
      title: "AI Commercial Production & Video Generation",
      summary:
        "Worked on a dermatology advertisement project while experimenting with multiple AI video generation platforms to achieve better results.",
      bulletPoints: [
        "Continued working on the E-Commerce project.",
        "Started another assigned project.",
        "Created a dermatologist skincare commercial.",
        "Generated multiple AI videos to improve output quality.",
        "Experimented with Gemini and Google Flow.",
        "Explored Kling, OpenArt, Freepik and Krea for AI video generation.",
        "Discovered that many advanced AI video platforms require paid subscriptions."
      ],
      technologies: [
        "Gemini",
        "Google Flow",
        "Kling",
        "OpenArt",
        "Freepik",
        "Krea AI"
      ],
      stats: {
        hours: 5
      }
    },

    {
      day: 23,
      rank: "10",
      suit: "♦",
      category: "Recovery",
      title: "Rest & Eye Recovery",
      summary:
        "Took a complete break from development to recover from prolonged screen time and eye strain.",
      bulletPoints: [
        "Took a complete holiday.",
        "Did not work on any project.",
        "Avoided using the laptop throughout the day.",
        "Focused on recovering from eye strain."
      ],
      technologies: [
        "Just Chilling..."
      ],
      stats: {
        hours: 0.001
      }
    },

    {
      day: 24,
      rank: "9",
      suit: "♦",
      category: "AI Media Generation",
      title: "Refining the Dermatology Commercial",
      summary:
        "Continued improving the AI-generated dermatology commercial while realizing the complexity involved in producing high-quality AI videos.",
      bulletPoints: [
        "Continued working on the dermatology commercial.",
        "Experimented with a third AI video generation model.",
        "Compared outputs from different AI models.",
        "Learned that producing quality AI videos requires significant experimentation and iteration.",
        "Concluded the four-week training journey with practical experience in AI-assisted content creation."
      ],
      technologies: [
        "AI Video Generation",
        "Gemini",
        "Google Flow",
        "Kling"
      ],
      stats: {
        hours: 3
      }
    }
  ]
}
];

export const getWeek = (weekNum) => weeks.find(w => w.week === weekNum);
export const getAllCards = () => weeks.flatMap(w => w.cards);
