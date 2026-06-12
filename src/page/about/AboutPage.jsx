import React from 'react'
import './LiquidBackground.css'
import BorderGlow from './BorderGlow'
import Lightfall from '../navbar/LightPillar'

const GlowHeading = ({ text }) => {
  return (
    <h1 className="glow-heading">
      {text.split(' ').map((word, wi) => (
        <span className="glow-word" key={wi}>
          {word.split('').map((letter, li) => (
            <span className="glow-letter" key={li}>{letter}</span>
          ))}
        </span>
      ))}
    </h1>
  )
}

const skills = [
  'React.js',
  'JavaScript',
  'HTML5',
  'CSS3',
  'Tailwind CSS',
  'Bootstrap',
  'Axios',
  'REST API',
  'React Router',
  'Context API',
  'Custom Hooks',
  'Git',
  'GitHub',
  'Vite',
  'Responsive Design',
  'Prompt Engineering',
  'LocalStorage',
]

const AboutPage = () => {
  return (
    <div className='btneeee'>
      <div style={{ width: '100%', height: '100vh', position: 'absolute', overflow: 'visible', top: '0px', left: '0px', zIndex: 0 }}>

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

      <div className='container-about'>

        {/* ── left: photo ── */}
        <div className='photo'>
          <div className='photo-wrapper'>
            <div className='photo-glow' />
            <img src="/akash.jpeg" alt="Akash R" />
          </div>
        </div>

        {/* ── right: info ── */}
        <div className='about-info'>

          <div className='into-one'>
            <h4>About me</h4>
            <GlowHeading text="Crafting interfaces that feel alive" />
          </div>



          <div className='info-two'>
            <p>I'm Akash A, an M.Sc. Computer Science student,at Sri Krishna
              Arts and Science College, Coimbatore.
              I love turning ideas into pixel-perfect, responsive web interfaces.</p>
            <p>Currently completing a Frontend Developer Internship at Next Skills,
              Coimbatore — working on real-world projects involving React.js, Vite, Axios, and
              API integrations including TMDB OAuth-style authentication.</p>
          </div>

          {/* ── skills ── */}
          <div className='skills-label'><GlowHeading text="skills" /></div>
          <div className='info-three'>
            {skills.map((skill, i) => (
              <BorderGlow
                key={i}
                edgeSensitivity={30}
                glowColor="40 80 80"
                backgroundColor="#120F17"
                borderRadius={8}
                glowRadius={30}
                glowIntensity={1}
                coneSpread={25}
                animated={false}
                colors={['#c084fc', '#f472b6', '#38bdf8']}
              >
                <div className="skill-card">
                  <p className="skill-name">{skill}</p>
                </div>
              </BorderGlow>
            ))}
          </div>

        </div>
      </div>
    </div>
  )
}

export default AboutPage