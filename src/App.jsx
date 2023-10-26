// routing
import { Route, Routes } from 'react-router'
// components & styles
import './App.css'
import NavBarContainer from './components/navbar/NavBarContainer'
import HomePage from './pages/HomePage/HomePage'
import ContactPage from './pages/ContactPage/ContactPage'
import StudiesPage from './pages/StudiesPage/StudiesPage'
import WorkExpPage from './pages/WorkExpPage/WorkExpPage'
import PortfolioPage from './pages/PortfolioPage/PortfolioPage'
import Footer from './components/Footer/Footer'


function App() {
  return (
    <main>
      <NavBarContainer />
      <div className='container'>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/studies' element={<StudiesPage />} />
          <Route path='/workexperience' element={<WorkExpPage />} />
          <Route path='/portfolio' element={<PortfolioPage />} />
          <Route path='/contactme' element={<ContactPage />} />
        </Routes>
      </div>
      <Footer />
    </main>
  )
}

export default App


// TO DO
/*
- CONTACT ME COMPONENT
- ADD SMILEY FACE AS SVG
- MAKE BOOKS ON STUDY PAGE MOVE WHEN HOVERING OVER THEM

*/ 