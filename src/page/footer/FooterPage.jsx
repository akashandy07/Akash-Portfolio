import React from 'react'
import './FooterPage.css'
import Lightfall from '../navbar/LightPillar'


const FooterPage = ({ onHome, onAbout, onProject, onContact }) => {


    return (
        <>
            <div className='footer-container'>
                <div style={{ width: '100%', height: '100%', position: 'absolute', overflow: 'hidden', top: '0px', left: '0px', zIndex: 0 }}>

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
                        zoom={6}
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
                <footer className='footer'>
                    <div className='footer-left'>
                        <h2>Akash</h2>
                        <p>Frontend Developer</p>
                    </div>

                    <div className='footer-links'>
                        <a onClick={onHome}>Home</a>
                        <a onClick={onAbout}>About</a>
                        <a onClick={onProject}>Projects</a>
                        <a onClick={onContact}>Contact</a>
                    </div>
                </footer>
                <div className='footer-bottom'>

                    © 2024 AKASH. All rights reserved.
                </div>


            </div >
        </>

    )


}

export default FooterPage