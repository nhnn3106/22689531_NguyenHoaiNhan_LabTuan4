import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import Login from './pages/Login'
import Contact from './pages/Contact'
import About from './pages/About'
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="blogs" element={<Login />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
