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
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import emailjs from '@emailjs/browser';

const EMAILJS_SERVICE_ID  = 'service_uyrnt8j'; 
const EMAILJS_TEMPLATE_ID = 'template_5y6gohd'; 
const EMAILJS_PUBLIC_KEY  = 'iGggkUh2UR9m-8KWK';

function Contact() {
  const [name, setName]       = useState('');
  const [email, setEmail]     = useState('');
  const [message, setMessage] = useState('');

  const [nameError, setNameError]       = useState(false);
  const [emailError, setEmailError]     = useState(false);
  const [messageError, setMessageError] = useState(false);

  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.MouseEvent) => {
  e.preventDefault();

  const hasNameError    = name.trim() === '';
  const hasEmailError   = email.trim() === '';
  const hasMessageError = message.trim() === '';

  setNameError(hasNameError);
  setEmailError(hasEmailError);
  setMessageError(hasMessageError);

  if (hasNameError || hasEmailError || hasMessageError) return;

  setStatus('sending');

  if (form.current) {
    emailjs
      .sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, form.current, EMAILJS_PUBLIC_KEY)
      .then(() => {
        setStatus('success');
        setName('');
        setEmail('');
        setMessage('');
      })
      .catch((err) => {
        console.error("EmailJS Error details:", err); // Lets us log explicit structural reasons if it breaks
        setStatus('error');
      });
  }
};

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact-layout">

          {/* ── Left: info ── */}
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

          {/* ── Right: form ── */}
          <div className="contact_wrapper">
            <Box ref={form} component="form" className="contact-form">
              <div className="form-flex">
                <TextField
                  required
                  name="name"
                  label="Your Name"
                  placeholder="What's your name?"
                  value={name}
                  onChange={(e) => { setName(e.target.value); setNameError(false); }}
                  error={nameError}
                  helperText={nameError ? 'Please enter your name' : ''}
                />
                <TextField
                  required
                  name="email"
                  label="Email"
                  placeholder="How can I reach you?"
                  value={email}
                  onChange={(e) => { setEmail(e.target.value); setEmailError(false); }}
                  error={emailError}
                  helperText={emailError ? 'Please enter your email address' : ''}
                />
              </div>

              <TextField
                required
                name="message"
                label="Message"
                placeholder="Tell me about your project or opportunity"
                multiline
                rows={8}
                className="body-form"
                value={message}
                onChange={(e) => { setMessage(e.target.value); setMessageError(false); }}
                error={messageError}
                helperText={messageError ? 'Please enter a message' : ''}
              />

              {/* Status feedback */}
              {status === 'success' && (
                <div className="form-status form-status--success">
                  <CheckCircleOutlineIcon />
                  <span>Message sent! I'll get back to you soon.</span>
                </div>
              )}
              {status === 'error' && (
                <div className="form-status form-status--error">
                  <ErrorOutlineIcon />
                  <span>Something went wrong. Please try again or email me directly.</span>
                </div>
              )}

              <Button
                variant="contained"
                endIcon={<SendIcon />}
                onClick={sendEmail}
                disabled={status === 'sending'}
              >
                {status === 'sending' ? 'Sending…' : 'Send Message'}
              </Button>
            </Box>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Contact;