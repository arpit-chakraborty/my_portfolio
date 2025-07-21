import { Briefcase, Calendar } from "lucide-react"

interface ExperienceProps {
  config: any
}

export default function Experience({ config }: ExperienceProps) {
  const { experience } = config

  return (
    <section id="experience" className="py-20 px-4 bg-gray-900/50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-green-400">{"<"}</span>
            <span className="text-white">Experience</span>
            <span className="text-green-400">{" />"}</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-slate-400 to-gray-400 mx-auto rounded-full" />
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-green-400" />

          <div className="space-y-8">
            {experience.map((job: any, index: number) => (
              <div key={index} className="relative flex items-start gap-8">
                {/* Timeline dot */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center border-4 border-gray-900">
                    <Briefcase className="text-white" size={24} />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 bg-gray-900 backdrop-blur-sm rounded-lg p-6 border-2 border-green-400/20 hover:border-green-400/30 transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <h3 className="text-xl font-bold text-white">{job.position}</h3>
                    <div className="flex items-center gap-2 text-green-400 text-sm font-mono">
                      <Calendar size={16} />
                      {job.duration}
                    </div>
                  </div>

                  <h4 className="text-lg text-green-400 mb-3 font-mono">{job.company}</h4>
                  <p className="text-gray-300 leading-relaxed">{job.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
