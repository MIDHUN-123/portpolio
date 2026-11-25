import React from 'react';
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
} from 'react-icons/fa';

import './Contact.css';

const Contact = () => {
  return (
    <section className="contact" id="contact">

      <div className="contact-container">

        {/* LEFT SIDE */}
        <div className="contact-content">

          <p className="contact-label">GET IN TOUCH</p>

          <h1>Let's Connect</h1>

          <p className="contact-description">
            Feel free to reach out for collaborations, job opportunities
            or just to say hello!
          </p>


          {/* EMAIL */}
          <div className="contact-info">

            <div className="contact-icon">
              <FaEnvelope />
            </div>

            <div>
              <h3>Email</h3>
              <p>mithunchulika@gmail.com</p>
              <span>I'll reply as soon as possible</span>
            </div>

          </div>


          {/* PHONE */}
          <div className="contact-info">

            <div className="contact-icon">
              <FaPhone />
            </div>

            <div>
              <h3>Phone</h3>
              <p>+91 8590520752</p>
              <span>WhatsApp / Call</span>
            </div>

          </div>


          {/* LOCATION */}
          <div className="contact-info">

            <div className="contact-icon">
              <FaMapMarkerAlt />
            </div>

            <div>
              <h3>Location</h3>
              <p>Wayanad,Kerala</p>
              <span>India</span>
            </div>

          </div>


          {/* SOCIAL ICONS */}
          <div className="contact-socials">

            <a href="https://github.com/MIDHUN-123" aria-label="GitHub">
              <FaGithub />
            </a>

            <a href="https://www.linkedin.com/in/mithun-n-6bb659210/" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>

            <a href="#" aria-label="Instagram">
              <FaInstagram />
            </a>

            <a href="mailto:mithunchulika@gmail.com" aria-label="Email">
              <FaEnvelope />
            </a>

          </div>

        </div>


        {/* RIGHT SIDE - FORM */}
        <div className="contact-form-container">

          <form className="contact-form">

            <div className="form-group">
              <label>Name</label>

              <input
                type="text"
                placeholder="Your name"
              />
            </div>


            <div className="form-group">
              <label>Email</label>

              <input
                type="email"
                placeholder="your@email.com"
              />
            </div>


            <div className="form-group">
              <label>Message</label>

              <textarea
                rows="5"
                placeholder="Share your message..."
              ></textarea>
            </div>


            <button type="submit">
              Send Message
              <span>↗</span>
            </button>

          </form>

        </div>

      </div>


      {/* BOTTOM */}
      <div className="contact-bottom">

        <p>Thanks for visiting! ✨</p>

      </div>

    </section>
  );
};

export default Contact;