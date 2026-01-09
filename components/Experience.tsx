import React from 'react';
import { EXPERIENCE } from '../constants';
import { Briefcase, ExternalLink, Code2 } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-gradient-to-b from-github-bg to-[#0a0d4a]/30">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col items-center md:items-start">
            <h2 className="text-3xl font-bold text-white mb-4 flex items-center gap-3">
                <Briefcase className="text-blue-400" />
                Experience
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
        </div>
        
        <div className="relative border-l-2 border-github-border ml-4 md:ml-8 space-y-16">
            {EXPERIENCE.map((exp) => (
                <div key={exp.id} className="relative pl-10 group">
                    {/* Timeline Dot */}
                    <div className="absolute -left-[11px] top-1.5 w-5 h-5 rounded-full bg-github-bg border-2 border-github-border group-hover:border-blue-500 group-hover:scale-125 transition-all z-10 flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-github-secondary group-hover:bg-blue-400"></div>
                    </div>
                    
                    <div className="flex flex-col mb-6">
                        <div className="flex flex-wrap items-baseline justify-between gap-4 mb-2">
                            <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                                {exp.role}
                            </h3>
                            <span className="text-sm font-mono text-blue-400 bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded-full">
                                {exp.duration}
                            </span>
                        </div>
                        
                        <div className="text-lg font-semibold text-github-text">
                            {exp.company}
                        </div>
                        <p className="mt-2 text-github-secondary max-w-3xl italic">
                            {exp.description}
                        </p>
                    </div>

                    {exp.projects && exp.projects.length > 0 && (
                        <div className="grid grid-cols-1 gap-4 mt-6">
                            {exp.projects.map((project, pIndex) => (
                                <div key={pIndex} className="bg-white/5 border border-white/5 hover:border-blue-500/30 p-5 rounded-xl transition-all group/project">
                                    <div className="flex justify-between items-start mb-2">
                                        <h4 className="font-bold text-white flex items-center gap-2">
                                            <Code2 className="w-4 h-4 text-blue-400" />
                                            {project.name}
                                        </h4>
                                        {project.link && (
                                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-github-secondary hover:text-white transition-colors">
                                                <ExternalLink className="w-4 h-4" />
                                            </a>
                                        )}
                                    </div>
                                    <div className="text-xs font-mono text-blue-300 mb-3 uppercase tracking-wider">
                                        {project.role}
                                    </div>
                                    <p className="text-sm text-gray-400 mb-4">
                                        {project.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies.map((tech, tIndex) => (
                                            <span key={tIndex} className="text-[10px] px-2 py-0.5 bg-blue-500/10 border border-blue-500/20 text-blue-200 rounded">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;