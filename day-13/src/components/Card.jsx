import React from 'react'
import Content from './Content'
import SocialIcons from './SocialIcons'
import img from '../assets/profile.png'
import backgroundImg from '../assets/background.jpg'


const Card = () => {
    return (
        <div className='card'>
            <div className="background">
                <img src={backgroundImg} alt="" />
            </div>
            <img src={img} alt="profile_img" className='profile-img' />
            <Content />
            <SocialIcons />
        </div>
    )
}

export default Card
