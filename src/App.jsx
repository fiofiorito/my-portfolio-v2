import './App.css'
import HeroLayout from './components/HeroLayout/HeroLayout'
import NavBar from './components/navbar/navbar'

function App() {
  return (
    <div>
      <NavBar />
      <div className='container'>
        <HeroLayout />
      </div>

    </div>
  )
}

export default App
