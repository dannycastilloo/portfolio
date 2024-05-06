import { Navigate, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomeView from './views/HomeView'

import './index.css'

function App() {

  return (
    <div className='font-lato'>

      <Navbar />

      <Routes>
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/" element={<HomeView />} />
      </Routes>

      <Footer />
    </div>
  )
}

export default App
