import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-name">Ghaida Alalyani</p>
        <p className="footer-tagline">AI Engineer · Riyadh, Saudi Arabia</p>
        <div className="footer-links">
          <a href="https://github.com/GhaidaAlalyani" target="_blank" rel="noreferrer"><GitHubIcon /></a>
          <a href="https://linkedin.com/in/ghaidaalalyani" target="_blank" rel="noreferrer"><LinkedInIcon /></a>
          <a href="mailto:ghaidaalalyani@gmail.com"><EmailIcon /></a>
        </div>
        <p className="footer-copy">© {new Date().getFullYear()} Ghaida Alalyani</p>
      </div>
    </footer>
  );
}

export default Footer;
