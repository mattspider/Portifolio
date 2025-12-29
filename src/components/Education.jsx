import React, { useState } from 'react'

const Education = () => {
  const [activeTab, setActiveTab] = useState('dio')

  const education = {
    dio: {
      title: 'Formação Full Stack - DIO',
      period: '2025',
      description: `Formação Full Stack oferecida pela Digital Innovation One (DIO) focada em React, Next.js e .NET. Curso completo e abrangente que cobre desenvolvimento front-end moderno, back-end robusto com .NET, DevOps com Azure e Docker, além de boas práticas, arquitetura de software e integração entre todas as tecnologias do ecossistema Full Stack.`,
      content: {
        'Front-End': [
          'React - Componentes funcionais e de classe',
          'React Hooks (useState, useEffect, useContext, useReducer)',
          'Context API para gerenciamento de estado global',
          'Next.js - Framework React para produção',
          'Next.js - Server-Side Rendering (SSR) e Static Site Generation (SSG)',
          'Next.js - Roteamento e API Routes',
          'TypeScript com React e Next.js',
          'Roteamento avançado e navegação',
          'Gerenciamento de estado com Redux e Zustand',
          'Integração com APIs RESTful',
          'Consumo de APIs com Fetch e Axios',
          'Tratamento de erros e loading states',
          'Otimização de performance e SEO'
        ],
        'Back-End': [
          '.NET Core / .NET Framework',
          'C# - Programação orientada a objetos avançada',
          'C# - LINQ e expressões lambda',
          'C# - Async/Await e programação assíncrona',
          'APIs RESTful com ASP.NET Core',
          'Entity Framework Core - ORM e migrations',
          'Entity Framework - Code First e Database First',
          'Autenticação e autorização (JWT, Identity)',
          'Validação de dados e tratamento de erros',
          'Dependency Injection e Inversion of Control',
          'Padrões de arquitetura (Repository, Unit of Work)',
          'Testes unitários e de integração'
        ],
        'DevOps & Cloud': [
          'Docker - Containerização de aplicações',
          'Docker - Dockerfile e Docker Compose',
          'Docker - Orquestração de containers',
          'Azure - Serviços de cloud computing',
          'Azure - App Services para deploy de aplicações',
          'Azure - Azure SQL Database',
          'Azure - Azure DevOps para CI/CD',
          'GitHub Actions - Automação de pipelines',
          'CI/CD - Integração e deploy contínuo',
          'Monitoramento e logging de aplicações'
        ],
        'Banco de Dados': [
          'SQL Server - Design e modelagem de banco de dados',
          'SQL Server - Queries complexas e stored procedures',
          'SQL Server - Otimização de performance',
          'Entity Framework com SQL Server',
          'Migrations e versionamento de schema',
          'Relacionamentos e constraints',
          'Índices e otimização de queries'
        ],
        'Full Stack & Arquitetura': [
          'Integração completa Front-end e Back-end',
          'Arquitetura de aplicações escaláveis',
          'Padrões de design e arquitetura (MVC, Clean Architecture)',
          'Boas práticas de desenvolvimento e código limpo',
          'Versionamento com Git e GitHub',
          'Documentação de APIs (Swagger/OpenAPI)',
          'Deploy de aplicações Full Stack',
          'Segurança em aplicações web',
          'Performance e otimização end-to-end'
        ]
      }
    },
    jp: {
      title: 'Jovem programador',
      period: '2021 - 2022',
      description: `O programa "jovem programador" foi um projeto que participei entre 2021 e 2022 que visava capacitar jovens de baixa renda para ingressarem no mundo do desenvolvimento, neste projeto abordamos conteúdos como POO, criação de API's e uso de frameworks, durante este projeto houve um hackathon com todas a unidades do jovem programador, onde houveram mais de 300 jovens participando, neste hackathon eu fiquei em 2° lugar e ganhei um alexa de 4° geração`,
      content: {
        '2021': ['Lógica de programação', 'POO'],
        '2022': ['desenvolvimento web(Django)', 'Hackathon']
      }
    },
    ads: {
      title: 'ADS - Unisul',
      period: '2023 - 2025',
      description: `Atualmente estou curso análise e desenvolvimento de sistemas na unisul, comecei em 2023 e tenho data prevista para o término no primeiro semestre de 2025`,
      content: {
        '2023.1': [
          'Modelagem de software',
          'Programação de soluções computacionais',
          'Vida & carreira'
        ],
        '2023.2': [
          'Ambientes computacionais e conectividade',
          'Sistema computacionais e segurança'
        ],
        '2024.1': [
          'Gestão e qualidade de software',
          'Modelos, métodos e técnicas da engenharia de software'
        ],
        '2024.2': [
          'Sistemas distribuídos e mobile',
          'Usabilidade, desenvolvimento web, mobile e jogos'
        ],
        '2025.1': [
          'Inovação, sustentabilidade e competitividade empresarial',
          'Inteligência Artificial e Sociedade: soluções e desafios para o futuro'
        ]
      }
    }
  }

  const activeEducation = education[activeTab]

  return (
    <section id="formacao" className="py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-xl md:text-2xl text-gray-400 mb-4">Minhas</h2>
          <h1 className="text-5xl md:text-6xl font-bold">
            <span className="text-gradient">Formações</span>
          </h1>
        </div>

        <div className="space-y-8">
          {/* Tabs */}
          <div className="flex justify-center gap-8 mb-8">
            {Object.entries(education).map(([key, edu]) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 ${
                  activeTab === key
                    ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg shadow-primary/50'
                    : 'bg-gray-900/50 text-gray-400 hover:text-gray-200 border border-gray-800'
                }`}
              >
                {edu.title}
              </button>
            ))}
          </div>

          {/* Divider */}
          <div className="flex justify-center mb-8">
            <div className="h-1 w-3/4 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
          </div>

          {/* Content */}
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-800 p-8 md:p-12">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-primary mb-4">
                {activeEducation.period}
              </h3>
              
              <p className="text-gray-300 text-lg leading-relaxed">
                {activeEducation.description}
              </p>

              <div className="mt-8">
                <h4 className="text-xl font-bold text-gray-200 mb-4">
                  {activeTab === 'jp' ? 'Conteúdos:' : activeTab === 'dio' ? 'Conteúdos abordados:' : 'Grade curricular:'}
                </h4>
                
                <div className="space-y-6">
                  {Object.entries(activeEducation.content).map(([year, items]) => (
                    <div key={year} className="space-y-2">
                      <h5 className="text-lg font-semibold text-primary">
                        {year}
                      </h5>
                      <ul className="space-y-1 ml-4">
                        {items.map((item, index) => (
                          <li
                            key={index}
                            className="text-gray-400 flex items-start gap-2"
                          >
                            <span className="text-primary mt-1">-</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education

