import React from 'react'
import './PortfolioPage.css';
import one from './one.png'
import two from './two.png'
import three from './three.png'
import four from './four.png'
import five from './five.png'
import six from './six.png'
import seven from './seven.png'
import eight from './eight.png'

const PortfolioPage = () => {
  return (
    <div className='portfolio-page'>
        <div className='portfolio-container'>
        <div className='portfolio-title'>
        Works
        </div>
        <div className='portfolio-header'>
        Portfolio
        </div>
        <div className='portfolio-desc'>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </div>
        </div>
        <div className='portfolio-images'>
        <img src={one}></img>
        <img src={two}></img>
        <img src={three}></img>
        <img src={four}></img>
        <img src={five}></img>
        <img src={six}></img>
        <img src={seven}></img>
        <img src={eight}></img>
        </div>
        <div className='learn-more-btn'>
            <button>Learn More</button>
        </div>
    </div>
  )
}

export default PortfolioPage