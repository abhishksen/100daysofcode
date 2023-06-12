import React from 'react'
import { useOutletContext } from 'react-router-dom'

const Info = () => {
    const { van } = useOutletContext();
    return (
        <div className='sudo-info'>
            <h3>Name: <span className='normal' >{van.name}</span></h3>
            <h3>Category: <span className='normal' >{van.type}</span></h3>
            <p>{van.description}</p>
        </div>
    )
}

export default Info
