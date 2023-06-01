import React from 'react'

const Die = ({ value, isHeld, holdDice }) => {

    const dieStyle = {
        backgroundColor: isHeld ? '#3eff82' : '#fff'
    }

    return (
        <div
            className='die'
            style={dieStyle}
            onClick={holdDice}
        >
            <h3>{value}</h3>
        </div>
    )
}

export default Die
