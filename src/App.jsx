import './App.css'


import Nav from './components/Nav'
import Home from './pages/Home'
import Login from './pages/Login'
import Footer from './components/Footer'


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
