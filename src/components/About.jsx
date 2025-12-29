import React from 'react'
import { FaDownload } from 'react-icons/fa'

const About = () => {
  const stats = [
    { number: '02+', label: 'Anos de\nexperiência' },
    { number: '05+', label: 'Projetos\ncompletos' },
    { number: '01+', label: 'Empresas que\npassei' }
  ]

  return (
    <section id="aboutme" className="py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-xl md:text-2xl text-gray-400 mb-4">Sobre</h2>
          <h1 className="text-5xl md:text-6xl font-bold">
            <span className="text-gradient">Mim</span>
          </h1>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-800 p-8 md:p-12 space-y-12">
            {/* Description */}
            <div className="space-y-6">
              <p className="text-gray-300 text-lg leading-relaxed">
                Desenvolvedor Full Stack focado em React, Next.js, Node.js e .NET, com experiência em QA e automação de testes como diferencial estratégico. Formado em Análise e Desenvolvimento de Sistemas pela UNISUL.
              </p>
              
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-primary mb-3">Destaques:</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span>Experiência em QA e automação de testes (Playwright, testes de API, banco de dados e mobile)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span>Stack Full Stack moderna: React, Next.js, Node.js, Express, .NET, TypeScript</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span>Interesse em desenvolvimento, qualidade de código, DevOps e crescimento técnico contínuo</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span>Familiarizado com metodologias ágeis (Scrum, Kanban) e abordagens BDD/TDD</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8 border-t border-gray-800">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center space-y-2 p-6 rounded-xl bg-gray-800/50 hover:bg-gray-800 transition-colors duration-300"
                >
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-400 text-sm whitespace-pre-line">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* CV Download */}
            <div className="flex justify-center pt-4">
              <a
                href={`${import.meta.env.BASE_URL}assets/CVC - Matheus de Oliveira Soares.pdf`}
                download
                className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary to-secondary rounded-xl font-semibold text-white hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 hover:scale-105"
              >
                <span>Currículo</span>
                <FaDownload className="text-lg group-hover:animate-bounce" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

