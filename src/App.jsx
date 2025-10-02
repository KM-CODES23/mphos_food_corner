import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css'
import NavBar from './components/Navbar.jsx';

function App() {
  

  return (
    <>
      <Router>
      <NavBar/>
      </Router>
    </>
  )
}

export default App
