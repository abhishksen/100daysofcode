import React from 'react'
import HeroImg from '../../public/assets/photo-grid.png'

const HeroSection = () => {
  return (
    <div className="container">
    <div className='img-container'>
      <img src={HeroImg} alt="hero-img" className='hero-img' />
    </div>
    <div className="content">
        <h1 className="title">Online Experiences</h1>
        <p className="desc">
           Join unique interactive activities led by one-of-a-kind hosts-all without leaving home 
        </p>
    </div>
    </div>
  )
}

export default HeroSection
