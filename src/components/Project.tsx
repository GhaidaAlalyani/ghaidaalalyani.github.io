import React from "react";
import '../assets/styles/Project.scss';

const projects = [
  {
    title: "Ghithaei",
    partner: "Saudi Food & Drug Authority",
    period: "Sep 2025 – Apr 2026",
    description: "Graduation project: an AI powered bilingual (Arabic and English) nutrition assistant that combines OCR technology with an interactive chatbot. The system extracts nutritional data from Arabic and English food label images, analyzes and verifies nutrition facts, and helps users understand relevant SFDA regulations through conversational guidance in either language. Additionally, users can download a structured Excel report containing all extracted and analyzed nutritional information for further review and record keeping.",
    tags: ["OCR", "Arabic NLP", "Computer Vision", "Python"],
    emoji: "🥗",
    featured: true
  },
  {
    title: "Unsupervised Autoencoder for Change Detection",
    partner: "Saudi Aramco",
    period: "Feb 2026",
    description: "Developed an unsupervised autoencoder to detect changes in satellite imagery, bypassing the high data and compute requirements of supervised models.",
    tags: ["Autoencoders", "Satellite Imagery", "Deep Learning", "PyTorch"],
    emoji: "🛰️",
    featured: true
  },
  {
    title: "Data Speak - Data Analyst Assistant",
    partner: "IBM",
    period: "Jun 2025 – Nov 2025",
    description: "An AI powered data assistant that analyzes user provided datasets, automatically generates and executes Python code from natural language prompts, and delivers accurate insights through a conversational chatbot. The system provides dataset exploration, visualizations, and data driven answers, making advanced analytics accessible to both technical and non-technical users.",
    tags: ["Agentic AI", "NLP", "Code Generation", "FastAPI"],
    emoji: "📊",
    featured: true
  },
  {
    title: "Toddler Car Seatbelt Detection",
    partner: "SWARM Technologies",
    period: "Aug 2025 – Sep 2025",
    description: "A real time computer vision system to detect seatbelt usage on toddlers in vehicles, applying machine learning for accurate, fast detection to enhance child safety.",
    tags: ["YOLO", "Object Detection", "Computer Vision", "Safety AI"],
    emoji: "🧒",
    featured: false
  },
];

function Project() {
    return(
    <div className="projects-container" id="projects">
        <div className="section-header">
            <span className="section-tag">Portfolio</span>
            <h1>Featured Projects</h1>
            <p className="section-sub">Real world AI solutions built with industry partners</p>
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
                       
                    </div>
                </div>
            ))}
        </div>
    </div>
    );
}

export default Project;
