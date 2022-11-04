import React from "react";

import './App.css';




import Hero from "./components/UI/Hero";
import Counter from './components/UI/counter';
import Services from './components/UI/Services';
import About from './components/UI/About';
import Work from "./components/UI/Work";
import Testimonial from "./components/UI/Testimonial";
import Newsletter from "./components/UI/Newsletter";




function App() {


  return (

    <>
      
      <Hero/> 
      <Counter />
      <Services />
      <About />
      <Work />
      <Testimonial />
      <Newsletter />
     

    </>
  );
}

export default App;