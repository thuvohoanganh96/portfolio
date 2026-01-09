import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Education from './components/Education';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import ChatBot from './components/ChatBot';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-github-bg font-sans selection:bg-github-accent selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Education />
        <Experience />
        <Skills />
        <Projects />
      </main>
    </div>
  );
};

export default App;