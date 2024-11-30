import './App.css'

import Sobre from './components/Sobre'
import Nav from './components/Nav'
import Home from './pages/Home'
import Down from './components/Down'
// import Login from './pages/Login'



function App() {
  
  return (
    <div className='w-full'>
      <Nav />
      <Home/>
      <Down />
      <Sobre />
    </div>
    
    
  )
}

export default App
