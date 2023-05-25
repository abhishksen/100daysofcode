import React from 'react'
import CardImg from '../../public/assets/card-img.jpg'

const Card = (props) => {

  // console.log(props)

  return (
    <div className='card-container'>
      <div className='card-tag'>SOLD OUT</div>
      <img src={props.img} alt="card-img" className="card-img" />
      <p className="rating">⭐ {props.rating} <span> ({props.stars}) {props.loc}</span></p>
      <p className="card-title">{props.title}</p>
      <h3 className="price">From ${props.price} <span> / person</span></h3>
    </div>
  )
}

export default Card
