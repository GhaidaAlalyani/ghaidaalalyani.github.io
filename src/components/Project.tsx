import React from "react";
import '../assets/styles/Project.scss';

const projects = [
  {
    title: "Ghithaei — OCR Nutrition Analyzer",
    partner: "Saudi Food & Drug Authority",
    period: "Sep 2025 – Apr 2026",
    description: "Graduation project: an OCR pipeline that extracts nutritional data from Arabic and English food label images, helping users understand nutrition facts and SFDA regulations.",
    tags: ["OCR", "Arabic NLP", "Computer Vision", "Python"],
    emoji: "🥗",
    featured: true,
    github: "https://github.com/GhaidaAlalyani",
  },
  {
    title: "Unsupervised Autoencoder for Change Detection",
    partner: "Saudi Aramco",
    period: "Feb 2026",
    description: "Developed an unsupervised autoencoder to detect changes in satellite imagery, bypassing the high data and compute requirements of supervised models.",
    tags: ["Autoencoders", "Satellite Imagery", "Deep Learning", "PyTorch"],
    emoji: "🛰️",
    featured: true,
    github: "https://github.com/GhaidaAlalyani",
  },
  {
    title: "Data Analyst Assistant",
    partner: "IBM",
    period: "Jun 2025 – Nov 2025",
    description: "An AI-powered assistant that translates natural language commands into executable Python code, automating data analysis and broadening access to insights for non-technical users.",
    tags: ["Agentic AI", "NLP", "Code Generation", "FastAPI"],
    emoji: "📊",
    featured: false,
    github: "https://github.com/GhaidaAlalyani",
  },
  {
    title: "Toddler Car Seatbelt Detection",
    partner: "SWARM Technologies",
    period: "Aug 2025 – Sep 2025",
    description: "A real-time computer vision system to detect seatbelt usage on toddlers in vehicles, applying machine learning for accurate, fast detection to enhance child safety.",
    tags: ["YOLO", "Object Detection", "Computer Vision", "Safety AI"],
    emoji: "🧒",
    featured: false,
    github: "https://github.com/GhaidaAlalyani",
  },
];

function Project() {
    return(
    <div className="projects-container" id="projects">
        <div className="section-header">
            <span className="section-tag">Portfolio</span>
            <h1>Featured Projects</h1>
            <p className="section-sub">Real-world AI solutions built with industry partners</p>
        </div>
        <div className="projects-grid">
            {projects.map((project, index) => (
                <div key={index} className={`project ${project.featured ? 'project-featured' : ''}`}>
                    <div className="project-header">
                        <div className="project-emoji">{project.emoji}</div>
                        {project.featured && <span className="project-badge">Featured</span>}
                    </div>
                    <div className="project-partner">
                        <span className="partner-label">in collaboration with</span>
                        <span className="partner-name">{project.partner}</span>
                    </div>
                    <h2>{project.title}</h2>
                    <p>{project.description}</p>
                    <div className="project-tags">
                        {project.tags.map((tag, i) => (
                            <span key={i} className="project-tag">{tag}</span>
                        ))}
                    </div>
                    <div className="project-footer">
                        <span className="project-period">📅 {project.period}</span>
                        <a href={project.github} target="_blank" rel="noreferrer" className="project-link">View on GitHub →</a>
                    </div>
                </div>
            ))}
        </div>
    </div>
    );
}

export default Project;
