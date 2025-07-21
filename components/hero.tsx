"use client"

import Image from "next/image"
import { Github, Linkedin, Youtube, Twitter, Download } from "lucide-react"
import { Button } from "@/components/ui/button"

interface HeroProps {
  config: any
}

export default function Hero({ config }: HeroProps) {
  const { personal, social } = config

  const socialIcons = {
    github: Github,
    linkedin: Linkedin,
    youtube: Youtube,
    twitter: Twitter,
  }
const stats = [
  { number: "9.2", label: "Current\nCGPA" },
  { number: "20+", label: "AI/ML\nProjects Built" },
  { number: "5+", label: "Hackathons\nParticipated" },
  { number: "50+", label: "Peers\nMentored" },
]


  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-6 pt-16 relative">
      {/* Floating retro elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-20 left-10 w-4 h-4 bg-green-400 rotate-45 animate-bounce"
          style={{ animationDelay: "0s" }}
        />
        <div
          className="absolute top-40 right-20 w-3 h-3 bg-green-400 rounded-full animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute bottom-40 left-20 w-2 h-8 bg-green-400 animate-pulse"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute bottom-20 right-40 w-6 h-6 border-2 border-green-400 rotate-45 animate-spin"
          style={{ animationDuration: "8s" }}
        />
      </div>

      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <p className="text-green-400 font-mono text-lg mb-4">Software Developer</p>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-white font-mono">Hello I'm</span>
                <br />
                <span className="text-green-400 font-mono">{personal.name}</span>
              </h1>
              <p className="text-gray-300 text-lg mt-6 max-w-lg leading-relaxed">
                {personal.tagline}. I excel at crafting elegant digital experiences and I am proficient in various
                programming languages and technologies.
              </p>
            </div>

            {/* CTA and Social */}
            <div className="flex flex-col sm:flex-row items-start gap-6">
              <a
                href={personal.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                
                <Button
                  size="lg"
                  className="bg-transparent border-2 border-green-400 text-green-400 hover:bg-green-400 hover:text-black font-mono font-bold px-8 py-3 transition-all duration-300 hover:shadow-lg hover:shadow-green-400/25"
                >
                <Download size={20} className="mr-2" />
                  DOWNLOAD CV
                </Button>
              </a>

              <div className="flex gap-4">
                {Object.entries(social)
                  .filter(([platform, url]) => url && url !== "") // Filter out empty URLs
                  .map(([platform, url]) => {
                    const Icon = socialIcons[platform as keyof typeof socialIcons]
                    if (!Icon) return null

                    return (
                      <a
                        key={platform}
                        href={url as string}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 border-2 border-green-400/30 rounded-full flex items-center justify-center text-green-400 hover:border-green-400 hover:bg-green-400/10 transition-all duration-300"
                      >
                        <Icon size={20} />
                      </a>
                    )
                  })}
              </div>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Decorative circles */}
              <div className="absolute inset-0 animate-spin" style={{ animationDuration: "20s" }}>
                <div className="absolute top-0 left-1/2 w-4 h-4 bg-green-400 rounded-full transform -translate-x-1/2" />
                <div className="absolute top-1/4 right-0 w-3 h-3 bg-green-400 rounded-full" />
                <div className="absolute bottom-1/4 right-0 w-2 h-2 bg-green-400 rounded-full" />
                <div className="absolute bottom-0 left-1/2 w-3 h-3 bg-green-400 rounded-full transform -translate-x-1/2" />
                <div className="absolute bottom-1/4 left-0 w-2 h-2 bg-green-400 rounded-full" />
                <div className="absolute top-1/4 left-0 w-4 h-4 bg-green-400 rounded-full" />
              </div>

              {/* Outer ring */}
              <div className="w-80 h-80 border-2 border-green-400/30 rounded-full flex items-center justify-center">
                {/* Inner ring */}
                <div className="w-64 h-64 border-2 border-green-400/50 rounded-full flex items-center justify-center">
                  {/* Profile image */}
                  <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-green-400">
                    <Image
                      src={personal.avatar || "/placeholder.svg?height=200&width=200"}
                      alt={personal.name}
                      width={200}
                      height={200}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-20 pt-12 border-t border-green-400/20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="text-4xl lg:text-5xl font-bold text-green-400 font-mono mb-2 group-hover:scale-110 transition-transform duration-300">
                {stat.number}
              </div>
              <div className="text-gray-400 text-sm font-mono whitespace-pre-line leading-tight">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
