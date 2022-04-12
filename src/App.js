import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import pics from "./images/profile.png";
import Home from './components/Home';
import Nav from './components/Nav';
import './main.css';
import Footer from './components/Footer';
import About from './components/About';
import Project from './components/Project';
import { HireMe } from './components/HireMe';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav activeClassName="active" />
        <Routes>
          <Route path="/" element={ <Home pics={pics}/> } />
          <Route path="/about-me" element={ <About /> } />
          <Route path="/my-projects" element={ <Project /> } />
          <Route path="/contact" element={ <HireMe /> } />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App

