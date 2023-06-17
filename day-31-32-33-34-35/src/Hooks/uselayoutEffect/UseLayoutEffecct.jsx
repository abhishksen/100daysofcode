import { useEffect, useLayoutEffect, useRef } from 'react'

const UseLayoutEffecct = () => {

    const inputRef = useRef(null);

    useLayoutEffect(() => {
        console.log(inputRef.current.value);
    }, []);

    useEffect(() => {
        inputRef.current.value = "Abhishek";
    }, [])

    return (
        <div>
            <input type="text" value="Abhi" ref={inputRef} />
        </div>
    )
}

export default UseLayoutEffecct
