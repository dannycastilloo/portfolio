import { Routes, Route, Navigate } from 'react-router-dom'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomeView from './views/HomeView'
import ProjectsView from './views/ProjectsView'
import BlogView from './views/BlogView'
import CurriculumView from './views/CurriculumView'

import './index.css'

function App() {

  return (
    <div className='font-poppins'>

      <div className="fixed bottom-8 right-6 z-50 mr-4 mb-6">
        <a href="https://wa.link/zvm7kf" target="_blank" rel="noopener noreferrer" className="py-6 px-9 rounded-full shadow-lg bg-brand600 relative hover:bg-brand700 transition-all duration-300">
          <img src="./icons/message.svg" alt="Contact Me" title="Contact Me" className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w--full" />
        </a>
      </div>

      <Navbar />

      <Routes>
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/" element={<HomeView />} />
        <Route path="/projects" element={<ProjectsView />} />
        <Route path="/blog" element={<BlogView />} />
        <Route path="/curriculum" element={<CurriculumView />} />
      </Routes>

      <Footer />
    </div>
  )
}

export default App
