import logo from './logo.svg';
import './App.css';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Reviews from './components/Reviews';
import Navbar from './components/Navbar';
import Features from './components/Features';
import Pricing from './components/Pricing';
import FAQS from './components/FAQS';
import UpComing from './components/UpComing';
function App() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <UpComing/>
    <Reviews/>
    
    <Features/>
    <FAQS/>
    <Footer/>
   
    </>
  );
}

export default App;
