import React from 'react';

import '../../style/Projects.css';

const Projects = () => {
  return (
    <div className="projects">
      <div className="card">
        <div className="card-image"></div>
        <div className="card-text">
          <h2 className="title">Generator</h2>
          <p>Liinear gradient color generator </p>
        </div>
        <div className="card-links">
          <div className="git">
            <a href="/projects"><i className="github icon" /></a>
          </div>
          <div className="visit border">
            <a href="/projects">Visit project</a>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Projects;