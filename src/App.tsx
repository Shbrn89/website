import Navbar from './components/sections/Navbar'
import Hero from './components/sections/Hero'
import Projects from './components/sections/Projects'
import About from './components/sections/About'
import Skills from './components/sections/Skills'
import CurrentlyExploring from './components/sections/CurrentlyExploring'
import Education from './components/sections/Education'
import Contact from './components/sections/Contact'
import Footer from './components/sections/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-base-950">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <About />
        <Skills />
        <CurrentlyExploring />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
