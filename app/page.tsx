import { portfolioConfig } from "../config/portfolio-config"
import Hero from "../components/hero"
import About from "../components/about"
import Skills from "../components/skills"
import Projects from "../components/projects"
import Experience from "../components/experience"
import Contact from "../components/contact"
import Navigation from "../components/navigation"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-900 relative overflow-hidden">
      {/* Retro CRT scan lines effect */}
      <div className="fixed inset-0 pointer-events-none z-50">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-500/5 to-transparent animate-pulse" />
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0, 255, 0, 0.03) 2px, rgba(0, 255, 0, 0.03) 4px)",
          }}
        />
      </div>

      {/* Retro grid background */}
      <div className="fixed inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 255, 0, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 255, 0, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <Navigation />
      <Hero config={portfolioConfig} />
      <About config={portfolioConfig} />
      <Skills config={portfolioConfig} />
      <Projects config={portfolioConfig} />
      <Experience config={portfolioConfig} />
      <Contact config={portfolioConfig} />
    </div>
  )
}
