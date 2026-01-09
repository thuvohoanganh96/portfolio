import React from 'react';
import { PROJECTS } from '../constants';
import { Star, GitFork, BookOpen, ArrowUpRight } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="relative py-24 overflow-hidden">
      {/* Background Gradient - Purple Nebula Effect */}
      <div className="absolute inset-0 bg-[#010336]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/40 via-[#010336] to-[#010336] opacity-70"></div>
        <div className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[120px] mix-blend-screen"></div>
        <div className="absolute top-[40%] -left-[10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] mix-blend-screen"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center md:text-left">
            <h2 className="text-4xl font-bold text-white mb-4 tracking-tight">
              Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Projects</span>
            </h2>
            <p className="text-github-secondary text-lg max-w-2xl">
              Explorations in code, open source contributions, and digital experiments.
            </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project) => (
            <div key={project.id} className="group relative rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-8 transition-all duration-300 hover:border-purple-500/50 hover:bg-white/10 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] flex flex-col h-full">
              
              {/* Card Gradient Overlay */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>

              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-gradient-to-br from-purple-500/20 to-blue-500/20 text-purple-300 border border-white/5 group-hover:scale-110 transition-transform duration-300">
                        <BookOpen className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                        {project.name}
                    </h3>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-gray-500 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </div>
                
                <p className="text-gray-300 text-sm leading-relaxed mb-8 flex-grow">
                  {project.description}
                </p>
                
                <div className="flex items-center justify-between pt-6 border-t border-white/5 mt-auto">
                   <div className="flex items-center gap-6 text-xs font-medium text-gray-400">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full shadow-[0_0_8px_currentColor]" style={{color: getLanguageColor(project.language), backgroundColor: getLanguageColor(project.language)}}></span>
                        {project.language}
                      </div>
                      <div className="flex items-center gap-1 hover:text-white transition-colors">
                        <Star className="w-4 h-4" />
                        {project.stars.toLocaleString()}
                      </div>
                      <div className="flex items-center gap-1 hover:text-white transition-colors">
                        <GitFork className="w-4 h-4" />
                        {project.forks.toLocaleString()}
                      </div>
                   </div>
                   <div className="text-[10px] uppercase tracking-wider text-gray-500 font-semibold">
                      {project.updatedAt}
                   </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.topics.map(topic => (
                      <span key={topic} className="px-2.5 py-1 text-xs text-purple-200 bg-purple-500/10 border border-purple-500/20 rounded-full font-medium group-hover:bg-purple-500/20 transition-colors">
                          {topic}
                      </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Helper for language dot color
function getLanguageColor(lang: string) {
    switch(lang) {
        case 'TypeScript': return '#3178c6';
        case 'JavaScript': return '#f1e05a';
        case 'Go': return '#00ADD8';
        case 'Python': return '#3572A5';
        case 'Shell': return '#89e051';
        default: return '#ededed';
    }
}

export default Projects;