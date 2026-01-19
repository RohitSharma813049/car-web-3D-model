import React from 'react'
import './App.css'
import { Routes , Route} from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import { ToastContainer } from 'react-toastify'
import Body from './pages/body'


function App() {
 

  return (
<>
    <Routes>
        <Route path="/" element={<Home/>}>
            <Route index element={<Body/>} />
            <Route  path='/car' element={<h1>car</h1>} />
            <Route  path='/login' element={<Login/>} />
            <Route  path='/register' element={<Register/>} />
        </Route>
    </Routes>
   <ToastContainer position="top-right" autoClose={2000} />
</>
  )
}

export default App
