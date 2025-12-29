import React, { useEffect, useRef } from 'react'
import Typed from 'typed.js'

const Hero = () => {
  const typedRef = useRef(null)

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ['Matheus de Oliveira'],
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 1500,
      loop: true,
    })

    return () => {
      typed.destroy()
    }
  }, [])

  const scrollToProjects = (e) => {
    e.preventDefault()
    const element = document.getElementById('projetos')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-primary/20 rounded-full blur-3xl -left-48 -top-48 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-secondary/20 rounded-full blur-3xl right-48 top-48 animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="z-10 space-y-6">
            <span className="text-xl md:text-2xl text-gray-400 font-medium block">
              Olá, eu sou
            </span>
            <h1 className="text-5xl md:text-7xl font-bold">
              <span className="text-gradient block mb-2">
                <span ref={typedRef}></span>
              </span>
            </h1>
            <h2 className="text-3xl md:text-4xl text-gray-300 font-semibold">
              Desenvolvedor Full Stack com background
            </h2>
            <p className="text-lg text-gray-400 max-w-xl leading-relaxed">
              Foco em React, Next.js, Node.js, e .NET, com atenção à qualidade, DevOps e boas práticas de arquitetura. Experiência em QA e automação como diferencial estratégico.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <button
                onClick={scrollToProjects}
                className="px-6 py-3 bg-gradient-to-r from-primary to-secondary rounded-xl font-semibold text-white hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 hover:scale-105"
              >
                Ver Projetos
              </button>
              <a
                href="https://github.com/mattspider"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border-2 border-primary rounded-xl font-semibold text-primary hover:bg-primary hover:text-white transition-all duration-300"
              >
                Acessar GitHub
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="relative z-10 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur-2xl opacity-50 animate-pulse"></div>
              <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-primary/30 shadow-2xl">
                <img
                  src="/sla.png"
                  alt="Matheus de Oliveira"
                  className="w-full h-full object-cover animate-float"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

