import BackgroundEffects from "./components/BackgroundEffects"
import CursorGlow from "./components/CursorGlow"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Marquee from "./components/Marquee"
import Stats from "./components/Stats"
import Services from "./components/Services"
import Projects from "./components/Projects"
import Process from "./components/Process"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

export default function App() {
  return (
    <div className="noise relative min-h-screen bg-void text-white">
      <BackgroundEffects />
      <CursorGlow />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Stats />
        <Services />
        <Projects />
        <Process />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
