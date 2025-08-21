
import './App.scss'
import About from './pages/About/About'
import Contact from './pages/contactus/Contact'
import Education from './pages/education/Education'
import Navbar from './pages/navbar/Navbar'
import Projects from './pages/projects/Projects'
import Skills from './pages/skills/Skills'

function App() {
  

  return (
    <>
      <div className="triangle-bg"></div>
      <Navbar/>
      <About/>
      <Skills/>
      <Projects/>
      <Education/>
      <Contact/>

    </>
  )
}

export default App
