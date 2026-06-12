import React from 'react'
import TextType from './TextType'
import './FrontPage.css'

const FrontPage = ({ onContact, onAbout }) => {
    return (
        <div className='frontpage'>
            <div className='frontpage-content'>
                <TextType
                    texts={["hii , i am akash.", "i am a frontend developer"]}
                    typingSpeed={30}
                    deletingSpeed={20}
                    pauseDuration={2000}
                    cursorCharacter="."
                />
                <h1>
                    M.Sc. Computer Science student passionate about building beautiful,<br />
                    responsive web experiences with React,<br />
                    Vite & modern CSS.
                </h1>
                <div className='buttons'>
                    <button onClick={onAbout}>View Experience</button>
                    <button onClick={onContact}>Get In Touch</button>
                </div>
            </div>
        </div>
    )
}

export default FrontPage