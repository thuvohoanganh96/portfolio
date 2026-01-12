import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Updated as per user request: "Header include tabs Project, Experience and Skills"
  // Added Overview back as the landing/hero link is standard
  const navLinks = [
    { name: 'Overview', href: '#hero' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-panel border-b border-github-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            {/* Avatar with hover zoom effect */}
            <div className="relative group z-50">
                <img 
                    src="https://avatars.githubusercontent.com/u/1?v=4" 
                    alt="Profile" 
                    className="w-8 h-8 rounded-full border border-github-border cursor-pointer transition-transform duration-300 ease-out group-hover:scale-[3.5] group-hover:translate-x-6 group-hover:translate-y-8 group-hover:shadow-2xl" 
                />
            </div>
            
            <div className="hidden md:block ml-10">
              <div className="flex items-baseline space-x-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-github-text hover:text-white px-3 py-2 rounded-md text-sm font-semibold transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          <div className="hidden md:block">
            <a 
                href="/resume.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-github-card border border-github-border hover:border-github-secondary text-white px-4 py-1.5 rounded-md text-sm font-medium transition-all flex items-center gap-2"
            >
              Download CV
            </a>
          </div>

          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-github-bg border-b border-github-border">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a 
                href="/resume.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
                Download CV
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;