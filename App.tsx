import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import ChatBot from './components/ChatBot';
import PetProjects from './components/PetProjects';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-github-bg font-sans selection:bg-github-accent selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Education />
        <Experience />
        <Skills />
        <PetProjects />
      </main>
    </div>
  );
};

export default App;