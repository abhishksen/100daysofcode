import React, { useEffect } from 'react'

const Child = ({ returnComment }) => {
    useEffect(() => {
        console.log("function called")
    },[returnComment]);
    return (
        <div>
            child component <br />
            {returnComment("abhishek")}
        </div>
    )
}

export default Child
