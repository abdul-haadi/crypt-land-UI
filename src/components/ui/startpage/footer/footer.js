import React from "react";
import socials from './socials.png';
import './footer.css';

const Footer = () => {
  return (
    <div>
      <div className="start-footer-section">
        <div className="start-footer-container">
          <div>
            <img src={socials}></img>
          </div>
          <div>© Start, 2022. All rights reserved.</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
