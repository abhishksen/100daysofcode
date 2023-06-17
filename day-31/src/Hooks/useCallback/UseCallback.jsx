import React, { useCallback, useState } from 'react'
import Child from './Child'

const UseCallback = () => {
    const [toggle, setToggle] = useState(false);
    const [data, setData] = useState("Hello there! wassup.")

    const returnComment = useCallback(
        (name) => {
            return data + name;
        });

    return (
        <div>
            useCallback hook
            <Child returnComment={returnComment} />
            <button
                onClick={() => {
                    setToggle(!toggle);
                }}
            >
                Toggle
            </button>
            {toggle && <span>Toggled</span>}
        </div>
    )
}

export default UseCallback
