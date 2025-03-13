import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './component/Header/Header'
import Footer from './component/Footer/Footer'
import Main from './component/main/Main'
import About from './component/About/About'
import Skills from './component/Skills/Skills'
import Contact from './component/Contact/Contact'
import Project from './component/Project/Project'
import Signatures from './component/Signature/Signatures'
// import scroll from './component/index'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div id='mainContainer' className="main-container w-screen min-h-screen bg-black">
        <Header />
        <Main />
        <About />
        <Skills />
        <Contact />
        <Project />
        <Footer />


      </div>
      <script src="https://cdn.jsdelivr.net/npm/locomotive-scroll@3.5.4/dist/locomotive-scroll.min.js"></script>
    </>
  )
}

export default App
