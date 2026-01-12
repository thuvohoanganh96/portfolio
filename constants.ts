import { Project, Experience, Skill } from './types';

export const USER_INFO = {
  first_name: "Thu (트)",
  family_name: "Vo (버)",
  name: "Thu Vo",
  nationality: "Vietnamese 🇻🇳",
  bio: "Full-stack engineer have an interest in integrating AI and building user-centered applications.",
  location: "Daejeon, Korea",
  email: "thu.vohoanganh96@gmail.com",
  phone: "010 6579 2603"
};

export const EDUCATION = [
  {
    id: 1,
    degree: "Master degree of Computer Science",
    institution: "Korea Advanced Institute of Science & Technology (KAIST)",
    location: "South Korea",
    duration: "2024 - 2026",
    gpa: "3.54/4.3"
  },
  {
    id: 2,
    degree: "Bachelor degree of Materials Engineering",
    institution: "HCM city University of Technology",
    location: "Vietnam",
    duration: "2015 - 2019",
    gpa: "3.5/4"
  }
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    name: "scotsman-ecommerce",
    description: "Premium e-commerce platform for carbon fiber products with high-performance rendering and custom UI kits.",
    language: "TypeScript",
    stars: 42,
    forks: 12,
    updatedAt: "Active",
    topics: ["nextjs", "tailwindcss", "ant-design", "ecommerce"]
  },
  {
    id: 2,
    name: "dustland-crafting-station",
    description: "Web3 platform for upgrading virtual game items to NFTs, featuring Metamask integration and blockchain interactions.",
    language: "JavaScript",
    stars: 88,
    forks: 15,
    updatedAt: "2023",
    topics: ["web3", "ethersjs", "nft", "nextjs"]
  },
  {
    id: 3,
    name: "interior-design-backend",
    description: "Scalable backend service for interior design including 3D scan processing, style quizzes, and project management.",
    language: "Golang",
    stars: 24,
    forks: 5,
    updatedAt: "2023",
    topics: ["golang", "postgresql"]
  },
  {
    id: 4,
    name: "customizer-kiosk",
    description: "Cross-platform mobile application for in-store kiosks allowing customers to design and customize products in real-time.",
    language: "JavaScript",
    stars: 15,
    forks: 3,
    updatedAt: "2022",
    topics: ["react-native", "mobile", "kiosk", "ui-ux"]
  }
];

export const EXPERIENCE: Experience[] = [
  {
    id: 0,
    role: "Master student in Human-computer interaction",
    company: "ICLab, KAIST",
    duration: "Feb 2024 - present",
    description: "Research on the design and application of an AI-powered system in the mental health domain",
    projects: [
      {
        name: "AI Interviewer for Psychiatric History Taking (paper under review CHI'26)",
        role: "HCI Researcher, Full-stack Developer",
        team: "Supervised by Prof. Uichin Lee, collaborate with PhD student Yugyeong Jung",
        description: ["In real clinical practice, interviews are constrained by limited time and the unpredictability of patient responses, making it difficult to secure essential information efficiently. We design a flexible psychiatric interviewer that dynamically adapts question flow and prioritizes clinically essential information within time constraints, with a clinical dashboard for efficient review.",
          "The clinical agent follows a structured pipeline: evaluating patient responses, predicting potential mental health conditions, prioritizing subsequent questions, and adapting the interview flow in real time. The system was evaluated through a user study involving 20 clinicians, demonstrating its effectiveness in efficiently collecting critical psychiatric information."],
        technologies: ["React", "Flask", "RESTful API", "MongoDB", "OpenAI API", "LangChain", "LangSmith"]
      },
      {
        name: "Memory-Augmented AI Journaling Mobile Application",
        role: "HCI Reseacher, Full-stack Developer",
        team: "Supervised by Prof. Uichin Lee, collaborate with PhD student Yugyeong Jung",
        description: ['Developed a full-stack mobile application designed to support mental well-being through personalized emotional journaling. The system features a "reflective emotional memory" architecture that encodes user diary entries into contextual memory units and AI companion to help users interpret, revisit, and make sense of their emotions over time. The application was deployed for a 4-week in-the-wild user study with 50 participants.'],
        technologies: ["React Native", "Node.js", "RESTful API", "MongoDB", "OpenAI API"],
      }
    ]
  },
  {
    id: 1,
    role: "Software Engineer",
    company: "Arevo Vietnam",
    duration: "May 2021 - December 2024",
    description: "Developed and maintained full-stack solutions ranging from high-traffic e-commerce to Web3 and enterprise mobile applications.",
    projects: [
      {
        name: "E-commerce Website",
        role: "Frontend Developer",
        description: ["Built and maintained the frontend for E-commerce website"],
        technologies: ["Next.js", "Tailwind CSS", "Ant Design", "Styled Components"],
      },
      {
        name: "Product Customizer Mobile App",
        role: "Mobile Developer",
        description: ["Developed a cross-platform tablet application for customers to interactively customize product specifications."],
        technologies: ["React Native"]
      },
      {
        name: "Dustland Crafting Station",
        role: "Frontend Developer (Web3)",
        description: ["Engineered a Web3 portal for item-to-NFT upgrades, managing wallet connectivity and smart contract interactions."],
        technologies: ["Next.js", "@emotion/styled", "ethers.js", "Metamask"],
      },
      {
        name: "Interior Design Service Platform",
        role: "Backend Developer",
        description: ["Architected a robust backend for handling 3D room scans, interior design proposals, and style identification algorithms."],
        technologies: ["Golang", "PostgreSQL", "RESTful API"]
      }
    ]
  },
  {
    id: 2,
    role: "Front-end Engineer",
    company: "Robert Bosch Engineering (RBVH)",
    duration: "Sep 2020 - May 2021",
    description: "Maintained an enterprise purchase requisition management website. Focused on frontend stability, bug resolution, and implementing global change requests using Angular 8 within a SharePoint environment."
  }
];

export const SKILLS: Skill[] = [
  { name: "React", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
  { name: "Angular", category: "Frontend" },
  { name: "React Native", category: "Frontend" },
  { name: "HTML", category: "Frontend" },
  { name: "CSS", category: "Frontend" },
  { name: "Tailwind CSS", category: "Frontend" },
  { name: "Flask", category: "Backend" },
  { name: "PostgreSQL", category: "Backend" },
  { name: "MongoDB", category: "Backend" },
  { name: "Node.js", category: "Backend" },
  { name: "RESTful API", category: "Backend" },
  { name: "Python", category: "Programming Languages" },
  { name: "JavaScript/TypeScript", category: "Programming Languages" },
  { name: "Golang", category: "Programming Languages" },
  { name: "Github", category: "Others" },
  { name: "LangChain", category: "Others" },
  { name: "LangSmith", category: "Others" },
];