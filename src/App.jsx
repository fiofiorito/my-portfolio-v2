// components & styles
import { Route, Routes } from 'react-router'
import './App.css'
import HeroLayout from './components/HeroLayout/HeroLayout'
import NavBarContainer from './components/navbar/NavBarContainer'
import HomePage from './pages/HomePage/HomePage'
import ContactPage from './pages/ContactPage/ContactPage'
import StudiesPage from './pages/StudiesPage/StudiesPage'
import WorkExpPage from './pages/WorkExpPage/WorkExpPage'
import PortfolioPage from './pages/PortfolioPage/PortfolioPage'


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

    </main>
  )
}

export default App
