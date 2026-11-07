
import React, { useState } from "react";
import "./server.css";
import {
  FaCode, FaMobileAlt, FaPaintBrush, FaCloud,
  FaArrowRight, FaBars, FaTimes, FaCheckCircle,
  FaGithub, FaLinkedin, FaEnvelope
} from "react-icons/fa";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const services = [
    { icon: <FaCode />, title: "Web Development", text: "Modern, fast and responsive websites for your business." },
    { icon: <FaMobileAlt />, title: "App Development", text: "Smart digital applications for everyday needs." },
    { icon: <FaPaintBrush />, title: "UI/UX Design", text: "Beautiful and user-friendly digital experiences." },
    { icon: <FaCloud />, title: "Cloud Solutions", text: "Reliable and scalable technology solutions." }
  ];

  const projects = [
    { title: "Restaurant Website", type: "Web Development", icon: "🍽️", color: "project-one" },
    { title: "Task Manager App", type: "React Application", icon: "📋", color: "project-two" },
    { title: "KBC Quiz Website", type: "JavaScript Project", icon: "🏆", color: "project-three" }
  ];

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
    e.target.reset();
  }

  return (
    <div className="website">

    
      <nav className="navbar">
        <a href="#home" className="logo">
          <span className="logo-icon">N</span>
          <span>Nexora<small>Technologies</small></span>
        </a>

        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        <div className={`nav-links ${menuOpen ? "active" : ""}`}>
          {["Home", "About", "Services", "Projects", "Contact"].map(item => (
            <a key={item} href={`#${item.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}>
              {item}
            </a>
          ))}
          <a href="#contact" className="nav-button" onClick={() => setMenuOpen(false)}>
            Get Started <FaArrowRight />
          </a>
        </div>
      </nav>

    
      <section className="hero" id="home">
        <div className="hero-content">
          <span className="tag">WELCOME TO NEXORA TECHNOLOGIES</span>

          <h1>
            Innovative Ideas.<br />
            Powerful <span>Solutions.</span>
          </h1>

          <p>
            We build modern web applications and digital
            experiences that help businesses grow.
            Let's turn your ideas into reality.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="primary-btn">
              Explore Our Work <FaArrowRight />
            </a>
            <a href="#about" className="secondary-btn">
              Discover More
            </a>
          </div>

          <div className="hero-note">
            <FaCheckCircle /> Creative ideas. Smart technology.
          </div>
        </div>

        <div className="hero-visual">
          <div className="visual-circle"></div>
          <div className="floating-card card-top">⚛️ React.js</div>

          <div className="laptop">
            <div className="laptop-top">
              <div className="dots">● ● ●</div>
              <div className="code-content">
                <span>const</span> website = {"{"}<br />
                &nbsp; design: <b>"Modern"</b>,<br />
                &nbsp; technology: <b>"React"</b>,<br />
                &nbsp; future: <b>"Innovation"</b><br />
                {"}"};
              </div>
              <div className="laptop-symbol">&lt;/&gt;</div>
            </div>
            <div className="laptop-base"></div>
          </div>

          <div className="floating-card card-bottom">🚀 Innovation</div>
        </div>
      </section>

      
      <section className="section services" id="services">
        <div className="section-heading">
          <span>WHAT WE DO</span>
          <h2>Our <b>Services</b></h2>
          <p>Smart solutions to help your business move forward.</p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={service.title}>
              <div className="service-icon">{service.icon}</div>
              <span className="service-number">0{index + 1}</span>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
              <a href="#contact">Learn More <FaArrowRight /></a>
            </div>
          ))}
        </div>
      </section>

  
      <section className="section about" id="about">
        <div className="about-visual">
          <div className="about-image">
            <span>BUILD</span>
            <strong>Something<br />Amazing.</strong>
            <small>IDEAS INTO DIGITAL REALITY</small>
          </div>
          <div className="experience-box">
            <strong>100%</strong>
            <span>Focus on Quality</span>
          </div>
        </div>

        <div className="about-content">
          <span className="tag">ABOUT OUR COMPANY</span>
          <h2>Technology That Makes a <span>Difference.</span></h2>
          <p>
            Nexora Technologies is a digital solutions company
            focused on creating modern, useful and user-friendly
            digital experiences.
          </p>
          <p>
            We believe in creative thinking, clean development
            and technology that solves real-world problems.
          </p>

          <div className="about-points">
            <p><FaCheckCircle /> Modern Technology</p>
            <p><FaCheckCircle /> Creative Solutions</p>
            <p><FaCheckCircle /> User-Focused Design</p>
            <p><FaCheckCircle /> Quality Development</p>
          </div>

          <a href="#contact" className="primary-btn">
            Let's Connect <FaArrowRight />
          </a>
        </div>
      </section>

      
      <section className="section projects" id="projects">
        <div className="section-heading">
          <span>OUR PORTFOLIO</span>
          <h2>Featured <b>Projects</b></h2>
          <p>A selection of web projects and digital experiences.</p>
        </div>

        <div className="projects-grid">
          {projects.map(project => (
            <div className="project-card" key={project.title}>
              <div className={`project-preview ${project.color}`}>
                <span>{project.icon}</span>
                <strong>{project.title}</strong>
              </div>
              <div className="project-info">
                <div>
                  <h3>{project.title}</h3>
                  <p>{project.type}</p>
                </div>
                <a href="#contact" aria-label={`Discuss ${project.title}`}>
                  <FaArrowRight />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      
      <section className="why-us">
        <div>
          <span className="tag">WHY CHOOSE US</span>
          <h2>Let's Build Something <span>Great Together.</span></h2>
          <p>
            We combine design, technology and creativity
            to create meaningful digital experiences.
          </p>
        </div>
        <a href="#contact" className="primary-btn">
          Start a Project <FaArrowRight />
        </a>
      </section>

      
      <section className="section contact" id="contact">
        <div className="section-heading">
          <span>GET IN TOUCH</span>
          <h2>Let's Start a <b>Conversation</b></h2>
          <p>Have an idea? We'd love to hear from you.</p>
        </div>

        <div className="contact-container">
          <div className="contact-info">
            <h3>Let's talk about your project.</h3>
            <p>Send us a message and let's create something useful together.</p>
            <div><FaEnvelope /> hello@nexoratechnologies.com</div>
            <div><FaGithub /> GitHub</div>
            <div><FaLinkedin /> LinkedIn</div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <input type="text" placeholder="Subject" required />
            <textarea placeholder="Tell us about your project..." rows="5" required></textarea>
            <button type="submit" className="primary-btn">
              Send Message <FaArrowRight />
            </button>
            {submitted && <p className="success-message">Demo form submitted successfully!</p>}
          </form>
        </div>
      </section>

      
      <footer className="footer">
        <a href="#home" className="logo footer-logo">
          <span className="logo-icon">N</span>
          <span>Nexora<small>Technologies</small></span>
        </a>
        <p>Building better digital experiences through technology.</p>
        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="footer-bottom">
          © 2026 Nexora Technologies. All rights reserved.
        </div>
      </footer>

    </div>
  );
}

export default App;
