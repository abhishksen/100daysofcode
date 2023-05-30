import React, { useEffect, useState } from "react"
import Navbar from "./components/Navbar"
import Main from "./components/Main"
import './App.css';

export default function App() {

    const [darkMode, setDarkMode] = useState(true);

    function toggleDarkMode() {
        setDarkMode(mode => !mode);
    }

    return (
        <div className="container">
            <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            <Main darkMode={darkMode} />
        </div>
    )
}