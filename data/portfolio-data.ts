
import { Brain, ShoppingCart, Activity, Calculator, Code2, Database, GitBranch, Server, Smartphone, Monitor, Globe } from 'lucide-react'

export interface Project {
  title: string
  description: string
  icon: any // Using specific type from lucide-react would be better but keeping it simple for now
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
      skills: ['Numpy', 'Pandas','Scikit-learn','PyTorch'],
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
