// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import Footer from './components/Footer';

function App() {
  return (
    <>
    {/* <Navbar title = "Xtream Text Converter" home ="Home" aboutUs = "About" contactUs ="Contact"/> */}
    <Navbar title = "Xtream Text Converter"/>
    <TextForm heading ="Enter the Text below" />
    {/* <Footer/> */}
    </>
  );
}

export default App;
