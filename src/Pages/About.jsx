import React from 'react';
import {
  FaGraduationCap,
  FaMapMarkerAlt,
  FaHeart
} from 'react-icons/fa';

import './About.css';

const About = () => {
  return (
    <section className="about" id='about'>

      <div className="about-container">

        {/* Left Side */}
        <div className="about-content">

          <p className="about-label">ABOUT ME</p>

          <h1>Who I Am</h1>

          <p className="about-description">
            I'm Mithun, a passionate MERN Stack Developer from India.
            I enjoy building web applications that are clean, scalable
            and user-friendly. I love learning new technologies and
            turning ideas into real projects.
          </p>

          {/* Education */}
          <div className="about-info">

            <div className="info-item">

              <div className="info-icon">
                <FaGraduationCap />
              </div>

              <div>
                <h3>Education</h3>
                <p>
                  B.Sc. Computer Science
                  <br />
                  (2018 - 2021)
                </p>
              </div>

            </div>

            {/* Location */}
            <div className="info-item">

              <div className="info-icon">
                <FaMapMarkerAlt />
              </div>

              <div>
                <h3>Location</h3>
                <p>
                  Wayanad, Kerala
                  <br />
                  (India)
                </p>
              </div>

            </div>

            {/* Interests */}
            <div className="info-item">

              <div className="info-icon">
                <FaHeart />
              </div>

              <div>
                <h3>Interests</h3>
                <p>
                  Coding, Gym, Music, Travel
                  <br />
                  and Technology
                </p>
              </div>

            </div>

          </div>

        </div>


        {/* Right Side - Journey */}
        <div className="journey-card">

          <h2>My Journey</h2>

          <div className="timeline">

            <div className="timeline-item">
              <div className="timeline-dot"></div>

              <div className="timeline-content">
                <span>2018 - 2021</span>
                <p>B.Sc. Computer Science</p>
              </div>
            </div>


            <div className="timeline-item">
              <div className="timeline-dot"></div>

              <div className="timeline-content">
                <span>2021</span>
                <p>
                  Started Web Development
                  <br />
                  (HTML, CSS, JavaScript,php)
                </p>
              </div>
            </div>


            <div className="timeline-item">
              <div className="timeline-dot"></div>

              <div className="timeline-content">
                <span>2025 - 2026</span>
                <p>
                  Node.js, Express, MongoDB
                  <br />
                  (MERN Stack)
                </p>
              </div>
            </div>


            <div className="timeline-item">
              <div className="timeline-dot"></div>

              <div className="timeline-content">
                <span>2025</span>
                <p>
                  Building Projects & Exploring
                  <br />
                  New Technologies
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default About;