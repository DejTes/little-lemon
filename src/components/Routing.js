import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../routes/Home'
import Reservation from '../routes/Reservation'

const Routing = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/reservation" element={<Reservation />} />
    </Routes>
    </BrowserRouter>
  </>
  )
}

export default Routing
