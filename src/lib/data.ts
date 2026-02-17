import type { LucideIcon } from 'lucide-react';
import { Github, Linkedin, Mail, Phone, BarChart, Code, Palette } from 'lucide-react';

export const profile = {
  name: "SARAH DESMARINA",
  location: "Palembang, South Sumatra",
  bio: "A fresh graduate in Information Systems with a strong interest in data analysis and business operations. Experienced in academic projects, competitions, and collaborative environments. A fast learner with analytical thinking, problem-solving skills, and a strong motivation to grow as a future business leader.",
  contact: {
    phone: "081278983795",
    email: "sdesmarina@gmail.com",
    linkedin: "https://linkedin.com/in/sarah-desmarina-450651246",
    github: "https://github.com/Rinaaa13",
  },
  contactLinks: [
    { icon: Mail, label: 'Email', value: 'sdesmarina@gmail.com', href: 'mailto:sdesmarina@gmail.com' },
    { icon: Phone, label: 'Phone', value: '081278983795', href: 'tel:081278983795' },
    { icon: Linkedin, label: 'LinkedIn', value: 'Sarah Desmarina', href: 'https://linkedin.com/in/sarah-desmarina-450651246' },
    { icon: Github, label: 'GitHub', value: 'Rinaaa13', href: 'https://github.com/Rinaaa13' },
  ]
};

export const education = {
  university: "Sriwijaya University",
  location: "Palembang, South Sumatra",
  degree: "Bachelor (S1) Information Systems/Computer Science",
  gpa: "3.95 / 4.00",
  duration: "Aug 2021 - Jan 2025",
  courses: [
    "Algorithms and Data Structures",
    "Statistics",
    "Database",
    "User Experience Design",
    "Web Programming",
    "Data Mining",
    "Knowledge Management",
    "Data Visualization",
    "Product Development Strategy",
  ]
};

type ProjectCategory = 'Front-End' | 'Data Analysis' | 'UI/UX Design';

export interface Project {
  id: string;
  title: string;
  role: string;
  year: string;
  description: string;
  link: string;
  category: ProjectCategory;
  imagePlaceholderId: string;
}

export const projectCategories: Record<ProjectCategory, { icon: LucideIcon; color: string }> = {
  'Front-End': { icon: Code, color: 'text-sky-500' },
  'Data Analysis': { icon: BarChart, color: 'text-emerald-500' },
  'UI/UX Design': { icon: Palette, color: 'text-violet-500' },
};

export const projects: Project[] = [
  {
    id: 'lamp-sim',
    title: "Website Lamp Simulation",
    role: "Front-End Developer",
    year: "2025",
    description: "Building a website simulating switches and lights in a house using fundamental web technologies.",
    link: "https://rinaaa13.github.io/WebsiteLampSimulation/",
    category: 'Front-End',
    imagePlaceholderId: 'project_lamp_sim'
  },
  {
    id: 'login-register',
    title: "Login and Register UI",
    role: "Front-End Developer",
    year: "2025",
    description: "A simple yet functional project demonstrating user authentication flows with login and registration forms, focusing on client-side validation and UI.",
    link: "https://rinaaa13.github.io/loginAndRegisterWeb/",
    category: 'Front-End',
    imagePlaceholderId: 'project_login_register'
  },
  {
    id: 'todo-list',
    title: "Todo List Website",
    role: "Front-End Developer",
    year: "2025",
    description: "Developed an interactive task management web application using HTML, CSS, and JavaScript, allowing users to add, mark as complete, and delete tasks dynamically.",
    link: "https://rinaaa13.github.io/CodingCamp-290925-sarahdesmarina/",
    category: 'Front-End',
    imagePlaceholderId: 'project_todo'
  },
  {
    id: 'guardmind',
    title: "GuardMind Website",
    role: "Front-End Developer",
    year: "2024",
    description: "Developed a web-based application focusing on rich user interaction and system logic using HTML, CSS, and JavaScript to create a responsive and engaging experience.",
    link: "https://rinaaa13.github.io/GuardMind_web/",
    category: 'Front-End',
    imagePlaceholderId: 'project_guardmind'
  },
  {
    id: 'sentiment-analysis',
    title: "Customer Sentiment Analysis",
    role: "Data Analyst",
    year: "2023",
    description: "Developed a Power BI dashboard for analyzing participant sentiment in training feedback at PT MariBelajar Indonesia Cerdas to identify improvement areas and enhance data-driven decision-making.",
    link: "https://drive.google.com/file/d/1bO6OPRsQ1FoxHGOcvoEiSGBBmmYa0bI9/view?usp=sharing",
    category: 'Data Analysis',
    imagePlaceholderId: 'project_sentiment'
  },
  {
    id: 'rice-prediction',
    title: "Rice Price Prediction",
    role: "Team Member",
    year: "2024",
    description: "Implemented an LSTM-based time-series prediction model to forecast rice prices and support policy recommendations in a national data science competition.",
    link: "https://drive.google.com/file/d/1FGv97ewFJYjS1_ARvCUS4Pr-Lrfinbc_/view?usp=sharing",
    category: 'Data Analysis',
    imagePlaceholderId: 'project_rice'
  },
  {
    id: 'greenmind',
    title: "GREENMIND App UI/UX",
    role: "Team Member",
    year: "2024",
    description: "Created the UI/UX for an AI-integrated recycling app promoting sustainable behavior. This project was recognized as one of the winning projects in a national competition.",
    link: "https://drive.google.com/file/d/1lN1SVU1x0Za9Cdw0y7qGXD6N4H2LXQTB/view?usp=sharing",
    category: 'UI/UX Design',
    imagePlaceholderId: 'project_greenmind'
  },
  {
    id: 'palming',
    title: "Palming App UI/UX",
    role: "Team Member",
    year: "2024",
    description: "Designed an intuitive mobile app connecting travelers with local guides and tourism insights in Palembang. The design was recognized in a national-level UI/UX competition.",
    link: "https://drive.google.com/file/d/16j8xp7iKJHGJYMg3AIGlSMlVn0e0WOQE/view?usp=sharing",
    category: 'UI/UX Design',
    imagePlaceholderId: 'project_palming'
  },
];
