import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css'
import NavBar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Homepage from './pages/Homepage.jsx';
import Menupage from './pages/Menupage.jsx';
import Login from './pages/Login.jsx';
import Signup from './pages/Signup.jsx';

function App() {
  const [user, setUser] = useState(null);
    // 🔹 Check localStorage for logged-in user
  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) setUser(JSON.parse(savedUser));
  }, []);

  return (
    <>
      <Router>
      <NavBar user={user} setUser={setUser} />
      <div className='App'>
      

      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/menu' element={<Menupage/>}/>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Footer/>
      </div>
      </Router>
    </>
  )
}

export default App
