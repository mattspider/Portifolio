import React, { useState, useEffect } from 'react'
import { FaLinkedin, FaInstagram, FaGithub, FaSun, FaMoon } from 'react-icons/fa'
import { useTheme } from '../context/ThemeContext'

const Header = () => {
  const [scrolled, setScrolled] = useState(false)
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-black/90 backdrop-blur-md shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('projetos')}
              className="text-gray-300 hover:text-primary transition-colors duration-300 text-lg font-medium relative group"
            >
              Projetos
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className="text-gray-300 hover:text-primary transition-colors duration-300 text-lg font-medium relative group"
            >
              Skills
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
            </button>
            <button
              onClick={() => scrollToSection('formacao')}
              className="text-gray-300 hover:text-primary transition-colors duration-300 text-lg font-medium relative group"
            >
              Formação
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
            </button>
            <button
              onClick={() => scrollToSection('aboutme')}
              className="text-gray-300 hover:text-primary transition-colors duration-300 text-lg font-medium relative group"
            >
              Sobre mim
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
            </button>
          </div>
          
          <div className="flex items-center space-x-4 md:space-x-6">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-800 text-gray-300 hover:bg-primary hover:text-white transition-all duration-300 text-xl hover:scale-110"
              aria-label="Alternar tema"
            >
              {theme === 'dark' ? <FaSun /> : <FaMoon />}
            </button>
            <a
              href="https://www.linkedin.com/in/matheus-de-oliveira-soares-1810631b5/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-primary transition-all duration-300 text-xl md:text-2xl hover:scale-110"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.instagram.com/mths_o_soares/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-primary transition-all duration-300 text-xl md:text-2xl hover:scale-110"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://github.com/mattspider"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-primary transition-all duration-300 text-xl md:text-2xl hover:scale-110"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Header

