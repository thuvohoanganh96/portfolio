import React from 'react';
import { SKILLS } from '../constants';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Cell } from 'recharts';

const Skills: React.FC = () => {
    // Group skills by category for a cleaner view
    const categories = Array.from(new Set(SKILLS.map(s => s.category)));

    return (
        <section id="skills" className="py-20 bg-github-bg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-white mb-12">Technical Proficiency</h2>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    

                    {/* Tags View */}
                    <div className="space-y-8">
                        {categories.map(category => (
                            <div key={category}>
                                <h3 className="text-lg font-semibold text-github-secondary mb-3 border-b border-github-border pb-2">{category}</h3>
                                <div className="flex flex-wrap gap-3">
                                    {SKILLS.filter(s => s.category === category).map(skill => (
                                        <div key={skill.name} className="flex items-center bg-github-card border border-github-border rounded-md px-3 py-2 hover:border-github-secondary transition-colors">
                                            <div className="flex-1">
                                                <div className="font-medium text-white">{skill.name}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;