import React from 'react'
import {BrowserRouter as Router,Routes,Route,} from "react-router-dom";
import Home from './Home'

import Header from "./components/header/header";
import Footer from "./components/Footer/Footer";

import Contact from './components/UI/Contact';
import Services1 from './components/UI/Services1';
import Services2 from './components/UI/Services2';
import Services3 from './components/UI/Services3';


import About from "./components/UI/About";
import Review from "./components/UI/Review_acc";
import Content from "./components/UI/Content";
import Seo from "./components/UI/Seo";
import Smm from "./components/UI/Smm";
import Website from "./components/UI/Website";
import Ap from "./components/UI/Ap";
import Crm from "./components/UI/Crm";
import Pos from "./components/UI/Pos";
import It from "./components/UI/It";
import Nonit from "./components/UI/Nonit";
import Faq from "./components/UI/Faq";




const App = () => {

  return (
    <>
      <Router basename='/'>
        <Header/>
        <Routes>
          <Route path='/' element={<Home />} />


          <Route path="/services1" element={<Services1 />}/>
          <Route path="/services2" element={<Services2 />}/>
          <Route path="/services3" element={<Services3 />}/>

          <Route path="/contact" element={<Contact />}/>

          <Route exact path="/About" component={About}/>
          <Route exact path="/Review" component={Review}/>
          <Route exact path="/Content" component={Content}/>
          <Route exact path="/Smm" component={Smm}/>
          <Route exact path="/Seo" component={Seo}/>
          <Route exact path="/Website" component={Website}/>
          <Route exact path="/Ap" component={Ap}/>
          <Route exact path="/Crm" component={Crm}/>
          <Route exact path="/Pos" component={Pos}/>
          <Route exact path="/It" component={It}/>
          <Route exact path="/Nonit" component={Nonit}/>
          <Route exact path="/Faq" component={Faq}/>
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
