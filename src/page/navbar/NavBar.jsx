import React, { useState } from 'react'
import './NavBar.css'
import Lightfall from './LightPillar'
import FrontPage from '../frontpage/FrontPage'

const NavBar = ({ homeRef, onHome, onAbout, onProject, onContact }) => {
    const [menuOpen, setMenuOpen] = useState(false)

    const handleClick = (fn) => {
        fn()
        setMenuOpen(false)
    }

    return (
        <header ref={homeRef}>
            <div style={{
                position: 'absolute',
                top: 0, left: 0,
                width: '100%',
                height: '100%',
                overflow: 'hidden',
                zIndex: 0
            }}>
                <Lightfall
                    colors={['#000000', '#0c0631', '#3a1539']}
                    backgroundColor="#02051a"
                    speed={0.5}
                    streakCount={2}
                    streakWidth={1}
                    streakLength={1}
                    glow={1}
                    density={0.6}
                    twinkle={1}
                    zoom={2}
                    backgroundGlow={0.5}
                    opacity={1}
                    mouseInteraction
                    mouseStrength={0.5}
                    mouseRadius={1}
                    color1="#A6C8FF"
                    color2="#5227FF"
                    color3="#FF9FFC"
                />
            </div>

            <div className='container'>
                <div className='logo'>
                    <h1>AK<span>.</span>ASH</h1>
                </div>

                <nav className='desktop-nav'>
                    <a onClick={onHome}>HOME</a>
                    <a onClick={onAbout}>ABOUT</a>
                    <a onClick={onProject}>PROJECTS</a>
                    <a onClick={onContact}>CONTACT</a>
                </nav>

                <div className='right-side'>
                    <div className='btn'>
                        <button onClick={onContact}>Hire Me</button>
                    </div>
                    <div
                        className={`hamburger ${menuOpen ? 'open' : ''}`}
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>

            <div className={`mobile-menu ${menuOpen ? 'show' : ''}`}>
                <a onClick={() => handleClick(onHome)}>HOME</a>
                <a onClick={() => handleClick(onAbout)}>ABOUT</a>
                <a onClick={() => handleClick(onProject)}>PROJECTS</a>
                <a onClick={() => handleClick(onContact)}>CONTACT</a>
            </div>

            <FrontPage onContact={onContact} onAbout={onAbout} />
        </header>
    )
}

export default NavBar