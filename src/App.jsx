import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css'
import NavBar from './components/Navbar.jsx';
import Homepage from './pages/Homepage.jsx';

function App() {
  

  return (
    <>
      <Router>
      <NavBar/>

      <Routes>
        <Route path='/' element={<Homepage/>}/>
      </Routes>
      </Router>
    </>
  )
}

export default App
