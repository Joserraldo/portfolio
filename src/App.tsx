import { MotionConfig } from 'framer-motion'
import BeyondCode from './components/BeyondCode'
import Bucaratransit from './components/Bucaratransit'
import Conecta from './components/Conecta'
import Contact from './components/Contact'
import Flagship from './components/Flagship'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Nav from './components/Nav'
import Orchestration from './components/Orchestration'
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
          <Orchestration />
          <Conecta />
          <Bucaratransit />
          <Flagship />
          <Projects />
          <Skills />
          <Timeline />
          <BeyondCode />
          <Contact />
        </main>
        <Footer />
      </div>
    </MotionConfig>
  )
}
