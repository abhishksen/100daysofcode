import React, { createContext, useState } from 'react'
import Login from './Login'
import User from './User'

export const AppContext = createContext(null);

const UseContext = () => {

    const [username, setUsername] = useState("");

    return (
        <AppContext.Provider value={{ username, setUsername }}>
            useContext hook
            <Login />
            <User />
        </AppContext.Provider>
    )
}

export default UseContext
