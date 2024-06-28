import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Intro from './Components/Intro'
import Contact from './Components/Contact'
import Experience from './Components/Experience'
import Skills from './Components/Skills'
import Portfolio_Navbar from './Components/Portfolio_Navbar'
import Project from './Components/Project'
import About from './Components/About'
import Footer from './Components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Portfolio_Navbar/>
     <Intro/>
     <About/>
     <Experience/>
     <Skills/>
     <Project/>
     <Contact/>
     <Footer/>
    </>
  )
}

export default App
