import React,{useEffect,useState} from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Contact from './components/UI/Contact';
import Home from './Home'
import About from './components/UI/About';
import Service from './components/UI/Services';
import Header from "./components/header/header";
import Footer from "./components/Footer/Footer";

const App = () => {
  const [theme, setTheme] = useState('')
  
  const toggleTheme = () => {
    theme === "" ? setTheme('light-theme') : setTheme('');
  }

  useEffect(()=>{
    document.body.className = theme
  },[theme]);
  return (
    <>
      <BrowserRouter>
        <Header theme={theme} toggleTheme={toggleTheme} />
        <Routes>
          <Route path="/">
            <Route path='/' element={<Home />} />
            <Route path='#home' element={<Home />}/>
            <Route path='#service' element={<Service />}/>
            <Route path='#about' element={<About />}/>
            <Route path="/contact" element={<Contact />}/>
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
