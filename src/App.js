import React,{useState,useEffect} from "react";

import './App.css';

import Header from "./components/header/header";
import Hero from "./components/UI/Hero";
import Counter from './components/UI/counter';
import Services from './components/UI/Services';
import About from './components/UI/About';
import Work from "./components/UI/Work";
import Testimonial from "./components/UI/Testimonial";
import Newsletter from "./components/UI/Newsletter";
import Footer from "./components/Footer/Footer";

function App() {

  const [theme, setTheme] = useState('')
  
  const toggleTheme = () => {
    theme === "" ? setTheme('light-theme') : setTheme('');
  }

  useEffect(()=>{
    document.body.className = theme
  },[theme]);

  return (
    <>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <Hero theme={theme} /> 
      <Counter />
      <Services />
      <About />
      <Work />
      <Testimonial />
      <Newsletter />
      <Footer />

    </>
  );
}

export default App;
