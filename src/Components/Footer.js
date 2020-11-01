import React from 'react';

import '../style/Footer.css'


const Footer = () => {
  const year = new Date().getFullYear()


  return(
    <div className="footer">
      <div className="inner-footer">
        <div className="copy">
          <p>© {year} Dejodev</p>
        </div>
      </div>
    </div>
  )
}

export default Footer;