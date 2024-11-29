import './App.css'


import Nav from './components/Nav'
import Home from './pages/Home'
import Login from './pages/Login'



function App() {
  

  return (
    
    <div className='w-full'>
      <Nav />
      <Home/>
      
      <Login/>
    </div>
    
    
  )
}

export default App
