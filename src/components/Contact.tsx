import React, { useRef, useState } from 'react';
import '../assets/styles/Contact.scss';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import LocationOnIcon from '@mui/icons-material/LocationOn';

function Contact() {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [nameError, setNameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<boolean>(false);

  const form = useRef();

  const sendEmail = (e: any) => {
    e.preventDefault();
    setNameError(name === '');
    setEmailError(email === '');
    setMessageError(message === '');
  };

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact-layout">
          <div className="contact-info">
            <div className="section-header">
              <span className="section-tag">Get in Touch</span>
              <h1>Let's Build Something Intelligent</h1>
              <p>I'm open to collaborations, research projects, and full-time opportunities in AI. Feel free to reach out!</p>
            </div>
            <div className="contact-details">
              <a href="mailto:ghaidaalalyani@gmail.com" className="contact-detail-item">
                <div className="detail-icon"><EmailIcon /></div>
                <div>
                  <span className="detail-label">Email</span>
                  <span className="detail-value">ghaidaalalyani@gmail.com</span>
                </div>
              </a>
              <a href="tel:+966501937843" className="contact-detail-item">
                <div className="detail-icon"><PhoneIcon /></div>
                <div>
                  <span className="detail-label">Phone</span>
                  <span className="detail-value">+966 50 193 7843</span>
                </div>
              </a>
              <div className="contact-detail-item">
                <div className="detail-icon"><LocationOnIcon /></div>
                <div>
                  <span className="detail-label">Location</span>
                  <span className="detail-value">Riyadh, Saudi Arabia 🇸🇦</span>
                </div>
              </div>
              <a href="https://linkedin.com/in/ghaidaalalyani" target="_blank" rel="noreferrer" className="contact-detail-item">
                <div className="detail-icon"><LinkedInIcon /></div>
                <div>
                  <span className="detail-label">LinkedIn</span>
                  <span className="detail-value">linkedin.com/in/ghaidaalalyani</span>
                </div>
              </a>
              <a href="https://github.com/GhaidaAlalyani" target="_blank" rel="noreferrer" className="contact-detail-item">
                <div className="detail-icon"><GitHubIcon /></div>
                <div>
                  <span className="detail-label">GitHub</span>
                  <span className="detail-value">github.com/GhaidaAlalyani</span>
                </div>
              </a>
            </div>
          </div>
          <div className="contact_wrapper">
            <Box
              ref={form}
              component="form"
              noValidate
              autoComplete="off"
              className='contact-form'
            >
              <div className='form-flex'>
                <TextField
                  required
                  label="Your Name"
                  placeholder="What's your name?"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  error={nameError}
                  helperText={nameError ? "Please enter your name" : ""}
                />
                <TextField
                  required
                  label="Email / Phone"
                  placeholder="How can I reach you?"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  error={emailError}
                  helperText={emailError ? "Please enter your email or phone number" : ""}
                />
              </div>
              <TextField
                required
                label="Message"
                placeholder="Tell me about your project or opportunity"
                multiline
                rows={8}
                className="body-form"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                error={messageError}
                helperText={messageError ? "Please enter the message" : ""}
              />
              <Button variant="contained" endIcon={<SendIcon />} onClick={sendEmail}>
                Send Message
              </Button>
            </Box>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
