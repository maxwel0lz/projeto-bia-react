import './App.css'

import Sobre from './components/Sobre'
import Nav from './components/Nav'
import Home from './pages/Home'
import Footer from './components/Footer'

// import Login from './pages/Login'



function App() {
  
  return (
    <div className='w-full'>
      <Nav />
      <Home/>
      <Footer />
      <Sobre />
    </div>
    
    
  )
}

export default App
