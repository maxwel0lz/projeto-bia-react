import './App.css'

import Sobre from './components/Sobre'
import Nav from './components/Nav'
import Home from './pages/Home'
import Down from './components/Down'
import { Route, Routes } from 'react-router-dom'


import Login from './pages/Login'



function App() {
  
  return (
    <>
        <Nav/>
        <Routes>
          <Route path='/' element={ <Home/> }/>
          <Route path='sobre' element={ <Sobre/> }/>
          <Route path='login' element={ <Login/> }/>
        </Routes>
        <Down/>
    </>
    
  )
}

export default App
