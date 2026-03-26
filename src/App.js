import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import About from './pages/About'
import Projects from './pages/Projects'
import ProjectDetails from './components/ProjectDetails'
import Skills from './pages/Skills'
import Education from './pages/Education'
import Contact from './pages/Contact'

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <BrowserRouter>
      <Navbar toggleMenu={toggleMenu} />
      <div className="app-main-content">
        <div className='hero'>
          <Sidebar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path="/projects/:id" element={<ProjectDetails />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/skills-tools' element={<Skills />} />
            <Route path='/education' element={<Education />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
