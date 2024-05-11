import React from 'react'
import './Accordion.css'
import { useState } from 'react';
import icon from "./icon.svg"

const Accordion = ({title, content, index}) => {
    const [isActive, setIsActive] = useState(false);
  return (
    <div className='accordion-section'>
        <div className='accordion-item' style={{"border-bottom" : index == 6 ? "1px solid #e0e0e0" : "none"}}>
        <div className='accordion-title' >{title}</div>
        <button className='open-btn'  onClick={() => setIsActive(!isActive)} style={{'background-color': isActive ? '#1668E8' : '#F7F7F7', 'rotate': isActive ? '45deg' : null}}><img src={icon} style={{"color":isActive ? "white" : "black"}}></img></button>
        </div>
        {isActive && <div className="accordion-content">{content}</div>}
    </div>
  )
}

export default Accordion