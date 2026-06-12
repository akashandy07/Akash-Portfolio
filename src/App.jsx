import { useRef } from 'react'
import NavBar from './page/navbar/NavBar'
import AboutPage from './page/about/AboutPage'
import ProjectPage from './page/project/ProjectPage'
import ContactPage from './page/contact/ContactPage'
import FooterPage from './page/footer/FooterPage'
import FrontPage from './page/frontpage/FrontPage'


const App = () => {
  const homeRef = useRef(null)
  const aboutRef = useRef(null)
  const projectRef = useRef(null)
  const contactRef = useRef(null)


  const scrollTo = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div>
      <NavBar
      
        onHome={() => scrollTo(homeRef)}
        onAbout={() => scrollTo(aboutRef)}
        onProject={() => scrollTo(projectRef)}
        onContact={() => scrollTo(contactRef)}
      />



      <div ref={aboutRef}>
        <AboutPage
        />
      </div>

      <div ref={projectRef}>
        <ProjectPage />
      </div>

      <div ref={contactRef}>
        <ContactPage />

      </div>

      <FooterPage
        onHome={() => scrollTo(homeRef)}
        onAbout={() => scrollTo(aboutRef)}
        onProject={() => scrollTo(projectRef)}
        onContact={() => scrollTo(contactRef)} />
    </div>
  )
}

export default App