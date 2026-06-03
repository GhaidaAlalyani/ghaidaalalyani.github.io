import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
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
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgba(0,210,150,0.07)', color: 'inherit', border: '1px solid rgba(0,210,150,0.25)', borderRadius: '12px' }}
            contentArrowStyle={{ borderRight: '7px solid rgba(0,210,150,0.25)' }}
            date="Jan 2026 – Mar 2026"
            iconStyle={{ background: '#00d296', color: '#0d1116' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Cooperative Training</h3>
            <h4 className="vertical-timeline-element-subtitle">Saudi Aramco · Riyadh, Saudi Arabia</h4>
            <p>
              Integrated AI into business processes · Built image enhancement prototype UI · 
              Preprocessed satellite imagery datasets · Developed unsupervised autoencoder for change detection
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgba(0,210,150,0.07)', color: 'inherit', border: '1px solid rgba(0,210,150,0.25)', borderRadius: '12px' }}
            contentArrowStyle={{ borderRight: '7px solid rgba(0,210,150,0.25)' }}
            date="Aug 2025 – Sep 2025"
            iconStyle={{ background: '#00d296', color: '#0d1116' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">AI Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">SWARM Technologies & AI · Riyadh, Saudi Arabia</h4>
            <p>
              Developed and analyzed vision-based AI solutions · Solved technical challenges · 
              Strengthened problem-solving and teamwork in a professional environment
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--edu"
            contentStyle={{ background: 'rgba(80,0,202,0.1)', color: 'inherit', border: '1px solid rgba(80,0,202,0.35)', borderRadius: '12px' }}
            contentArrowStyle={{ borderRight: '7px solid rgba(80,0,202,0.35)' }}
            date="Aug 2022 – Jun 2026"
            iconStyle={{ background: '#5000ca', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">B.Sc. in Artificial Intelligence</h3>
            <h4 className="vertical-timeline-element-subtitle">Princess Nourah Bint Abdulrahman University · Riyadh</h4>
            <p>
              GPA: <strong>4.99 / 5.00</strong> · Expected Graduation: June 2026 · 
              Specializations in Deep Learning, Computer Vision, NLP, and Agentic AI
            </p>
          </VerticalTimelineElement>

        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
