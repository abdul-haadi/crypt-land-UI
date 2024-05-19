import React, { useState } from "react";
import start from './start.png';
import menubar from './menubar.png';
import "./navigation.css";
import { NavLink } from "react-router-dom";

const Navigation = () => {
    const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="start-navigation">
      <div className="start-navbar">
        <div className="start-logo">
          <img src={start}></img>
        </div>
        <div className={`start-menu ${showMenu ? "show" : ""}`}>
          <NavLink to={'/'} className='navigate'>Home</NavLink>
          <NavLink to={'/portfolio'} className='navigate'>Portfolio</NavLink>
          <NavLink to={'/plan'} className='navigate'>Services</NavLink>
          <NavLink to={'/contact'} className='navigate'>Contact</NavLink>
        </div>
        <div className="hamburger-menu " onClick={() => setShowMenu(!showMenu)}>
          <img src={menubar}></img>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
