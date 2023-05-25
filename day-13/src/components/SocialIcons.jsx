import React from 'react'
import { BsFacebook, BsLinkedin, BsInstagram, BsTwitter } from 'react-icons/bs'
const SocialIcons = () => {
  return (
    <ul className='icon-container'>
      <li className='icons'><a href=""><BsLinkedin /></a></li>
      <li className='icons'><a href=""><BsTwitter /></a></li>
      <li className='icons'><a href=""><BsInstagram /></a></li>
      <li className='icons'><a href=""><BsFacebook /></a></li>
    </ul>
  )
}

export default SocialIcons
