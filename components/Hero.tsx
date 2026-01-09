import React from 'react';
import { USER_INFO } from '../constants';
import { Code } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-github-bg">
      {/* Background Gradient Effects */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
          {/* Main Top Center Glow */}
         <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-purple-600/30 rounded-full blur-[120px] mix-blend-screen opacity-60"></div>
         
         {/* Secondary Blue Glow */}
         <div className="absolute top-[10%] right-[10%] w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[100px] mix-blend-screen opacity-40"></div>
         
         {/* Accent Pink Glow */}
         <div className="absolute bottom-[20%] left-[10%] w-[400px] h-[400px] bg-pink-600/10 rounded-full blur-[80px] mix-blend-screen opacity-30"></div>
      </div>
      
      {/* Grid Lines Overlay */}
      <div className="absolute inset-0 z-0 opacity-[0.2]" 
           style={{ backgroundImage: 'linear-gradient(#1f2456 1px, transparent 1px), linear-gradient(90deg, #1f2456 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-github-border bg-github-card/50 backdrop-blur-sm mb-8 animate-fade-in-up">
           <div className="w-2 h-2 rounded-full bg-github-green animate-pulse"></div>
           <span className="text-sm font-medium text-github-text">Open for new opportunities</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6 leading-tight">
          Hi, I'm Thu Vo <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
             Software Engineer
          </span>
        </h1>
        
        <p className="mt-4 max-w-2xl text-xl text-github-secondary mb-10">
          {USER_INFO.bio}
        </p>
        
        {/* Code Snippet Decoration */}
        <div className="mt-20 w-full max-w-4xl bg-github-card border border-github-border rounded-lg shadow-2xl overflow-hidden transform rotate-1 hover:rotate-0 transition-transform duration-500">
            <div className="flex items-center px-4 py-2 border-b border-github-border bg-[#010336]">
                <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-[#fa7970]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#faa356]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#7ce38b]"></div>
                </div>
                <div className="ml-4 text-xs text-gray-500 font-mono">portfolio.tsx</div>
            </div>
            <div className="p-6 text-left overflow-x-auto">
                <pre className="text-sm md:text-base font-mono leading-relaxed">
                    <span className="text-[#ff7b72]">const</span> <span className="text-[#d2a8ff]">software_engineer</span> = <span className="text-[#ff7b72]">{`{`}</span>{'\n'}
                    {'  '}first name: <span className="text-[#a5d6ff]">"{USER_INFO.first_name}"</span>,{'\n'}
                    {'  '}family name: <span className="text-[#a5d6ff]">"{USER_INFO.family_name}"</span>,{'\n'}
                    {'  '}location: <span className="text-[#a5d6ff]">"{USER_INFO.location}"</span>,{'\n'}
                    {'  '}email: <span className="text-[#a5d6ff]">"{USER_INFO.email}"</span>,{'\n'}
                    <span className="text-[#ff7b72]">{`}`}</span>;
                </pre>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;