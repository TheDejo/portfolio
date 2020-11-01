import React from 'react';

import  '../../style/Resume.css';

const Resume = () => {
  return(
    <div className="grid-container">
        <div className="left-section"></div>
          <div className="right-section">
            <div className="basic-information">
              <h1>Divine Ogbe <span>(M.Eng)</span></h1>
              <p>Software Developer</p>
              <a href="https://web.facebook.com/profile.php?id=100011923299964"><i className="facebook icon" /></a>
              <a href="https://www.instagram.com/__fumes/"><i className="instagram icon" /></a>
              <a href="https://twitter.com/Fumes__"><i className="twitter icon" /></a>
              <a href="https://www.linkedin.com/in/divine-ogbe-7a52b9a9/"><i className="linkedin icon" /></a>
            </div>
            <div className="bio">
                <h2>About <span>Me</span></h2>
                <div className="dash"></div> 
                <p><strong>Hello! I am Divine, </strong> 
                Web developer fron Lagos, Nigeria. I am experienced in front-end and back-end website technologies and i will like to talk to you about your unique website</p>
            </div>
              
            <div className="skills">
                <h2>Skills</h2>
                <div className="dash"></div> 
                <ul className="app-icons">
                  <li><i className="html5 icon"/></li> 
                  <li><i className="css3 alternate icon"/></li> 
                  <li><i className="js icon"/></li> 
                  <li><i className="react icon"/></li> 
                  <li><i className="node icon"/></li> 
                  <li><i className="sass icon"/></li>
               </ul> 
            </div>
            
          </div>
    </div>
    
  )
};

export default Resume;