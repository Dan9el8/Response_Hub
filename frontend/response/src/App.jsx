import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Pages from './components/Pages';
import Learn from './components/learn/Learn'; 
import Analytics from './components/analytics/analytics';
import Report from './components/report/report';
import AccountForm from './components/account/account';


const App = () => {
  return (    
      <Routes>
        {/* Home Page (contains all sections) */}
        <Route path="/" element={<Pages />} />

        {/* Learn Page */}
        <Route path="/learn" element={<Learn />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/report" element={<Report />} />
        <Route path="/account" element={<AccountForm />} />
      </Routes>    
  );
};

export default App;


/**
import React from 'react'

import Home from './components/home/home'
import AboutPage from './components/about/about'
import Hero from './components/Hero/hero'
import Services from './components/services/services'
import Footer from './components/footer/footer'
import Contacts from './components/contacts/contacts'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Learn from './components/learn/Learn'



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
**/