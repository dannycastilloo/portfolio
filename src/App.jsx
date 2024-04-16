import { Routes, Route, Navigate } from 'react-router-dom'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomeView from './views/HomeView'
import ProjectsView from './views/ProjectsView'
import BlogView from './views/BlogView'
import ResumeView from './views/ResumeView'

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
        <Route path="/resume" element={<ResumeView />} />
      </Routes>

      <Footer />
    </div>
  )
}

export default App
