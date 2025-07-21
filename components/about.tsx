import { CheckCircle, Code, BrainCircuitIcon, Zap } from "lucide-react"

interface AboutProps {
  config: any
}

export default function About({ config }: AboutProps) {
  const { about } = config

const services = [
  {
    icon: Zap,
    title: "AI & Machine Learning",
    description:
      "Designing intelligent systems using NLP, deep learning, and transformer-based models for real-world applications.",
  },
  {
    icon: Code,
    title: "Full Stack Development",
    description:
      "Building robust and scalable web/mobile apps using React, Node.js, Flask, and modern cloud-native technologies.",
  },
  {
    icon: BrainCircuitIcon, // Replace with an actual AI-related icon component
    title: "Model Training & Deployment",
    description:
      "Fine-tuning and deploying ML models using Hugging Face, PyTorch, and Google Cloud for production-ready inference.",
  },
]


  return (
    <section id="about" className="py-20 px-6 bg-gray-800/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold font-mono mb-4">
            <span className="text-green-400">{"<"}</span>
            <span className="text-white">About</span>
            <span className="text-green-400">{" />"}</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-slate-400 to-gray-400 mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h3 className="text-3xl font-bold text-white font-mono mb-6">About Me</h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">{about.description}</p>

            <div className="space-y-4">
              {about.highlights.map((highlight: string, index: number) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-green-400 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="bg-gray-900 p-8 rounded-lg border-2 border-green-400/30 shadow-2xl">
              <div className="space-y-4">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-3 h-3 bg-red-500 rounded-full" />
                  <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                  <div className="w-3 h-3 bg-green-500 rounded-full" />
                  <span className="text-green-400 font-mono text-sm ml-4">terminal.js</span>
                </div>
                <div className="font-mono text-sm text-gray-300">
                  <div className="text-green-400">
                    {"const"} <span className="text-white">developer</span> = {"{"}
                  </div>
                  <div className="ml-4 text-gray-300">
                    name: <span className="text-green-400">'{config.personal.name}'</span>,
                  </div>
                  <div className="ml-4 text-gray-300">
                    skills: <span className="text-yellow-400">['React', 'Node.js', 'TypeScript']</span>,
                  </div>
                  <div className="ml-4 text-gray-300">
                    passion: <span className="text-green-400">'Building amazing things'</span>,
                  </div>
                  <div className="ml-4 text-gray-300">
                    coffee: <span className="text-green-400">true</span>
                  </div>
                  <div className="text-green-400">{"}"}</div>
                  <div className="text-green-400 mt-2 animate-pulse">{">"} _</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group">
              <div className="bg-gray-900 p-8 rounded-lg border-2 border-green-400/20 hover:border-green-400/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className="w-16 h-16 bg-green-400/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-green-400/20 transition-colors">
                  <service.icon className="text-green-400" size={32} />
                </div>
                <h3 className="text-xl font-bold text-white font-mono mb-4">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
