import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ParticleBackground from './components/ParticleBackground';
import './App.css';

function App() {
  return (
    <div className="App">
      <ParticleBackground />
      <div className="content-wrapper">
        <Header />
        <main>
          <About />
          <Projects />
          <Resume />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
