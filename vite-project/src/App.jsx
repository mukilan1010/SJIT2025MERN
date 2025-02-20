import React from 'react';
import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import About from './components/functionalcomponents/About';
import Contact from './components/functionalcomponents/Contact';
import Gallery from './components/functionalcomponents/Gallery';
import Home from './components/functionalcomponents/Home';
import Login from './components/functionalcomponents/Login';
import NavBar from './components/functionalcomponents/NavBar';
import Signup from './components/functionalcomponents/Signup';
import UseEffect from './components/functionalcomponents/UseEffect';
import UseEffectApi from './components/functionalcomponents/useEffectAPI';
import UseRef from './components/functionalcomponents/UseRef';
import UseMemo from './components/functionalcomponents/UseMemo';


import {BrowserRouter,Routes,Route} from "react-router-dom";
function App() {
  return (   
      <main>
         <BrowserRouter>
         <NavBar/>
          <Routes>
            <Route path="/" element={<Home />} properties="sjit" sjit="Hello" />
            <Route path="/about" element={<About />} />
            <Route path="/useeffect" element={<UseEffect />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/login" element={<Login />} />
            <Route path="/navbar" element={<NavBar />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/useeffectapi" element={<UseEffectApi />} />
            <Route path="/useref" element={<UseRef />} />
            <Route path="/usememo" element={<UseMemo />} />

          </Routes>
          </BrowserRouter>
          
        
      </main>
  )
}
export default App;
