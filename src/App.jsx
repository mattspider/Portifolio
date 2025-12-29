import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Education from './components/Education'
import About from './components/About'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <Hero />
      <Projects />
      <Skills />
      <Education />
      <About />
      <Footer />
    </div>
  )
}

export default App

