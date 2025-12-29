import React from 'react'
import { FaLinkedin, FaInstagram, FaGithub, FaHeart } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-gray-800 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-gray-400">
            <span>Feito com</span>
            <FaHeart className="text-red-500 animate-pulse" />
            <span>por Matheus de Oliveira Soares</span>
          </div>
          
          <div className="flex items-center gap-6">
            <a
              href="https://www.linkedin.com/in/matheus-de-oliveira-soares-1810631b5/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary transition-colors duration-300 text-xl hover:scale-110"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.instagram.com/mths_o_soares/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary transition-colors duration-300 text-xl hover:scale-110"
            >
              <FaInstagram />
            </a>
            <a
              href="https://github.com/mattspider"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary transition-colors duration-300 text-xl hover:scale-110"
            >
              <FaGithub />
            </a>
          </div>
          
          <div className="text-gray-500 text-sm">
            © {currentYear} Todos os direitos reservados
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

