import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './Dashboard.jsx'
import Feedback from './Feedback.jsx'

function App() {
  

  return (
    <>
    <Routes>
      <Route path='/' element={<Dashboard/>} />
      <Route path='/feedback' element={<Feedback/>} />
    </Routes>

      
    </>
  )
}

export default App
