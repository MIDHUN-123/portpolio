import React from 'react'
import './Home.css';
import { FaGithub,FaLinkedin,FaInstagram,FaEnvelope } from 'react-icons/fa';
const Home = () => {
  return (
    <div className='home' id='home'>
      <div className='home-container'>
       <p className='hello'>Hi I'm</p>
       <h1>Mithun</h1>
       <h2>MERN Stack Developer</h2>
       <p className='home-description'>
        I build modern, responsive and user-friendly web applications
          using React, Node.js, Express and MongoDB.
       </p>
        <div className='home-button'>

  <a href='#projects' className='wrk-btn'>
    View My Work
  </a>

  <a
    href='/Mithun%20N.pdf'
   download="Mithun-N-CV.pdf"
    className='resume-btn'
  >
    Download CV
  </a>

</div>
        <div  className='social-icons'>
          <a href='https://github.com/MIDHUN-123' >
            <FaGithub />
            </a>
            <a href='https://www.linkedin.com/in/mithun-n-6bb659210/' >
            <FaLinkedin />
            </a>
            <a href='https://drive.google.com/file/d/1lN2hjVQYckKCZip3sBjmX-qHIi56qJJn/view?usp=drive_link' target='_blank' rel='noreferrer' >
            <FaInstagram />
            </a>
            <a href='mailto:mithunchulika@gmail.com' >
            <FaEnvelope />
            </a>
        </div>

      </div>
      <div className='home-imge'>
        <div className='img-circle'>
          <img src='resume pic.jpg' alt='ProfilePic'/>

        </div>
      </div>

    </div>
  )
}

export default Home