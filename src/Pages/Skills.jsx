import React from 'react';
import {
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGithub,
  FaCode,
  FaBootstrap,
} from 'react-icons/fa';

import {
  SiExpress,
  SiMongodb,
  SiPostman,
  SiRazorpay,
} from 'react-icons/si';

import './Skills.css';

const Skills = () => {

  const technologies = [
    {
      name: 'JavaScript',
      icon: <FaJsSquare />,
      className: 'javascript',
    },
    {
      name: 'React',
      icon: <FaReact />,
      className: 'react',
    },
    {
      name: 'Node.js',
      icon: <FaNodeJs />,
      className: 'node',
    },
    {
      name: 'Express.js',
      icon: <SiExpress />,
      className: 'express',
    },
    {
      name: 'MongoDB',
      icon: <SiMongodb />,
      className: 'mongodb',
    },
    {
      name: 'HTML5',
      icon: <FaHtml5 />,
      className: 'html',
    },
    {
      name: 'CSS3',
      icon: <FaCss3Alt />,
      className: 'css',
    },
    {
      name: 'Git & GitHub',
      icon: <FaGithub />,
      className: 'github',
    },
    {
      name: 'VS Code',
      icon: <FaCode />,
      className: 'vscode',
    },
    {
      name: 'Postman',
      icon: <SiPostman />,
      className: 'postman',
    },
    {
      name: 'Razorpay',
      icon: <SiRazorpay />,
      className: 'razorpay',
    },
    {
      name: 'Bootstrap',
      icon: <FaBootstrap />,
      className: 'bootstrap',
    },
  ];

  const otherSkills = [
    'REST APIs',
    'Authentication (JWT)',
    'Database Management',
    'Problem Solving',
    'Team Collaboration',
    'Responsive Design',
    'Computer Hardware And Networking',
    'Continuous Learning',
  ];

  return (
    <section className="skills" id="skills">

      <div className="skills-container">

        {/* HEADER */}
        <div className="skills-header">
          <p className="skills-label">MY SKILLS</p>

          <h1>Technologies & Tools</h1>

          <p className="skills-description">
            I have experience with the following technologies and tools.
          </p>
        </div>


        {/* TECHNOLOGY CARDS */}
        <div className="technology-grid">

          {technologies.map((technology, index) => (
            <div className="technology-card" key={index}>

              <div className={`technology-icon ${technology.className}`}>
                {technology.icon}
              </div>

              <p>{technology.name}</p>

            </div>
          ))}

        </div>


        {/* OTHER SKILLS */}
        <div className="other-skills">

          <h2>Other Skills</h2>

          <div className="other-skills-grid">

            {otherSkills.map((skill, index) => (
              <div className="other-skill" key={index}>
                <span>●</span>
                <p>{skill}</p>
              </div>
            ))}

          </div>

        </div>

      </div>

    </section>
  );
};

export default Skills;