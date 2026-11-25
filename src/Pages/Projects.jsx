import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <section className="projects" id="projects">

      <div className="projects-container">

        <p className="projects-label">MY WORK</p>

        <h1>Featured Projects</h1>

        <p className="projects-description">
          Here are some of the projects I've built while learning and
          working with the MERN stack.
        </p>

        <div className="project-grid">

          {/* Project 1 */}
          <div className="project-card">

            <div className="project-image">
              <img
                src="learnhub.png"
                alt="LearnHub"
              />
            </div>

            <div className="project-content">

              <h2>LearnHub</h2>

              <p>
                An online learning platform with courses, books,
                user authentication and an admin dashboard.
              </p>

              <div className="project-tech">
                <span>Node.js</span>
                <span>Express</span>
                <span>MongoDB</span>
                <span>EJS</span>
              </div>

              <a href="https://github.com/MIDHUN-123" className="project-link" target="_blank" rel="noreferrer">
                View Project →
              </a>

            </div>

          </div>


          {/* Project 2 */}
          <div className="project-card">

            <div className="project-image">
              <img
                src="olx.png"
                alt="Ecommerce Store"
              />
            </div>

            <div className="project-content">
              <h2>OLX - Clone</h2>
              <h2>Ecommerce Store</h2>
              <p>
                A full-stack online store with products, cart,
                payment integration and order management.

              </p>

              <div className="project-tech">
                <span>React</span>
                <span>Node.js</span>
                <span>MongoDB</span>
                <span>Razorpay</span>
              </div>

              <a href="https://github.com/MIDHUN-123" className="project-link" target="_blank" rel="noreferrer">
                View Project →
              </a>

            </div>

          </div>


          {/* Project 3 */}
          <div className="project-card">

            <div className="project-image">
              <img
                src="weather.jpg"
                alt="Weather App"
              />
            </div>

            <div className="project-content">

              <h2>Weather App</h2>

              <p>
                A responsive weather application that displays
                real-time weather information using an API.
              </p>

              <div className="project-tech">
                <span>React</span>
                <span>API</span>
                <span>CSS</span>
              </div>

              <a href="https://github.com/MIDHUN-123" className="project-link" target="_blank" rel="noreferrer">
                View Project →
              </a>

            </div>

          </div>


          {/* Project 4 */}
          <div className="project-card">

            <div className="project-image">
              <img
                src="todo.png"
                alt="Todo App"
              />
            </div>

            <div className="project-content">

              <h2>Todo App</h2>

              <p>
                A simple task management application with add,
                edit, delete and local storage functionality.
              </p>

              <div className="project-tech">
                <span>React</span>
                <span>useState</span>
                <span>LocalStorage</span>
              </div>

              <a href="https://github.com/MIDHUN-123" className="project-link" target="_blank" rel="noreferrer">
                View Project →
              </a>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Projects;