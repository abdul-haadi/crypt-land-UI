import React from 'react'
import map from './map.png'
import './ContactPage.css'

const ContactPage = () => {
  return (
    <div className='contact-page'>
        <div className='contact-content'>
            <div className='contact-title'>Contact Us</div>
            <div className='contact-desc'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</div>
        </div>
        <div className='contact-container'>
        <div className='contact-form'>
           <label>Name</label>
           <input type='text'></input>
           <label>Email</label>
           <input type='email'></input>
           <label>Message</label>
           <textarea rows={5} cols={20}></textarea>
           <button className='submit-btn'>Submit</button>
        </div>
        <div>
            <img src={map} className='map-image'></img>
        </div>
        </div>
    </div>
  )
}

export default ContactPage