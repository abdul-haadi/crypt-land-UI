import React from 'react'
import './Services.css'

const Services = ({image,title, desc}) => {
  return (
    <div className='services-sect'>
        <img src={image} className='service-image'></img>
        <div className='service-title'>{title} </div>
        <div className='service-description'>{desc} </div>
        <button className='service-btn'>Get start for free</button>
    </div>
  )
}

export default Services