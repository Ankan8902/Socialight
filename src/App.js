// import React,{usestate,useEfffect, useEffect} from "react";

import './App.css';

import Header from "./components/header/header";
import Hero from "./components/UI/Hero";
import Counter from './components/UI/counter';
import Services from './components/UI/Services';
import About from './components/UI/About';

function App() {

  // const [theme, setTheme] = useState('');
  
  // const toggleTheme = () => {
  //   theme === "" ? setTheme('light-theme') : setTheme('');
  // }

  // useEffect(()=>{
  //   document.body.className = theme;
  // },[theme]);

  return (
    <>
      <Header />
      <Hero /> 
      <Counter />
      <Services />
      <About />
    </>
  );
}

export default App;
