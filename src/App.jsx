import './App.css'

import Sobre from './pages/Sobre'
import Nav from './components/Nav'
import Home from './pages/Home'
import Down from './components/Down'
import { Route, Routes, useLocation } from 'react-router-dom'


import Login from './pages/Login'
import Catalogo from './pages/Catalogo'
import Teste from './components/Teste'



function App() {
  const location = useLocation();
  const ocultar = location.pathname === "/login" 

  return (
    <>
      {!ocultar && <Nav/>} 
      <Routes>
        <Route path='/' element={ <Home/> }/>
        <Route path='/sobre' element={ <Sobre/> }/>
        <Route path='/login' element={ <Login/> }/>
        <Route path='/catalogo' element={ <Catalogo/> }/>
        <Route path='/teste' element={ <Teste/> }/>
      </Routes>
      {!ocultar && <Down/>}

    </>
    
  )
}

export default App
