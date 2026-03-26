import { Brain, ShoppingCart, Activity, Calculator, Code2, Database, GitBranch, Server, Smartphone, Monitor, Globe, Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react'
import { SiPython, SiJavascript, SiReact, SiNodedotjs, SiPostgresql, SiDocker, SiGit, SiPytorch, SiTensorflow } from 'react-icons/si'
import { FaJava } from 'react-icons/fa'

export interface Project {
  title: string
  description: string
  icon: React.ElementType
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
  icon: React.ElementType
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
  icon: React.ElementType
  label: string
  value: string
  href: string
  color: string
}

export interface SocialLink {
  name: string
  icon: React.ElementType
  href: string
  color: string
}

export interface TechIcon {
  icon: React.ElementType
  delay: number
  radius: number
  color: string
  name: string
}

export interface Certification {
  title: string
  issuer: string
  date?: string
  logo: string
  link?: string
}

export interface BlogPost {
  title: string
  description: string
  url: string
  platform: 'medium' | 'hashnode'
  image: string
  category: string
  date: string
  readTime: string
  featured: boolean
  tags: string[]
}

export const blogs: BlogPost[] = [
  {
    title: 'Context Engineering Is a Skill. Most Developers Are Skipping It.',
    description: "Your AI coding agent isn't underperforming because the model is weak — it's underperforming because you haven't built the environment it needs. Skills, CLAUDE.md, hooks, and the patterns that close the gap.",
    url: 'https://medium.com/towards-artificial-intelligence/context-engineering-is-a-skill-most-developers-are-skipping-it-9938678292b8',
    platform: 'medium',
    image: 'https://res.cloudinary.com/du0ea6cth/image/upload/v1774462517/achal-portfolio/Context%20eng%20blog.png',
    category: 'DEVELOPER TOOLS',
    date: 'March 2026',
    readTime: '6 min read',
    featured: true,
    tags: ['Claude Code', 'Cursor', 'AI Tooling', 'Context Engineering']
  },
  {
    title: "Why Your Laptop Isn't Enough: What 'Cloud' Actually Means for ML",
    description: 'Understanding the limitations of local hardware and how cloud infrastructure empowers scalable Machine Learning models.',
    url: 'https://achal-jain.hashnode.dev/why-your-laptop-isn-t-enough-what-cloud-actually-means-for-ml',
    platform: 'hashnode',
    image: 'https://res.cloudinary.com/du0ea6cth/image/upload/v1774462521/achal-portfolio/blog_cover_part1.png',
    category: 'CLOUD / ML',
    date: 'March 2026',
    readTime: '4 min read',
    featured: false,
    tags: ['Cloud', 'Machine Learning', 'Infrastructure']
  },
  {
    title: 'Free Cloud Platforms for ML: Colab, Kaggle, Hugging Face',
    description: 'A comprehensive guide to leveraging free cloud resources for Machine Learning model training and experimentation.',
    url: 'https://achal-jain.hashnode.dev/free-cloud-platforms-for-ml-colab-kaggle-hugging-face-what-nobody-tells-you',
    platform: 'hashnode',
    image: 'https://res.cloudinary.com/du0ea6cth/image/upload/v1774462528/achal-portfolio/Blog%20part%202%20cover%20image%20hashnode.png',
    category: 'CLOUD / ML',
    date: 'March 2026',
    readTime: '5 min read',
    featured: false,
    tags: ['Kaggle', 'Google Colab', 'Hugging Face']
  },
  {
    title: 'I Deployed a Stock Prediction Model on AWS: Here\'s Exactly How',
    description: 'A complete step-by-step walkthrough of building and deploying a machine learning model on Amazon Web Services (AWS).',
    url: 'https://achal-jain.hashnode.dev/i-deployed-a-stock-prediction-model-on-aws-here-s-exactly-how',
    platform: 'hashnode',
    image: 'https://res.cloudinary.com/du0ea6cth/image/upload/v1774462544/achal-portfolio/Blog%20part%203%20cover%20image.png',
    category: 'CLOUD / ML',
    date: 'March 2026',
    readTime: '8 min read',
    featured: false,
    tags: ['AWS', 'Deployment', 'Stock Prediction']
  }
]

export const certifications: Certification[] = [
  {
    title: 'Oracle Cloud Infrastructure 2025 Certified Generative AI Professional',
    issuer: 'Oracle',
    date: '2025',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg',
    link: 'https://drive.google.com/file/d/1ygDykaoaEX42EPzy2DY5RwLvc8Q8bVnF/view?usp=sharing'
  },
  {
    title: 'Oracle Cloud Infrastructure 2025 Certified Data Science Professional',
    issuer: 'Oracle',
    date: '2025',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg',
    link: 'https://drive.google.com/file/d/1GUn7DQuy1X9puG53oCadzs0nOPbA0MO-/view?usp=sharing'
  },
  {
    title: 'AWS Academy Graduate - Machine Learning Foundations',
    issuer: 'Amazon Web Services',
    date: '2023',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg',
    link: 'https://drive.google.com/file/d/1XeYst0TvfO5JlVqKBlWBVSP-yiKwmNI8/view?usp=sharing'
  },
  {
    title: 'Databricks Get Started Days: Data Engineering & SQL',
    issuer: 'Databricks',
    logo: 'https://cdn.simpleicons.org/databricks/FF3621',
    link: 'https://drive.google.com/file/d/1mMsr9qJIqEZ8pNItv08GP8OhlL1u0XLl/view?usp=sharing'
  },
  {
    title: 'PCAP - Programming Essentials in Python',
    issuer: 'Python Institute',
    logo: 'https://cdn.simpleicons.org/python/3776AB',
    link: 'https://drive.google.com/file/d/1LrpeBPjjYhYNLs1HzOS2s4qojlKpbIdi/view?usp=sharing'
  },
  {
    title: 'McKinsey Forward Program',
    issuer: 'McKinsey & Company',
    logo: 'https://res.cloudinary.com/du0ea6cth/image/upload/v1774462555/achal-portfolio/mckinsey-forward.png',
    link: 'https://drive.google.com/file/d/1FNHOcWghM72kSoCPi_HHy7jDPDYsDvzo/view?usp=sharing'
  },
  {
    title: 'Introduction to Cybersecurity',
    issuer: 'Cisco',
    logo: 'https://cdn.simpleicons.org/cisco/1BA0D7',
    link: 'https://drive.google.com/file/d/1SbNtpkIvPRxwHPWovcK-ztuOC5m0fidh/view?usp=sharing'
  }
]

export const projects: Project[] = [
  {
    title: 'AI Resume Matcher',
    description: 'Intelligent resume screening system using NLP and machine learning to match candidates with job requirements. Built with Python, FastAPI, and transformer models.',
    icon: Brain,
    image: 'https://res.cloudinary.com/du0ea6cth/image/upload/v1774462548/achal-portfolio/ai-resume-matcher.jpg',
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
    image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=1000&auto=format&fit=crop',
    color: 'from-teal-500 to-teal-700',
    tech: ['Python', 'PostgreSQL', 'FastAPI', 'JWT'],
    gradient: 'bg-gradient-to-br from-teal-900/20 to-teal-700/20',
    border: 'border-teal-500/30',
    glow: 'shadow-teal-500/20',
    githubLink: 'https://github.com/Achal13jain/Ecommerce_backend',
    //liveLink: 'https://ecommerce-api.herokuapp.com',
  },
  {
    title: 'Fyers MCX Data Extractor',
    description: 'Production-grade tool to download historical MCX futures data directly from Fyers API v3. Features a robust CLI and a modern glassmorphism Web UI with smart symbol auto-discovery.',
    icon: Activity,
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1000&auto=format&fit=crop',
    color: 'from-purple-600 to-teal-600',
    tech: ['Python', 'FastAPI', 'JavaScript', 'Fyers API'],
    gradient: 'bg-gradient-to-br from-purple-800/20 to-teal-800/20',
    border: 'border-gradient-to-r from-purple-500/30 to-teal-500/30',
    glow: 'shadow-purple-500/10',
    githubLink: 'https://github.com/Achal13jain/Fyers-data-extractor',
    //liveLink: 'https://disease-predictor.streamlit.app',
  },
  {
    title: 'Splitwise Web App',
    description: 'Expense sharing application with real-time calculations, group management, and settlement optimization. Clean UI with responsive design.',
    icon: Calculator,
    image: 'https://res.cloudinary.com/du0ea6cth/image/upload/v1774462553/achal-portfolio/splitwise-clone.jpg',
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
    title: 'Programming Languages',
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
    skills: ['FastAPI', 'Django', 'REST APIs', 'Microservices'],
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
