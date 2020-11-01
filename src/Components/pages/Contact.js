import React from 'react';


import '../../style/Contact.css'

const Contact  = () => {
  
  return(
    <div className="contact">
      <div className="contact-info">
        <div className="card">
          <i className="envelope icon"></i>
          <div className ="card-content">
            <h3>Email</h3>
            <span>Dejodev@outlook.com</span>
          </div>
        </div>

        <div className="card">
          <i className="phone icon"></i>
          <div className ="card-content">
            <h3>Phone</h3>
            <span>+234 810 1841 835</span>
          </div>
        </div>

        <div className="card">
          <i className="location arrow icon"></i>
          <div className ="card-content">
            <h3>Location</h3>
            <span>Lekki, Lagos</span>
          </div>
        </div>
      </div>
    </div>
  )
}



export default Contact;
