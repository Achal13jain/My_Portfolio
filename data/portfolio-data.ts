import { Brain, ShoppingCart, Activity, Calculator, Code2, Database, GitBranch, Server, Smartphone, Monitor, Globe, Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react'
import { SiPython, SiJavascript, SiReact, SiNodedotjs, SiPostgresql, SiDocker, SiGit, SiPytorch, SiTensorflow } from 'react-icons/si'
import { FaJava } from 'react-icons/fa'

export interface Project {
  title: string
  description: string
  icon: any
  image: string
  color: string
  tech: string[]
  gradient: string
  border: string
  glow: string
  githubLink: string
  liveLink?: string
}

export interface SkillCategory {
  title: string
  icon: any
  skills: string[]
  color: string
}

export interface Experience {
  company: string
  position: string
  duration: string
  location: string
  description: string
  achievements: string[]
  skills: string[]
}

export interface Education {
  degree: string
  specialization: string
  university: string
  duration: string
  location: string
  highlights: string[]
}

export interface ContactInfo {
  icon: any
  label: string
  value: string
  href: string
  color: string
}

export interface SocialLink {
  name: string
  icon: any
  href: string
  color: string
}

export interface TechIcon {
  icon: any
  delay: number
  radius: number
  color: string
  name: string
}

export const projects: Project[] = [
  {
    title: 'AI Resume Matcher',
    description: 'Intelligent resume screening system using NLP and machine learning to match candidates with job requirements. Built with Python, FastAPI, and transformer models.',
    icon: Brain,
    image: '/images/ai-resume-matcher.jpg',
    color: 'from-purple-500 to-purple-700',
    tech: ['Python', 'FastAPI', 'NLP', 'Streamlit'],
    gradient: 'bg-gradient-to-br from-purple-900/20 to-purple-700/20',
    border: 'border-purple-500/30',
    glow: 'shadow-purple-500/20',
    githubLink: 'https://github.com/Achal13jain/AI_resume_matcher',
    //liveLink: 'https://ai-resume-matcher.vercel.app',
  },
  {
    title: 'E-commerce Backend',
    description: 'Scalable microservices architecture for e-commerce platform with user management, shopping cart, checkout, and order history functionalities with JWT-based secure endpoints.',
    icon: ShoppingCart,
    image: '/images/ecommerce-backend.jpg',
    color: 'from-teal-500 to-teal-700',
    tech: ['Python', 'PostgreSQL', 'FastAPI', 'JWT'],
    gradient: 'bg-gradient-to-br from-teal-900/20 to-teal-700/20',
    border: 'border-teal-500/30',
    glow: 'shadow-teal-500/20',
    githubLink: 'https://github.com/Achal13jain/Ecommerce_backend',
    //liveLink: 'https://ecommerce-api.herokuapp.com',
  },
  {
    title: 'Disease Prediction System',
    description: 'ML-powered healthcare application for early disease detection using symptom analysis. Implemented ensemble learning with 92% accuracy on validation data.',
    icon: Activity,
    image: '/images/disease-prediction.jpg',
    color: 'from-purple-600 to-teal-600',
    tech: ['Python', 'Scikit-learn', 'Pandas', 'Streamlit', 'Machine Learning'],
    gradient: 'bg-gradient-to-br from-purple-800/20 to-teal-800/20',
    border: 'border-gradient-to-r from-purple-500/30 to-teal-500/30',
    glow: 'shadow-purple-500/10',
    githubLink: 'https://github.com/Achal13jain/Disease-prediction-system',
    //liveLink: 'https://disease-predictor.streamlit.app',
  },
  {
    title: 'Splitwise Web App',
    description: 'Expense sharing application with real-time calculations, group management, and settlement optimization. Clean UI with responsive design.',
    icon: Calculator,
    image: '/images/splitwise-clone.jpg',
    color: 'from-teal-600 to-purple-600',
    tech: ['Java', 'Springboot', 'PostgreSQL', 'JavaScript'],
    gradient: 'bg-gradient-to-br from-teal-800/20 to-purple-800/20',
    border: 'border-teal-500/30',
    glow: 'shadow-teal-500/20',
    githubLink: 'https://github.com/Achal13jain/Splitwise_app',
    liveLink: 'https://msplitwise.netlify.app/',
  },
]

export const skillCategories: SkillCategory[] = [
  {
    title: 'Languages',
    icon: Code2,
    skills: ['Python', 'Java', 'JavaScript'],
    color: 'from-purple-500 to-purple-700',
  },
  {
    title: 'Frontend',
    icon: Smartphone,
    skills: ['React', 'CSS', 'HTML5'],
    color: 'from-teal-500 to-teal-700',
  },
  {
    title: 'Backend',
    icon: Server,
    skills: ['FastAPI', 'REST APIs', 'Microservices'],
    color: 'from-purple-600 to-teal-600',
  },
  {
    title: 'AI/ML',
    icon: Brain,
    skills: ['Numpy', 'Pandas', 'Scikit-learn', 'PyTorch'],
    color: 'from-teal-600 to-purple-600',
  },
  {
    title: 'Database',
    icon: Database,
    skills: ['PostgreSQL', 'MySQL'],
    color: 'from-purple-700 to-teal-500',
  },
  {
    title: 'DevOps',
    icon: GitBranch,
    skills: ['GitHub', 'Docker', 'CI/CD'],
    color: 'from-teal-700 to-purple-500',
  },
]

export const experience: Experience = {
  company: 'NucleusTeq Consulting Pvt. Ltd.',
  position: 'Software Development Intern',
  duration: 'Feb 2025- Jul 2025',
  location: 'Indore, India',
  description: 'Developed and optimized backend systems for enterprise applications, contributing to microservices architecture and implementing REST APIs with comprehensive testing suites.',
  achievements: [
    'Developed full-stack applications using React, Java, Python, and FastAPI',
    'Built scalable REST APIs ',
    'Optimized database queries improving response time by 40%',
    'Collaborated with cross-functional teams on agile development',

  ],
  skills: ['Python', 'Java', 'FastAPI', 'PostgreSQL', 'Git', 'Agile'],
}

export const education: Education = {
  degree: 'B.Tech Computer Science',
  specialization: 'AI-ML Specialization',
  university: 'Medicaps University',
  duration: 'Aug 2021 - Aug 2025',
  location: 'Indore, India',
  highlights: [
    'Specialized coursework in Machine Learning and AI',
    'Strong foundation in Data Structures and Algorithms',
    'Hands-on experience with modern software development',
    'Active participation in coding competitions and hackathons',
  ],
}

export const contactInfo: ContactInfo[] = [
  {
    icon: Mail,
    label: 'Email',
    value: 'jainachal38@gmail.com',
    href: 'mailto:jainachal38@gmail.com',
    color: 'from-purple-500 to-purple-700',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 94069 18980',
    href: 'tel:+919406918980',
    color: 'from-teal-500 to-teal-700',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Indore, India',
    href: 'https://share.google/O5txBSd5LvUY74nbd',
    color: 'from-purple-600 to-teal-600',
  },
]

export const socialLinks: SocialLink[] = [
  {
    name: 'GitHub',
    icon: Github,
    href: 'https://github.com/Achal13jain',
    color: 'hover:text-purple-400',
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    href: 'https://linkedin.com/in/achal-jain13',
    color: 'hover:text-teal-400',
  },
]

export const techIcons: TechIcon[] = [
  {
    icon: SiPython,
    delay: 0,
    radius: 120,
    color: 'text-yellow-400',
    name: 'Python'
  },
  {
    icon: SiPytorch,
    delay: 1,
    radius: 140,
    color: 'text-orange-500',
    name: 'PyTorch'
  },
  {
    icon: SiTensorflow,
    delay: 2,
    radius: 100,
    color: 'text-orange-400',
    name: 'TensorFlow'
  },
  {
    icon: FaJava,
    delay: 2,
    radius: 140,
    color: 'text-red-500',
    name: 'Java'
  },
  {
    icon: SiJavascript,
    delay: 4,
    radius: 100,
    color: 'text-yellow-300',
    name: 'JavaScript'
  },
  {
    icon: SiReact,
    delay: 6,
    radius: 160,
    color: 'text-blue-400',
    name: 'React'
  },
  {
    icon: SiPostgresql,
    delay: 1,
    radius: 110,
    color: 'text-blue-600',
    name: 'PostgreSQL'
  },
  {
    icon: SiNodedotjs,
    delay: 3,
    radius: 130,
    color: 'text-green-500',
    name: 'Node.js'
  },
  {
    icon: SiDocker,
    delay: 5,
    radius: 150,
    color: 'text-blue-500',
    name: 'Docker'
  },
  {
    icon: SiGit,
    delay: 7,
    radius: 120,
    color: 'text-orange-500',
    name: 'Git'
  },
]
