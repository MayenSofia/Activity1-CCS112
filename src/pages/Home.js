import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <section className="section">
      <div className="hero-section">
        <h1 className="hero-title">Mayen Sofia T. Mendoza</h1>
        <h2 className="hero-subtitle">3rd Year IT Student | Front-end Developer</h2>
        <p className="lead text-center mb-4">
          Welcome to my portfolio website! I'm passionate about creating clean and intuitive 
          user interfaces with modern web technologies.
        </p>
        <div className="d-flex justify-content-center">
          <Link to="/about" className="btn btn-primary me-3">Learn About Me</Link>
          <Link to="/projects" className="btn btn-primary">View My Projects</Link>
        </div>
      </div>
      
      <div className="row mt-5">
        <div className="col-md-4 mb-4">
          <div className="card h-100">
            <div className="card-body text-center">
              <h3 className="card-title">Frontend Development</h3>
              <p className="card-text">
                Experienced with HTML, CSS, Bootstrap, ReactJS, and JavaScript
              </p>
            </div>
          </div>
        </div>
        
        <div className="col-md-4 mb-4">
          <div className="card h-100">
            <div className="card-body text-center">
              <h3 className="card-title">Backend Knowledge</h3>
              <p className="card-text">
                Familiar with PHP, Laravel, Java, and MySQL
              </p>
            </div>
          </div>
        </div>
        
        <div className="col-md-4 mb-4">
          <div className="card h-100">
            <div className="card-body text-center">
              <h3 className="card-title">UI/UX Design</h3>
              <p className="card-text">
                Passionate about clean UI and intuitive user experience
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;