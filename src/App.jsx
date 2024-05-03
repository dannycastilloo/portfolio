import { Routes, Route, Navigate } from 'react-router-dom'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomeView from './views/HomeView'
import ProjectsView from './views/ProjectsView'

import './index.css'

function App() {

  return (
    <div className='font-lato'>

      <Navbar />

      <Routes>
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/" element={<HomeView />} />
        <Route path="/projects" element={<ProjectsView />} />
      </Routes>

      <Footer />
    </div>
  )
}

export default App
