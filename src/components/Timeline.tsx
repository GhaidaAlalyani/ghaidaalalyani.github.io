import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faGraduationCap, faPenNib } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'
 
function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <div className="section-header">
          <span className="section-tag">My Journey</span>
          <h1>Experience & Education</h1>
        </div>
        <VerticalTimeline>
 
          <VerticalTimelineElement
            className="vertical-timeline-element--edu"
            contentStyle={{ background: 'rgba(80,0,202,0.1)', color: 'inherit', border: '1px solid rgba(80,0,202,0.35)', borderRadius: '12px' }}
            contentArrowStyle={{ borderRight: '7px solid rgba(80,0,202,0.35)' }}
            date="August 2022"
            iconStyle={{ background: '#5000ca', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">Joined University — AI Major</h3>
            <h4 className="vertical-timeline-element-subtitle">Princess Nourah Bint Abdulrahman University · Riyadh</h4>
            <p>
              Began B.Sc. in Artificial Intelligence, diving into Machine Learning, Deep Learning, 
              Computer Vision, NLP, and Agentic AI.
            </p>
          </VerticalTimelineElement>
 
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgba(0,210,150,0.07)', color: 'inherit', border: '1px solid rgba(0,210,150,0.25)', borderRadius: '12px' }}
            contentArrowStyle={{ borderRight: '7px solid rgba(0,210,150,0.25)' }}
            date="September 2024"
            iconStyle={{ background: '#00d296', color: '#0d1116' }}
            icon={<FontAwesomeIcon icon={faPenNib} />}
          >
            <h3 className="vertical-timeline-element-title">Technology Content Writer</h3>
            <h4 className="vertical-timeline-element-subtitle">HashPlus · Riyadh, Saudi Arabia</h4>
            <p>
              Created and published technology focused content, translating AI and tech 
              concepts into clear, engaging articles for a broader audience.
            </p>
          </VerticalTimelineElement>
 
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgba(0,210,150,0.07)', color: 'inherit', border: '1px solid rgba(0,210,150,0.25)', borderRadius: '12px' }}
            contentArrowStyle={{ borderRight: '7px solid rgba(0,210,150,0.25)' }}
            date="August 2025"
            iconStyle={{ background: '#00d296', color: '#0d1116' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">AI Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">SWARM Technologies & AI · Riyadh, Saudi Arabia</h4>
            <p>
              Developed and analyzed vision based AI solutions · 
              Strengthened problem solving and teamwork in a professional environment.
            </p>
          </VerticalTimelineElement>
 
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgba(0,210,150,0.07)', color: 'inherit', border: '1px solid rgba(0,210,150,0.25)', borderRadius: '12px' }}
            contentArrowStyle={{ borderRight: '7px solid rgba(0,210,150,0.25)' }}
            date="January 2026"
            iconStyle={{ background: '#00d296', color: '#0d1116' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Cooperative Training</h3>
            <h4 className="vertical-timeline-element-subtitle">Saudi Aramco · Riyadh, Saudi Arabia</h4>
            <p>
              Integrated AI into business processes · Evaluated image enhancement models and built prototype UI · 
              Preprocessed satellite imagery datasets · Developed unsupervised autoencoder for change detection.
            </p>
          </VerticalTimelineElement>
 
          <VerticalTimelineElement
            className="vertical-timeline-element--edu"
            contentStyle={{ background: 'rgba(80,0,202,0.1)', color: 'inherit', border: '1px solid rgba(80,0,202,0.35)', borderRadius: '12px' }}
            contentArrowStyle={{ borderRight: '7px solid rgba(80,0,202,0.35)' }}
            date="May 2026"
            iconStyle={{ background: '#5000ca', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">Graduated 🎓</h3>
            <h4 className="vertical-timeline-element-subtitle">Princess Nourah Bint Abdulrahman University · Riyadh</h4>
            <p>
              Earned B.Sc. in Artificial Intelligence with GPA <strong>4.99 / 5.00</strong> · 
              Specializations in Machine Learning, Deep Learning, Computer Vision, NLP, and Agentic AI.
            </p>
          </VerticalTimelineElement>
 
        </VerticalTimeline>
      </div>
    </div>
  );
}
 
export default Timeline;