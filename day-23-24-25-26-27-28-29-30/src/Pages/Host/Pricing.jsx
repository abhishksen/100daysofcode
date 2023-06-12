import React from 'react'
import { useOutletContext } from 'react-router-dom'

const Pricing = () => {
  const { van } = useOutletContext();
  return (
    <div className='sudo-info'>
      <h3>${van.price}/day</h3>
    </div>
  )
}

export default Pricing
