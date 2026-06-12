import React from 'react'
import './ProjectPage.css'
import Lightfall from '../navbar/LightPillar'

const ProjectPage = () => {
    return (
        <div className='project-container'>

            {/* ── Background ── */}
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

            {/* ── Content ── */}
            <div className='project-info'>
                <h2>THINGS I BUILT</h2>
                <p className='project-section-title'>Recent Builds</p>

                <div className='project-main'>
                    <div className='project-one'>
                        <div>
                            <span className='project-emoji'>🛒</span>
                            <h3 className='project-title'>E-Commerce Website</h3>
                            <p className='project-desc'>
                                Responsive React e-commerce app with product listing, cart management,
                                Context API for global state, and React Router for navigation.
                            </p>
                            <p className='project-stack'>HTML · CSS · JavaScript · React.js</p>
                            <a className='project-link' href="https://react-ecommerce-application-eta.vercel.app/" target="_blank" rel="noreferrer">
                                Live Demo ↗
                            </a>
                        </div>
                    </div>

                    <div className='project-two'>
                        <div>
                            <span className='project-emoji'>🎬</span>
                            <h3 className='project-title'>MyFlix — Movie & TV Streaming</h3>
                            <p className='project-desc'>
                                Netflix-style streaming app powered by the TMDB API. Features genre browsing,
                                search, watchlist, ratings, and OAuth-style session authentication.
                            </p>
                            <p className='project-stack'>React.js · TMDB API · Axios · React Router · Custom Hooks</p>
                            <a className='project-link' href=" https://movie-website-eight-azure.vercel.app/" target="_blank" rel="noreferrer">
                                Live Demo ↗
                            </a>
                        </div>
                    </div>

                    <div className='project-three'>
                        <div>
                            <span className='project-emoji'>💼</span>
                            <h3 className='project-title'>Job Application System</h3>
                            <p className='project-desc'>
                                Track and manage job applications with status updates, form handling,
                                and a clean dashboard built with React Router.
                            </p>
                            <p className='project-stack'>React.js · React Router · HTML · CSS · JavaScript</p>
                            <a className='project-link' href="https://your-app.vercel.app" target="_blank" rel="noreferrer">
                                Live Demo ↗
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ProjectPage