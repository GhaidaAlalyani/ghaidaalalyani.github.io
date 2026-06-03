import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import '../assets/styles/Main.scss';

function Main() {
  return (
    <div className="container">
      <div className="about-section">
        <div className="particles-bg">
          {Array.from({length: 20}).map((_, i) => (
            <span key={i} className={`particle particle-${i}`}></span>
          ))}
        </div>
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-dot"></span>
            Available for opportunities
          </div>
          <h1 className="hero-name">
            <span className="name-first">Ghaida</span>
            <span className="name-last"> Alalyani</span>
          </h1>
          <div className="hero-title">
            <span className="title-text">Artificial Intelligence Engineer</span>
            <span className="title-accent">✦</span>
          </div>
          <p className="hero-description">
            AI professional specializing in Deep Learning, Computer Vision, NLP, and Agentic AI. 
            Building intelligent systems that make a real-world impact — from satellite imagery analysis 
            to multilingual OCR pipelines.
          </p>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-value">4.99</span>
              <span className="stat-label">GPA / 5.00</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat">
              <span className="stat-value">4+</span>
              <span className="stat-label">AI Projects</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat">
              <span className="stat-value">2×</span>
              <span className="stat-label">Industry Intern</span>
            </div>
          </div>
          <div className="social_icons">
            <a href="https://github.com/GhaidaAlalyani" target="_blank" rel="noreferrer" className="social-link">
              <GitHubIcon/>
              <span>GitHub</span>
            </a>
            <a href="https://linkedin.com/in/ghaidaalalyani" target="_blank" rel="noreferrer" className="social-link">
              <LinkedInIcon/>
              <span>LinkedIn</span>
            </a>
            <a href="mailto:ghaidaalalyani@gmail.com" className="social-link">
              <EmailIcon/>
              <span>Email</span>
            </a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="avatar-ring ring-outer"></div>
          <div className="avatar-ring ring-middle"></div>
          <div className="avatar-ring ring-inner"></div>
          <div className="avatar-container">
            <div className="avatar-placeholder">
              <span className="avatar-initials">GA</span>
            </div>
          </div>
          <div className="orbit orbit-1">
            <div className="orbit-dot"><span>🤖</span></div>
          </div>
          <div className="orbit orbit-2">
            <div className="orbit-dot"><span>👁️</span></div>
          </div>
          <div className="orbit orbit-3">
            <div className="orbit-dot"><span>🧠</span></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
