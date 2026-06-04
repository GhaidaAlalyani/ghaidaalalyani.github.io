import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBrain, faEye, faRobot } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "Python", "TensorFlow", "Keras", "PyTorch",
    "Scikit-Learn", "OpenCV", "NumPy", "Pandas",
];

const labelsSecond = [
    "OCR Pipelines", "Autoencoders", "CNN", "Object Detection",
    "Image Segmentation", "Transfer Learning", "YOLO",
];

const labelsThird = [
    "NLP", "LLMs", "Agentic AI", "RAG",
    "FastAPI", "Flask", "HuggingFace", "Transformers",
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <div className="section-header">
                <span className="section-tag">What I Do</span>
                <h1>Areas of Expertise</h1>
                <p className="section-sub">Specialized in building intelligent systems across the full AI stack</p>
            </div>
            <div className="skills-grid">
                <div className="skill">
                    <div className="skill-icon-wrapper">
                        <FontAwesomeIcon icon={faBrain} size="2x"/>
                    </div>
                    <h3>Machine Learning & Deep Learning</h3>
                    <p>Designing and training neural network architectures for complex real world tasks, including unsupervised autoencoders, regression models, and classification pipelines on diverse datasets.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <div className="skill-icon-wrapper">
                        <FontAwesomeIcon icon={faEye} size="2x"/>
                    </div>
                    <h3>Computer Vision</h3>
                    <p>Building visual AI systems for image understanding, document analysis, and object detection. Experienced with satellite imagery, food label recognition, and real time seatbelt detection.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <div className="skill-icon-wrapper">
                        <FontAwesomeIcon icon={faRobot} size="2x"/>
                    </div>
                    <h3>NLP & Agentic AI</h3>
                    <p>Building language aware AI systems including multilingual OCR, natural language to code translation, and agentic workflows that automate complex decision making tasks.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;
