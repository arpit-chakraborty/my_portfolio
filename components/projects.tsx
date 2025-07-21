"use client"

import Image from "next/image"
import { ExternalLink, Github, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ProjectsProps {
  config: any
}

export default function Projects({ config }: ProjectsProps) {
  const { projects } = config
  const featuredProjects = projects.filter((project: any) => project.featured)
  const otherProjects = projects.filter((project: any) => !project.featured)

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-green-400">{"<"}</span>
            <span className="text-white">Projects</span>
            <span className="text-green-400">{" />"}</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-slate-400 to-gray-400 mx-auto rounded-full" />
        </div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project: any) => (
            <div key={project.id} className="group relative">
              <div className="bg-gray-900 backdrop-blur-sm rounded-lg overflow-hidden border-2 border-green-400/20 hover:border-green-400/50 transition-all duration-300 hover:transform hover:scale-[1.02]">
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
                  <div className="absolute top-4 right-4">
                    <Star className="text-green-400 fill-green-400" size={20} />
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech: string, index: number) => (
                      <span
                        key={index}
                        className="px-3 py-1 text-xs bg-green-400/10 text-green-400 rounded-full border border-green-400/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <Button
                      size="sm"
                      className="bg-green-500 hover:bg-green-400 text-black font-mono"
                      onClick={() => window.open(project.liveUrl, "_blank")}
                    >
                      <ExternalLink size={16} className="mr-2" />
                      Live Demo
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-green-400 text-green-400 hover:bg-green-400/10 bg-transparent font-mono"
                      onClick={() => window.open(project.githubUrl, "_blank")}
                    >
                      <Github size={16} className="mr-2" />
                      Code
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects */}
        {otherProjects.length > 0 && <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-gray-300">Other Projects</h3>
        </div>}

        <div className="grid md:grid-cols-2 gap-6">
          {otherProjects.map((project: any) => (
            <div
              key={project.id}
              className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-6 border-2 border-green-400/20 hover:border-green-400/30 transition-all duration-300"
            >
              <h4 className="text-lg font-bold text-white mb-2">{project.title}</h4>
              <p className="text-gray-400 text-sm mb-3">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech: string, index: number) => (
                  <span key={index} className="px-2 py-1 text-xs bg-slate-700 text-slate-300 rounded">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-2">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-slate-300 text-sm flex items-center gap-1"
                >
                  <ExternalLink size={14} />
                  Demo
                </a>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-gray-400 text-sm flex items-center gap-1"
                >
                  <Github size={14} />
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
