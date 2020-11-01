import React from 'react';
import '../style/Header.css';



const Header = () => {
  return (
    <div>
      <div className="head">
         <div className="body text-box" >
          <h1 className="heading-primary">
            <span className="heading-primary-main">Hello</span><br/>
            <span className="heading-primary-sub">Let me create your website</span>
          </h1>
          <a href="http://localhost:3000/contact" className="btn btn-green btn-animated">Get free quote</a>
        </div>
      </div>
    </div>
  )
};

export default Header;