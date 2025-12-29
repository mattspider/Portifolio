import React, { useState } from 'react'
import { FaClone, FaServer, FaVials, FaDatabase, FaLanguage, FaAngleDown } from 'react-icons/fa'

const Skills = () => {
  const [openSection, setOpenSection] = useState('frontend')

  const getLevelColor = (level) => {
    switch(level) {
      case 'Avançado':
        return 'text-green-400'
      case 'Intermediário':
        return 'text-blue-400'
      case 'Básico':
        return 'text-yellow-400'
      case 'Em evolução':
        return 'text-purple-400'
      case 'Nativo':
        return 'text-green-400'
      case 'Leitura e escrita':
        return 'text-blue-400'
      default:
        return 'text-gray-400'
    }
  }

  const skills = {
    frontend: {
      icon: FaClone,
      title: 'Front-End',
      items: [
        { name: 'React' },
        { name: 'Next.js' },
        { name: 'JavaScript / TypeScript' },
        { name: 'Vite' },
        { name: 'Tailwind CSS' },
        { name: 'HTML / CSS' }
      ]
    },
    backend: {
      icon: FaServer,
      title: 'Back-End',
      items: [
        { name: 'Node.js' },
        { name: 'Express' },
        { name: 'C#' },
        { name: '.NET' }
      ]
    },
    qa: {
      icon: FaVials,
      title: 'Qualidade & DevOps',
      items: [
        { name: 'Playwright' },
        { name: 'Qodana' },
        { name: 'Axiom' },
        { name: 'SonarQube' },
        { name: 'Testes automatizados' },
        { name: 'Docker' },
        { name: 'GitHub Actions' }
      ]
    },
    database: {
      icon: FaDatabase,
      title: 'Banco de Dados',
      items: [
        { name: 'PostgreSQL' },
        { name: 'SQL Server' },
        { name: 'MySQL' }
      ]
    },
    language: {
      icon: FaLanguage,
      title: 'Idiomas',
      items: [
        { name: 'Português', level: 'Nativo' },
        { name: 'Inglês', level: 'Leitura e escrita' }
      ]
    }
  }

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section)
  }

  return (
    <section id="skills" className="py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xl md:text-2xl text-gray-400 block mb-4">
            Nesta Seção você verá minhas
          </span>
          <h2 className="text-5xl md:text-6xl font-bold">
            <span className="text-gradient">Habilidades</span>
          </h2>
        </div>

        <div className="space-y-6">
          {Object.entries(skills).map(([key, skill]) => {
            const Icon = skill.icon
            const isOpen = openSection === key

            return (
              <div
                key={key}
                className="bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-800 overflow-hidden transition-all duration-300 hover:border-primary/50"
              >
                <button
                  onClick={() => toggleSection(key)}
                  className="w-full p-6 flex items-center justify-between hover:bg-gray-800/50 transition-colors duration-300"
                >
                  <div className="flex items-center gap-4">
                    <Icon className="text-2xl text-primary" />
                    <h3 className="text-2xl font-bold text-gray-200">
                      {skill.title}
                    </h3>
                  </div>
                  <FaAngleDown
                    className={`text-xl text-primary transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-500 ${
                    isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="p-6 pt-0 space-y-4">
                    {skill.items.map((item, index) => (
                      <div key={index} className={`flex ${item.level ? 'justify-between' : 'justify-start'} items-center p-3 rounded-lg bg-gray-800/30 hover:bg-gray-800/50 transition-colors duration-300`}>
                        <span className="text-gray-300 font-medium">
                          {item.name}
                        </span>
                        {item.level && (
                          <span className={`${getLevelColor(item.level)} font-semibold text-sm px-3 py-1 rounded-full bg-gray-800/50`}>
                            {item.level}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Skills

