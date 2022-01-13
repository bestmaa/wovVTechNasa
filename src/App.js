import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Details from './Details.js'
import "./App.css"

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="details" element={<Details />} />

      </Routes>    
    </BrowserRouter>
    </>
  )
}

export default App
