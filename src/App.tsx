import { MotionConfig } from 'framer-motion'
import About from './components/About'
import BeyondCode from './components/BeyondCode'
import Contact from './components/Contact'
import Flagship from './components/Flagship'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Nav from './components/Nav'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Timeline from './components/Timeline'

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen">
        <Nav />
        <main>
          <Hero />
          <About />
          <Skills />
          <Flagship />
          <Projects />
          <Timeline />
          <BeyondCode />
          <Contact />
        </main>
        <Footer />
      </div>
    </MotionConfig>
  )
}
