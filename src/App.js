import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './layout/Header';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Contact from './pages/Contact';

import 'bootstrap/dist/css/bootstrap.min.css';
import './style.scss';

function App() {
  return (
    <Router>
      <Header />
      <body>
        <Home />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </body>
    </Router>
  );
}

export default App;
