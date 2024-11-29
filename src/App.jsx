import './App.css'

import Footer from './components/Footer'

import Nav from './components/Nav'
import Home from './pages/Home'
import Login from './pages/Login'


function App() {
  

  return (
    
    <div className='w-full'>
      <Nav />
      <Home/>
      <Footer/>
      <Login/>
    </div>
    
    
  )
}

export default App
