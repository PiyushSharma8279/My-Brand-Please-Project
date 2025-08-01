import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import PrivateLabel from './Components/Home/PrivateLabel/PrivateLabel'
import About from './Pages/About/About'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}>
          <Route path="/" element={<PrivateLabel/>} />
          <Route path='/about' element={<About/>} />
          
          
          </Route>
          



        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
