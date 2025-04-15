import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Result from './pages/Result'
import Navbar from './components/Navbar'

import BuyCredit from './pages/BuyCredit'
const App = () => {
  return (
    <div className="bg-gradient-to-r from-white via-cyan-100 to-white text-white min-h-screen">
      <Navbar/>
       <Routes>
        <Route path="/result" element={<Result/>} />
        <Route path="/" element={<Home/>} />
        <Route path="/buy" element={<BuyCredit/>} />
       </Routes>
    </div>
  )
}

export default App
