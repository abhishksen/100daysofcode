import React from 'react'

const content = () => {
    return (
        <div className='content'>
            <h1 className="title">Abhishek Sen <span>(React | UI/Ux)</span></h1>
            <div className="main">
                <button className='btn'>Portfolio</button>
                <button className='btn color'>Resume</button>
            </div>
            <div className="box">
                <h3>About Me</h3>
                <p>Hello there! My name is Abhishek Sen.
                    A computer science and engineering student
                    from Bokaro Steel City, Jharkhand. I am a software developer and tech enthusiast.</p>
            </div>
            <div className="box">
                <h3>My Skills</h3>
                <p>React JS, JavaScript, HTML, CSS, Bootstrap,
                    Tailwind CSS, Material UI, Node JS, Java,
                    Data Structures, Algorithms, etc</p>
            </div>
        </div>
    )
}

export default content
