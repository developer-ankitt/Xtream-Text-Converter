// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
// import About from './components/About';
// import Footer from './components/Footer';

function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#1d2521';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>
    {/* <Navbar title = "Xtream Text Converter" home ="Home" aboutUs = "About" contactUs ="Contact"/> */}
    <Navbar title = "Xtream Text Converter" mode={mode} toggleMode={toggleMode} />
    <TextForm heading ="Enter the Text below" mode={mode} />
    {/* <About/> */}
    {/* <Footer/> */}
    </>
  );
}

export default App;
