import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <div style={{padding: '20px', background: 'red', color: 'white'}}>
        <h1>DEBUG: React is working!</h1>
        <p>If you can see this, React is rendering correctly.</p>
      </div>
      <Header />
      <main>
        <About />
        <Projects />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
