import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Footer from './components/Footer';
import Projects from './components/Projects';
import Contact from './components/Contact';

import './App.css';

function App() {
  return (
    <React.Fragment>
      <Header />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </React.Fragment>

  );
}

export default App;
