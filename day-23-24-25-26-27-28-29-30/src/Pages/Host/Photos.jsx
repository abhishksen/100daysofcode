import React from 'react'
import { useOutletContext } from 'react-router-dom'

const Photos = () => {
  const { van } = useOutletContext();
  return (
    <div className='sudo-info'>
      <img src={van.imageUrl} alt={`van-detail-${van.name}`} />
    </div>
  )
}

export default Photos
