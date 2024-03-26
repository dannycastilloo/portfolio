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
    <div className='font-lato'>

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
