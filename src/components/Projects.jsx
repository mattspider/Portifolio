import React from 'react'
import { FaGithub } from 'react-icons/fa'

const Projects = () => {
  // Função para obter configuração de imagem do projeto
  const getProjectImageConfig = (project) => {
    const imageConfigs = {
      'Minimal API .NET': {
        colors: ['#512BD4', '#7B68EE', '#9B59B6'],
        icon: '⚡',
        text: '.NET API'
      },
      'Calculator C#': {
        colors: ['#239120', '#4CAF50', '#66BB6A'],
        icon: '🧮',
        text: 'C# Calculator'
      },
      'LLM - Decisões Éticas e Morais': {
        colors: ['#FF6B6B', '#FF8E53', '#FFA07A'],
        icon: '🤖',
        text: 'LLM API'
      },
      'GitHub Wiki': {
        colors: ['#24292E', '#2F363D', '#3F4448'],
        icon: '📚',
        text: 'GitHub Wiki'
      },
      'Trilha React - Desafio 5': {
        colors: ['#61DAFB', '#4FC3F7', '#29B6F6'],
        icon: '⚛️',
        text: 'React'
      },
      'APP Coleta de lixo': {
        colors: ['#4CAF50', '#66BB6A', '#81C784'],
        icon: '♻️',
        text: 'Eco App'
      },
      'API Coleta de lixo': {
        colors: ['#4CAF50', '#66BB6A', '#81C784'],
        icon: '🌱',
        text: 'Eco API'
      },
      'E-commerce de livros': {
        colors: ['#FF9800', '#FFB74D', '#FFCC80'],
        icon: '📚',
        text: 'E-commerce'
      },
      'Loja de ferramentas do Tiozao': {
        colors: ['#2196F3', '#42A5F5', '#64B5F6'],
        icon: '🔧',
        text: 'Loja'
      },
      'Controle de estoque': {
        colors: ['#9C27B0', '#BA68C8', '#CE93D8'],
        icon: '📦',
        text: 'Estoque'
      }
    }

    return imageConfigs[project.title] || {
      colors: ['#7f00ff', '#ff006e', '#8338ec'],
      icon: '💻',
      text: 'Project'
    }
  }

  const projects = [
    {
      id: 1,
      title: 'Minimal API .NET',
      description: 'API RESTful desenvolvida com .NET Minimal API seguindo Clean Architecture, com separação de domínio, infraestrutura e migrations do Entity Framework.',
      tech: 'C# | .NET | Entity Framework | SQL Server',
      type: 'API',
      hasTests: false,
      usePlaceholder: true,
      github: 'https://github.com/mattspider/minimal-api'
    },
    {
      id: 2,
      title: 'Calculator C#',
      description: 'Aplicação de calculadora desenvolvida em C# com arquitetura orientada a objetos e suíte completa de testes unitários para validação de funcionalidades.',
      tech: 'C# | .NET | Testes Unitários',
      type: 'Desktop Application',
      hasTests: true,
      usePlaceholder: true,
      github: 'https://github.com/mattspider/Calculator'
    },
    {
      id: 3,
      title: 'LLM - Decisões Éticas e Morais',
      description: 'API FastAPI para análise de decisões éticas e morais utilizando Large Language Models (DeepSeek-R1), integrada com Ollama para processamento de dilemas complexos.',
      tech: 'Python | FastAPI | Ollama | LLM | DeepSeek-R1',
      type: 'API',
      hasTests: false,
      usePlaceholder: true,
      github: 'https://github.com/mattspider/LLM-de-decis-es-ticas-e-morais'
    },
    {
      id: 4,
      title: 'GitHub Wiki',
      description: 'Sistema de documentação e wiki integrado com GitHub, facilitando a criação e gerenciamento de documentação técnica para projetos.',
      tech: 'GitHub API | Markdown | Documentation',
      type: 'Tool',
      hasTests: false,
      usePlaceholder: true,
      github: 'https://github.com/mattspider/github-wiki'
    },
    {
      id: 5,
      title: 'Trilha React - Desafio 5',
      description: 'Desafio de desenvolvimento React focado em componentes reutilizáveis, gerenciamento de estado e boas práticas de desenvolvimento front-end moderno.',
      tech: 'React | JavaScript | Vite',
      type: 'Front-End',
      hasTests: false,
      usePlaceholder: true,
      github: 'https://github.com/mattspider/trilha-react-desafio-5'
    },
    {
      id: 6,
      title: 'APP Coleta de lixo',
      description: 'Aplicação web full stack para gestão de coleta ecológica com sistema de agendamento e rastreamento.',
      tech: 'Python | Django | PostgreSQL',
      type: 'Full Stack',
      hasTests: false,
      usePlaceholder: true,
      github: 'https://github.com/mattspider/app-coleta-de-lixo.git'
    },
    {
      id: 7,
      title: 'API Coleta de lixo',
      description: 'API RESTful desenvolvida em Django para gerenciar operações de coleta ecológica com endpoints documentados.',
      tech: 'Python | Django REST Framework | PostgreSQL',
      type: 'API',
      hasTests: false,
      usePlaceholder: true,
      github: 'https://github.com/mattspider/api-coleta-de-lixo'
    },
    {
      id: 8,
      title: 'E-commerce de livros',
      description: 'Plataforma de e-commerce completa com carrinho de compras, sistema de autenticação e gestão de produtos.',
      tech: 'Python | Django | HTML/CSS | JavaScript',
      type: 'Full Stack',
      hasTests: false,
      usePlaceholder: true,
      github: 'https://github.com/mattspider/App-livraria'
    },
    {
      id: 9,
      title: 'Loja de ferramentas do Tiozao',
      description: 'Sistema de venda de ferramentas com interface gráfica, desenvolvido seguindo padrões de modelagem de software.',
      tech: 'Java | Swing',
      type: 'Desktop Application',
      hasTests: false,
      usePlaceholder: true,
      github: 'https://github.com/petreg/a3_modelagem'
    },
    {
      id: 10,
      title: 'Controle de estoque',
      description: 'Sistema web para controle de estoque com gestão de produtos, entradas, saídas e relatórios.',
      tech: 'Python | Django | SQLite',
      type: 'Full Stack',
      hasTests: false,
      usePlaceholder: true,
      github: 'https://github.com/mattspider/APP-controle-de-estoque'
    }
  ]

  return (
    <section id="projetos" className="py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xl md:text-2xl text-gray-400 block mb-4">
            Aqui você verá meus
          </span>
          <h2 className="text-5xl md:text-6xl font-bold">
            <span className="text-gradient">Projetos</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group relative bg-gray-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-800 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-64 overflow-hidden">
                {project.image && !project.usePlaceholder ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                ) : (
                  <div 
                    className="w-full h-full flex flex-col items-center justify-center group-hover:scale-110 transition-transform duration-500"
                    style={{
                      background: `linear-gradient(135deg, ${getProjectImageConfig(project).colors[0]} 0%, ${getProjectImageConfig(project).colors[1]} 50%, ${getProjectImageConfig(project).colors[2]} 100%)`
                    }}
                  >
                    <span className="text-6xl mb-2">{getProjectImageConfig(project).icon}</span>
                    <span className="text-white font-bold text-xl">{getProjectImageConfig(project).text}</span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-2xl font-bold text-primary">
                    {project.title}
                  </h3>
                  <span className="text-xs px-2 py-1 rounded-full bg-primary/20 text-primary font-medium">
                    {project.type}
                  </span>
                </div>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-xs text-gray-500 font-medium">Stack:</span>
                    <span className="text-xs text-gray-400">{project.tech}</span>
                  </div>
                  {project.hasTests && (
                    <div className="flex items-center gap-2">
                      <span className="text-xs px-2 py-1 rounded-full bg-green-500/20 text-green-400 font-medium">
                        ✓ Testes automatizados
                      </span>
                    </div>
                  )}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-300 hover:text-primary transition-colors duration-300 group/link mt-3"
                  >
                    <FaGithub className="text-lg group-hover/link:scale-110 transition-transform" />
                    <span className="font-medium text-sm">Ver código no GitHub</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

