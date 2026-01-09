import React from 'react';
import { EDUCATION } from '../constants';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';

const Education: React.FC = () => {
  return (
    <section id="education" className="relative py-20 overflow-hidden bg-github-bg">
      {/* Background Ambient Glow */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent opacity-50"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-2 flex items-center gap-3">
              <GraduationCap className="text-purple-400" />
              Education
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {EDUCATION.map((edu) => (
            <div key={edu.id} className="group relative rounded-xl border border-github-border bg-github-card/40 backdrop-blur-md p-6 hover:border-purple-500/50 transition-all duration-300">
              <div className="flex flex-col h-full">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 rounded-lg bg-purple-500/10 text-purple-400 group-hover:scale-110 transition-transform">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono text-github-secondary bg-github-bg border border-github-border px-2 py-1 rounded flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {edu.duration}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                  {edu.degree}
                </h3>
                
                <p className="text-github-secondary font-medium mb-4">
                  {edu.institution}
                </p>

                <p className="text-github-secondary font-medium mb-4">
                  GPA: {edu.gpa}
                </p>

                <div className="mt-auto pt-4 border-t border-white/5 flex items-center text-sm text-gray-400">
                  <MapPin className="w-4 h-4 mr-2 text-purple-400" />
                  {edu.location}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;