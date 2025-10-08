import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css'
import NavBar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Homepage from './pages/Homepage.jsx';
import Menupage from './pages/Menupage.jsx';

function App() {
  

  return (
    <>
      <Router>
      <div className='App'>
      <NavBar/>

      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='*' element={<Menupage/>}/>
      </Routes>
      <Footer/>
      </div>
      </Router>
    </>
  )
}

export default App
