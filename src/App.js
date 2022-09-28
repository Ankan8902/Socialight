import React,{useState,useEffect} from "react";

import './App.css';

import Header from "./components/header/header";
import Hero from "./components/UI/Hero";
import Counter from './components/UI/counter';
import Services from './components/UI/Services';
import About from './components/UI/About';
import Work from "./components/UI/Work";

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

    </>
  );
}

export default App;
