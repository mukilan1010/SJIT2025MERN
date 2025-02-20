import React from 'react';
import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import About from './components/functionalcomponents/about';
import Contact from './components/functionalcomponents/contact';
import Gallery from './components/functionalcomponents/gallery';
import Home from './components/functionalcomponents/home';
import Login from './components/functionalcomponents/login';
import NavBar from './components/functionalcomponents/navbar';
import Signup from './components/functionalcomponents/signup';
import UseEffect from './components/functionalcomponents/UseEffect';

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

          </Routes>
          </BrowserRouter>
          
        
      </main>
  )
}
export default App
