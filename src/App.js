import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import About from './components/About';
import { Routes, Route } from "react-router-dom"
// import Footer from './components/Footer';


function App() {
  const [mode, setMode] = useState('dark'); // Whether dark mode is enabled or not

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#1d2521';
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>
      {/* <Navbar title = "Xtream Text Converter" home ="Home" aboutUs = "About" contactUs ="Contact"/> */}
      <Navbar title="Xtream Text Converter" mode={mode} toggleMode={toggleMode} />
        <Routes>
          <Route path="/" element={<TextForm heading="Enter the Text below" mode={mode} />} />
          <Route path="/about" element={<About />} />
        </Routes>
      {/* <Footer/> */}
    </>
  );
}

export default App;
