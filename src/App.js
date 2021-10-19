import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Transitions from './components/Transitions';

import './App.css';

const App = () => {

  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Transitions />
      <Footer />
    </Router>
  );
};

export default App;
