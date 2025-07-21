"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")

  const navItems = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "contact", label: "Contact" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => document.getElementById(item.id))
      const scrollPosition = window.scrollY + 100

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id)
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsOpen(false)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-gray-900/90 backdrop-blur-md border-b border-green-500/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="text-2xl font-bold font-mono">
            <span className="text-green-400">{"<"}</span>
            <span className="text-white">arpit</span>
            <span className="text-green-400">{"."}</span>
            <span className="text-green-400">{">"}</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-3 py-2 text-sm font-mono font-medium transition-all duration-300 relative ${
                  activeSection === item.id ? "text-green-400" : "text-gray-300 hover:text-green-400"
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-green-400 animate-pulse" />
                )}
              </button>
            ))}

            <Button
              className="bg-green-500 hover:bg-green-400 text-black font-mono font-bold px-6 py-2 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-green-500/25"
              onClick={() => scrollToSection("contact")}
            >
              Hire me
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-green-400 hover:text-green-300 transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-gray-800/95 backdrop-blur-md rounded-lg mt-2 p-4 border border-green-500/20">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left px-3 py-2 text-sm font-mono font-medium transition-all duration-300 ${
                  activeSection === item.id ? "text-green-400" : "text-gray-300 hover:text-green-400"
                }`}
              >
                {item.label}
              </button>
            ))}
            <Button
              className="w-full mt-4 bg-green-500 hover:bg-green-400 text-black font-mono font-bold"
              onClick={() => scrollToSection("contact")}
            >
              Hire me
            </Button>
          </div>
        )}
      </div>
    </nav>
  )
}
