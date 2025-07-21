import avatar from "../public/avatar.jpg"
import mentalHealth from "../public/mentalHealth.png"
import nyaayveer from "../public/nyaayveer.jpg"



export const portfolioConfig = {
  // Personal Information
  personal: {
    name: "Arpit Chakraborty",
    title: "AI/ML Engineer & Full Stack Developer",
    tagline: "Building intelligent systems with real-world impact",
    email: "arpit.chakraborty.03@gamil.com",
    phone: "+91 7044748127",
    location: "Kolkata, India",
    avatar: avatar.src,
    resumeUrl: "https://drive.google.com/file/d/1kOXfEibbjEfukVNo9jciaNzmoUHheWGi/view"
  },

  // Social Links
  social: {
    github: "https://github.com/arpit-chakraborty",
    linkedin: "https://www.linkedin.com/in/arpit-chakraborty/",
    youtube: "https://www.youtube.com/@SpecsGuy",
  },

  // About Section
  about: {
    description:
      "I'm an AI/ML enthusiast and full-stack developer with hands-on experience in building intelligent systems for legal, mental health, and community domains. I specialize in fine-tuning transformer models, developing real-time inference pipelines, and integrating AI into scalable web and mobile applications.",
    highlights: [
      "Built AI-powered apps with 98%+ accuracy in legal and healthcare domains",
      "Expert in NLP, Transformers, and ML pipelines using Hugging Face and PyTorch",
      "Full-stack developer with React, Flask, and deployment experience",
      "SIH 2024 Grand Finalist for Legal Chatbot; Google Cloud workshop leader",
    ],
  },

  // Skills
  skills: {
    fullstack: ["React", "React Native", "TypeScript", "Node.js", "Python", "Flask", "Express", "REST APIs"],
    tools: ["Git/GitHub", "Docker", "Google Cloud", "VS Code", "Jupyter Notebook", "Android Studio"],
    soft: ["Problem Solving", "AI Product Thinking", "Mentorship","Quick Learner", "Collaboration", "Technical Communication"],
    ai: [
      "Deep Learning",
      "Natural Language Processing",
      "Model Fine-tuning",
      "Hugging Face Transformers",
      "PyTorch",
      "TensorFlow",
      "LangChain",
      "LangGraph"
    ],
  },

  // Projects
  projects: [
    {
      id: 1,
      title: "Mental Health Chat-bot",
      description:
        "AI-powered chatbot trained on 5,000+ therapy transcripts using fine-tuned LLaMA models. Achieved 87% emotion classification accuracy with sub-1.5s response time via optimized Python pipelines.",
      image: mentalHealth.src,
      technologies: ["Python", "Transformers", "Flask", "LLaMA", "Jupyter"],
      liveUrl: "https://colab.research.google.com/drive/1xKoMtu08-0X5AyPoIutZUsa76sG0wgWr?usp=sharing",
      githubUrl: "https://github.com/arpit-chakraborty",
      featured: true,
    },
    {
      id: 2,
      title: "NyaayVeer (SIH 2024)",
      description:
        "Legal AI mobile app that analyzes FIRs and maps them to BNS sections with 98% accuracy. Combines XGBoost and Random Forest in an ensemble pipeline, integrated with React Native and Flask.",
      image: nyaayveer.src,
      technologies: ["Python", "XGBoost", "Random Forest", "Flask", "React Native"],
      liveUrl: "https://github.com/team-sankalp/nyaayveer/releases/tag/v1.0.0-beta",
      githubUrl: "https://github.com/team-sankalp/nyaayveer",
      featured: true,
    },
  ],

  // Experience
  experience: [
    {
      company: "Palisadoes (Remote)",
      position: "React Full Stack Developer",
      duration: "Dec 2024 - Feb 2025",
      description:
        "Improved UI and testing infrastructure for Talawa platform. Reduced UI defects by 42% and improved reliability through 57% test coverage uplift.",
    },
    {
      company: "Code Bird (On-site Burdwan)",
      position: "Executive Member",
      duration: "Feb 2024 - Present",
      description:
        "Led coding events and mentorship initiatives for 300+ students. Elevated coding culture through AI/ML workshops and peer learning sessions.",
    },
    {
      company: "Google Cloud (On-site Kolkata)",
      position: "Volunteer",
      duration: "May 2025",
      description:
        "Conducted Compute Engine labs for 100+ learners. Reduced query handling time by 30% and showcased cloud-deployed ML demos to engage participants.",
    },
  ],

  // Contact
  contact: {
    title: "Let's Collaborate on AI, ML & Web Solutions",
    description: "Open to research-based internships, startup projects, and freelance opportunities in AI/ML and full-stack development.",
    availability: "Available for part-time AI research and freelance development",
  },
}
