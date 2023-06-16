import React, { useState } from 'react'

const Button = (props) => {
    const [toggle, setToggle] = useState(false);
    return (
        <div>
            <button
                onClick={() => {
                    setToggle(!toggle)
                }}
            >
                Button from child
            </button>
            {toggle && <span>Toggle</span>}
        </div>
    )
}

export default Button
