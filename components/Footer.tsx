import React from 'react';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';
import { USER_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-github-card border-t border-github-border py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <span className="text-2xl font-bold text-white tracking-tighter flex items-center gap-2">
                <Github className="w-6 h-6" />
                {USER_INFO.handle}
            </span>
            <p className="text-github-secondary text-sm mt-2">
              © {new Date().getFullYear()} {USER_INFO.name}. All rights reserved.
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a href="#" className="text-github-secondary hover:text-white transition-colors">
              <span className="sr-only">GitHub</span>
              <Github className="w-6 h-6" />
            </a>
            <a href="#" className="text-github-secondary hover:text-white transition-colors">
              <span className="sr-only">Twitter</span>
              <Twitter className="w-6 h-6" />
            </a>
            <a href="#" className="text-github-secondary hover:text-white transition-colors">
              <span className="sr-only">LinkedIn</span>
              <Linkedin className="w-6 h-6" />
            </a>
            <a href={`mailto:${USER_INFO.email}`} className="text-github-secondary hover:text-white transition-colors">
              <span className="sr-only">Email</span>
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;