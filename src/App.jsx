import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css'
import NavBar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Homepage from './pages/Homepage.jsx';

function App() {
  

  return (
    <>
      <Router>
      <div className='App'>
      <NavBar/>

      <Routes>
        <Route path='/' element={<Homepage/>}/>
      </Routes>
      <Footer/>
      </div>
      </Router>
    </>
  )
}

export default App
