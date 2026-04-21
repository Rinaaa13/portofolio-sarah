import type { LucideIcon } from 'lucide-react';
import { Github, Linkedin, Mail, BarChart, Code, Palette, CloudCog, ClipboardCheck } from 'lucide-react';
import { WhatsappIcon } from '@/components/whatsapp-icon';

export const profile = {
  name: "SARAH DESMARINA",
  location: "Palembang, South Sumatra",
  bio: "I am an Information Systems graduate with strong analytical skills and hands-on experience in cloud computing, data analysis, and front-end development. I enjoy solving real-world problems through technology and building data-driven solutions. Completed the Korea–ASEAN Digital Academy (selected from 900+ applicants), gaining hands-on technical experience. Also completed the AWS re/Start program, strengthening AWS fundamentals through labs and assessments. Currently pursuing a Cloud Engineer scholarship at Kebun Academy, starting with Japanese language training followed by AWS preparation for careers in Japan.",
  contact: {
    phone: "081278983795",
    email: "sdesmarina@gmail.com",
    linkedin: "https://linkedin.com/in/sarah-desmarina-450651246",
    github: "https://github.com/Rinaaa13",
  },
  contactLinks: [
    { icon: Mail, label: 'Email', value: 'sdesmarina@gmail.com', href: 'https://mail.google.com/mail/?view=cm&fs=1&to=sdesmarina@gmail.com' },
    { icon: WhatsappIcon as any, label: 'WhatsApp', value: '081278983795', href: 'https://wa.me/6281278983795' },
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

type ProjectCategory = 'Front-End' | 'Data Analysis' | 'UI/UX Design' | 'Cloud & DevOps' | 'Software Testing';

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
  'Cloud & DevOps': { icon: CloudCog, color: 'text-orange-500' },
  'Software Testing': { icon: ClipboardCheck, color: 'text-teal-500' },
};

export const projects: Project[] = [
  {
    id: 'cloud-monitoring',
    title: "Cloud Monitoring Project",
    role: "Docker-Based Cloud Simulation",
    year: "2023",
    description: "Built a comprehensive cloud simulation environment using Docker Compose with integrated monitoring stack. The system demonstrates real-world cloud infrastructure monitoring capabilities essential for Cloud Engineering roles.",
    link: "https://drive.google.com/file/d/10DZVzXlQiDKgZ9t92mGRYpRG8fJ7kxsP/view?usp=drive_link",
    category: 'Cloud & DevOps',
    imagePlaceholderId: 'project_cloud_monitoring'
  },
  {
    id: 'aws-infra',
    title: "AWS Infrastructure Project",
    role: "EC2 Instance Deployment & Management",
    year: "2023",
    description: "Hands-on experience deploying and managing AWS EC2 instances with proper security configurations. Implemented secure access patterns using bastion hosts and automated instance provisioning with AWS CLI.",
    link: "https://drive.google.com/file/d/1-vVa0CObS_sN68Bzv9bCzEz2NlDSHX5e/view?usp=drive_link",
    category: 'Cloud & DevOps',
    imagePlaceholderId: 'project_aws_infra'
  },
  {
    id: 'event-management-testing',
    title: "Event Management System Project",
    role: "Front-End Tester",
    year: "2023",
    description: "Performed manual testing for a web-based event management application (KADA Final Project). Ensured functionality and usability across key features such as CRUD operations, authentication, and participant management. Detected and documented bugs, contributing to improved system reliability and user experience through collaboration with developers.",
    link: "https://drive.google.com/file/d/1ycen70IlabDukRb69yKXryyEkJtmxxJw/view?usp=drive_link",
    category: 'Software Testing',
    imagePlaceholderId: 'project_event_management'
  },
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
  {
    id: 'personal-finance-app',
    title: "Personal Finance App UI",
    role: "UI/UX Designer",
    year: "2024",
    description: "Designed a clean and intuitive mobile app interface for tracking personal expenses and budgets. Focused on user-friendly navigation and data visualization.",
    link: "#",
    category: 'UI/UX Design',
    imagePlaceholderId: 'project_finance_app'
  },
  {
    id: 'blog-api',
    title: "RESTful Blog API",
    role: "Back-End Developer",
    year: "2023",
    description: "Developed a secure and scalable RESTful API for a blogging platform using Node.js and Express. Implemented features for user authentication, post creation, and comments.",
    link: "#",
    category: 'Cloud & DevOps',
    imagePlaceholderId: 'project_blog_api'
  },
  {
    id: 'sales-dashboard',
    title: "Interactive Sales Dashboard",
    role: "Data Analyst",
    year: "2024",
    description: "Created an interactive dashboard using Tableau to visualize sales data. The dashboard helps identify sales trends, top-performing products, and regional performance.",
    link: "#",
    category: 'Data Analysis',
    imagePlaceholderId: 'project_sales_dashboard'
  }
];
