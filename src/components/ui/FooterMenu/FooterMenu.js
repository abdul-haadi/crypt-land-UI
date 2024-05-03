import React from 'react'
import './FooterMenu.css'

const FooterMenu = ({title, menus}) => {
  return (
    <div className='footer-menus-section'>
        <div className='footer-menus-title'>{title}</div>
        <div className='footer-menus'>
        {
            menus.map((val, index) => {
                return <span key={index}>{val}</span>
            })
        }
        </div>
    </div>
  );
};

export default FooterMenu