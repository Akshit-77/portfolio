import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <h1>Welcome, I'm Your Name</h1>
        <p>Full Stack Developer | Problem Solver | Tech Enthusiast</p>
      </section>
      
      <section className="about">
        <h2>About Me</h2>
        <p>
          I'm a passionate developer with experience in building modern web applications.
          I specialize in React, Node.js, and cloud technologies.
        </p>
      </section>
      
      <section className="skills">
        <h2>Skills</h2>
        <div className="skills-grid">
          <div className="skill">React</div>
          <div className="skill">Node.js</div>
          <div className="skill">JavaScript</div>
          <div className="skill">Python</div>
          <div className="skill">AWS</div>
          <div className="skill">Docker</div>
        </div>
      </section>
    </div>
  );
};

export default Home; 