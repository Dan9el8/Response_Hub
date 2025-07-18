import React from 'react'

import Home from './home/home'
import AboutPage from './about/about'
import Hero from './Hero/hero'
import Services from './services/services'
import Footer from './footer/footer'
import Contacts from './contacts/contacts'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Learn from './learn/Learn'



const App = () => {
  return (
    <>

    <Home />    
    <Hero />
    <AboutPage />
    <Services />
    <Contacts />
    <Footer />
    
    
    
    
    </>
)
}

export default App


/**
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Pages from './components/Pages';
import Learn from './components/learn/Learn'; 

const App = () => {
  return (
    <Router>
      <Routes>
        
        <Route path="/" element={<Pages />} />

        
        <Route path="/learn" element={<Learn />} />
      </Routes>
    </Router>
  );
};

export default App;
**/
