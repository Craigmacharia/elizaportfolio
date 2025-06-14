import React, { useState, useEffect } from 'react';
import { 
  FaInstagram, FaWhatsapp, FaTiktok, FaEnvelope, 
  FaPlane, FaGlobe, FaSmile, FaArrowDown,
  FaShieldAlt, FaUsers, FaLanguage, FaMedal,
  FaPassport, FaUserTie, FaChalkboardTeacher, FaClock
} from 'react-icons/fa';
import { motion } from 'framer-motion';

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      image: "/ndege.png",
      alt: "Eliza Gathoni in uniform",
      caption: "Professional Air Hostess"
    },
    {
      image: "/hostess.png",
      alt: "Eliza Gathoni serving passengers",
      caption: "Exceptional Customer Service"
    },
    {
      image: "/gathoni0.png",
      alt: "Eliza Gathoni safety demonstration",
      caption: "Safety First Approach"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const skills = [
    { icon: <FaShieldAlt size={20} />, text: "Passenger Safety" },
    { icon: <FaUsers size={20} />, text: "Emergency Procedures" },
    { icon: <FaSmile size={20} />, text: "Customer Service" },
    { icon: <FaLanguage size={20} />, text: "Multilingual" }
  ];

  const experiences = [
    { icon: <FaClock size={20} />, text: "4+ Years Experience" },
    { icon: <FaPassport size={20} />, text: "International Flights" },
    { icon: <FaUserTie size={20} />, text: "VIP Service" },
    { icon: <FaChalkboardTeacher size={20} />, text: "Crew Training" }
  ];

  return (
    <>
      {/* Global Styles */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400;500;600;700&display=swap');
        
        body {
          font-family: 'Comfortaa', cursive;
          color: #e0e0e0;
          line-height: 1.6;
          background-color: #121212;
        }
        h1, h2, h3, h4, h5, h6 {
          font-family: 'Comfortaa', cursive;
          font-weight: 600;
          color: #ffffff;
        }
        .navbar-brand {
          font-family: 'Comfortaa', cursive;
          font-size: 1.8rem;
          font-weight: 700;
        }
        .card {
          background-color: #1e1e1e;
          border: none;
        }
        .border {
          border-color: #333 !important;
        }
        .pink-accent {
          color: #ff9eb7;
        }
        .bg-pink-accent {
          background-color: #ff9eb7;
        }
      `}</style>

      {/* Navbar */}
      <motion.nav 
        className="navbar navbar-expand-lg navbar-dark fixed-top" 
        style={{ 
          backgroundColor: 'rgba(30, 30, 30, 0.98)',
          boxShadow: '0 2px 20px rgba(0, 0, 0, 0.5)',
          borderBottom: '1px solid #333'
        }}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container">
          <a className="navbar-brand fw-bold" href="#" style={{ color: '#ff9eb7' }}>Eliza Gathoni</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <motion.li className="nav-item" whileHover={{ scale: 1.05 }}>
                <a className="nav-link px-3" href="#home" style={{ fontSize: '1.1rem' }}>Home</a>
              </motion.li>
              <motion.li className="nav-item" whileHover={{ scale: 1.05 }}>
                <a className="nav-link px-3" href="#about" style={{ fontSize: '1.1rem' }}>About</a>
              </motion.li>
              <motion.li className="nav-item" whileHover={{ scale: 1.05 }}>
                <a className="nav-link px-3" href="#contact" style={{ fontSize: '1.1rem' }}>Contact</a>
              </motion.li>
            </ul>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section with Slideshow */}
      <section className="hero-section position-relative vh-100 d-flex align-items-center justify-content-center" id="home">
        <div className="slideshow-container">
          {slides.map((slide, index) => (
            <div 
              key={index}
              className={`slide ${index === currentSlide ? 'active' : ''}`}
              style={{ 
                backgroundImage: `url(${slide.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center center',
                backgroundRepeat: 'no-repeat'
              }}
            >
              <div className="overlay" style={{ backgroundColor: 'rgba(18, 18, 18, 0.7)' }}></div>
            </div>
          ))}
        </div>
        
        <motion.div 
          className="hero-content text-white text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.h1 
            className="display-3 fw-bold mb-3" 
            style={{ 
              textShadow: '2px 2px 8px rgba(0,0,0,0.8)',
              color: '#ffffff'
            }}
            animate={{
              scale: [1, 1.02, 1],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            Eliza Gathoni
          </motion.h1>
          <motion.p 
            className="lead fs-4 mb-4" 
            style={{ 
              fontFamily: "'Comfortaa', cursive",
              fontWeight: 500,
              color: '#bbbbbb'
            }}
            animate={{
              opacity: [0.8, 1, 0.8],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            {slides[currentSlide].caption}
          </motion.p>
          <motion.a 
            href="#about" 
            className="btn btn-outline-light btn-lg mt-3 d-flex align-items-center mx-auto"
            style={{ 
              maxWidth: '200px',
              borderColor: '#ff9eb7',
              color: '#ffffff'
            }}
            whileHover={{ 
              scale: 1.05,
              backgroundColor: '#ff9eb7',
              borderColor: '#ff9eb7'
            }}
            whileTap={{ scale: 0.95 }}
          >
            Learn More <FaArrowDown className="ms-2" />
          </motion.a>
        </motion.div>
      </section>

      {/* About Me Section */}
      <motion.section 
        className="container my-5 py-5" 
        id="about"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-10">
            <div className="row align-items-center">
              <div className="col-md-5 mb-4 mb-md-0">
                <motion.div
                  className="position-relative"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src="/gathoni.jpg"
                    alt="Eliza Gathoni"
                    className="img-fluid rounded shadow"
                    style={{ 
                      border: '5px solid #333',
                      boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
                      width: '100%',
                      height: 'auto',
                      maxHeight: '500px'
                    }}
                  />
                  <motion.div 
                    className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
                    style={{ backgroundColor: 'rgba(255, 158, 183, 0.1)' }}
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="text-center p-3">
                      <FaPlane size={40} className="pink-accent mb-2" />
                      <p className="text-white">In-Flight Professional</p>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
              <div className="col-md-7">
                <motion.h2 
                  className="mb-4 fw-bold text-center pink-accent"
                  initial={{ scale: 0.9 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  About Me
                </motion.h2>
                
                <motion.div
                  initial={{ x: -20 }}
                  whileInView={{ x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="d-flex align-items-center mb-3">
                    <FaPlane className="me-3 pink-accent" size={24} />
                    <p className="mb-0">
                      Hi! I'm <strong className="pink-accent">Eliza Gathoni</strong>, a passionate and professional air hostess
                      with over 4 years of experience in the aviation industry.
                    </p>
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ x: -20 }}
                  whileInView={{ x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <div className="d-flex align-items-center mb-3">
                    <FaGlobe className="me-3 pink-accent" size={24} />
                    <p className="mb-0">
                      Fluent in English French and Swahili, I thrive in multicultural environments and love connecting
                      with people from all walks of life.
                    </p>
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ x: -20 }}
                  whileInView={{ x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <div className="d-flex align-items-center mb-3">
                    <FaSmile className="me-3 pink-accent" size={24} />
                    <p className="mb-0">
                      My mission is simple — make every journey as smooth and enjoyable as the destination the client is going.
                    </p>
                  </div>
                </motion.div>
                
                <div className="mt-4">
                  <motion.h5 
                    className="fw-bold text-center mb-3 pink-accent"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    My Skills
                  </motion.h5>
                  <div className="row g-3">
                    {skills.map((skill, index) => (
                      <motion.div 
                        key={index}
                        className="col-md-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                      >
                        <div className="p-3 border rounded d-flex align-items-center" style={{ backgroundColor: '#1e1e1e' }}>
                          <span className="me-3 pink-accent">{skill.icon}</span>
                          <span>{skill.text}</span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                  
                  <motion.h5 
                    className="fw-bold text-center mb-3 mt-4 pink-accent"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    My Experience
                  </motion.h5>
                  <div className="row g-3">
                    {experiences.map((exp, index) => (
                      <motion.div 
                        key={index}
                        className="col-md-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 + 0.4 }}
                      >
                        <div className="p-3 border rounded d-flex align-items-center" style={{ backgroundColor: '#1e1e1e' }}>
                          <span className="me-3 pink-accent">{exp.icon}</span>
                          <span>{exp.text}</span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section 
        className="py-5 text-center" 
        id="contact"
        style={{ backgroundColor: '#1a1a1a' }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container py-5">
          <motion.h2 
            className="mb-4 fw-bold pink-accent"
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            Get In Touch
          </motion.h2>
          <motion.p 
            className="mb-5 lead" 
            style={{ 
              maxWidth: '700px', 
              margin: '0 auto',
              color: '#bbbbbb'
            }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Looking to connect or collaborate? Feel free to reach out through any of these channels!
          </motion.p>
          
          <div className="row justify-content-center g-4">
            <motion.div 
              className="col-md-3 col-sm-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              whileHover={{ y: -5 }}
            >
              <div className="card h-100 border-0" style={{ 
                backgroundColor: '#25D366',
                boxShadow: '0 5px 15px rgba(37, 211, 102, 0.3)'
              }}>
                <div className="card-body">
                  <FaWhatsapp className="mb-3" size={40} />
                  <h5>WhatsApp</h5>
                  <a href="https://wa.me/+254703495240" className="stretched-link"></a>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="col-md-3 col-sm-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="card h-100 border-0" style={{ 
                background: 'linear-gradient(45deg, #405DE6, #5851DB, #833AB4, #C13584, #E1306C, #FD1D1D)',
                boxShadow: '0 5px 15px rgba(64, 93, 230, 0.3)'
              }}>
                <div className="card-body text-white">
                  <FaInstagram className="mb-3" size={40} />
                  <h5>Instagram</h5>
                  <a href="https://instagram.com/tazi.lh" className="stretched-link"></a>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="col-md-3 col-sm-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              whileHover={{ y: -5 }}
            >
              <div className="card h-100 border-0" style={{ 
                backgroundColor: '#000000',
                boxShadow: '0 5px 15px rgba(0, 0, 0, 0.5)'
              }}>
                <div className="card-body">
                  <FaTiktok className="mb-3" size={40} />
                  <h5>TikTok</h5>
                  <a href="https://tiktok.com/@tazilh1" className="stretched-link"></a>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="col-md-3 col-sm-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
              whileHover={{ y: -5 }}
            >
              <div className="card h-100 border-0" style={{ 
                backgroundColor: 'tan',
                boxShadow: '0 5px 15px rgba(255, 158, 183, 0.3)'
              }}>
                <div className="card-body">
                  <FaEnvelope className="mb-3" size={40} />
                  <h5>Email</h5>
                  <a href="mailto:tazilhgathoni@gmail.com" className="stretched-link"></a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="text-center py-4" style={{ 
        backgroundColor: '#121212',
        borderTop: '1px solid #333'
      }}>
        <div className="container">
          <motion.div 
            className="mb-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <a href="https://wa.me/+254703495240" className="text-white mx-2"><FaWhatsapp size={20} /></a>
            <a href="https://instagram.com/@tazi.lh" className="text-white mx-2"><FaInstagram size={20} /></a>
            <a href="https://tiktok.com/@tazilh1" className="text-white mx-2"><FaTiktok size={20} /></a>
            <a href="mailto:tazilhgathoni@gmail.com" className="text-white mx-2"><FaEnvelope size={20} /></a>
          </motion.div>
          <motion.small 
            style={{ color: '#bbbbbb' }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            &copy; {new Date().getFullYear()} Eliza Gathoni. All rights reserved.
          </motion.small>
        </div>
      </footer>

      {/* Styles */}
      <style jsx>{`
        .hero-section {
          overflow: hidden;
        }
        .slideshow-container {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
        .slide {
          position: absolute;
          width: 100%;
          height: 100%;
          background-size: cover;
          background-position: center;
          opacity: 0;
          transition: opacity 1.5s ease-in-out;
        }
        .slide.active {
          opacity: 1;
        }
        .hero-content {
          z-index: 1;
          max-width: 800px;
          margin: 0 auto;
          padding: 0 20px;
        }
        .card {
          transition: all 0.3s ease;
          border-radius: 10px;
        }
        .card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 30px rgba(0,0,0,0.3);
        }
        .nav-link {
          transition: all 0.3s ease;
          position: relative;
        }
        .nav-link:hover {
          color: #ff9eb7 !important;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: 0;
          left: 0;
          background-color: #ff9eb7;
          transition: width 0.3s ease;
        }
        .nav-link:hover::after {
          width: 100%;
        }
      `}</style>
    </>
  );
}

export default Home;