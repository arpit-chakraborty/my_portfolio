interface SkillsProps {
  config: any
}

export default function Skills({ config }: SkillsProps) {
  const { skills } = config

  const skillCategories = [
    { title: "ML/AI", skills: skills.ai, color: "from-green-300 to-green-400" },
    { title: "FullStack", skills: skills.fullstack, color: "from-green-400 to-green-500" },
    { title: "Tools & Technologies", skills: skills.tools, color: "from-green-500 to-green-600" },
    { title: "Soft Skills", skills: skills.soft, color: "from-green-600 to-green-700" },
  ]

  return (
    <section id="skills" className="py-20 px-4 bg-gray-900/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-green-400">{"<"}</span>
            <span className="text-white">Skills</span>
            <span className="text-green-400">{" />"}</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-slate-400 to-gray-400 mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="group">
              <div className="bg-gray-900 backdrop-blur-sm rounded-lg p-6 border-2 border-green-400/20 hover:border-green-400/50 transition-all duration-300 hover:transform hover:scale-105">
                <h3
                  className={`text-xl font-bold mb-4 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}
                >
                  {category.title}
                </h3>
                <div className="space-y-3">
                  {category.skills.map((skill: string, skillIndex: number) => (
                    <div
                      key={skillIndex}
                      className="flex items-center gap-3 p-2 rounded-lg bg-green-400/5 hover:bg-green-400/10 transition-colors"
                    >
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.color}`} />
                      <span className="text-gray-300 text-sm">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
