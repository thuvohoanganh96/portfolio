import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ExternalLink, GitBranch, Play, Code2, Briefcase, ChevronLeft, ChevronRight } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  image: string;
  description: string;
  tags: string[];
  viewUrl?: string;
  videoUrl?: string;
  githubUrl?: string;
  githubFE?: string;
  githubBE?: string;
}

const PERSONAL_PROJECTS: Project[] = [
  {
    id: 1,
    title: "Email Template Editor",
    image: "/assets/email-template-editor.png",
    description:
      "A email template editor for customizing email template visually and export to html file.",
    tags: ["React", "TypeScript", "Email"],
    viewUrl: "https://email-template-editor-ashy.vercel.app/",
    githubUrl: "https://github.com/thuvohoanganh96/email-template-editor",
  },
  {
    id: 2,
    title: "E-Learning Platform",
    image: "/assets/ElearningPoject.png",
    description:
      "Udemy-inspired platform where users can browse categories, register for courses, watch video playlists, and manage their profile. Admins can perform full CRUD on courses, users, and registrations.",
    tags: ["React", "Redux", "Bootstrap", "Ant Design", "Node.js", "Express", "MongoDB", "JWT"],
    videoUrl: "https://www.youtube.com/watch?v=g9VuopIO3d4",
    githubFE: "https://github.com/thuvohoanganh96/Elearning",
    githubBE: "https://github.com/thuvohoanganh96/elearning-be",
  },
  {
    id: 3,
    title: "Lazy Loading Scrolling",
    image: "/assets/lazy-loading-page.png",
    description:
      "A pure JavaScript implementation of lazy loading for a user playlist — no frameworks, just efficient scroll-based rendering.",
    tags: ["JavaScript", "HTML", "CSS"],
    viewUrl: "https://lazy-loading-list-three.vercel.app/",
  },
];

const PET_PROJECTS = [
  {
    id: 1,
    title: "",
    image: "",
    viewUrl: "#",
    codeUrl: "#"
  },
  {
    id: 2,
    title: "",
    image: "/assets/project2.png",
    viewUrl: "https://anhthuvo.github.io/movie-project.github.io/",
    codeUrl: "https://github.com/anhthuvo/movie-project.github.io"
  },
  {
    id: 3,
    title: "",
    image: "/assets/ElearningPoject.png",
    viewUrl: "https://elearning-2002a.web.app/",
    codeUrl: "https://github.com/Justin-Ta/Elearning_Project"
  },
  {
    id: 4,
    title: "",
    image: "/assets/project3.png",
    viewUrl: "https://anhthuvo.github.io/Detail-Movie.github.io/",
    codeUrl: "https://github.com/anhthuvo/Detail-Movie.github.io"
  },
  {
    id: 5,
    title: "",
    image: "/assets/project4.png",
    viewUrl: "https://anhthuvo.github.io/housing-project.github.io/",
    codeUrl: "https://github.com/anhthuvo/housing-project.github.io"
  }
];

const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="flex flex-col bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-purple-500/40 hover:shadow-[0_0_30px_rgba(139,92,246,0.15)] transition-all duration-300 group"
    >
      {/* Image */}
      <div className="relative h-52 overflow-hidden bg-gray-900 flex-shrink-0">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 p-6 gap-4">
        <h3 className="text-xl font-bold text-white">{project.title}</h3>

        <p className="text-gray-400 text-sm leading-relaxed flex-1">{project.description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex flex-wrap gap-3 pt-2 border-t border-white/10">
          {project.viewUrl && (
            <a
              href={project.viewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-500 text-white text-sm font-medium transition-colors"
            >
              <ExternalLink size={14} />
              Live Demo
            </a>
          )}

          {project.videoUrl && (
            <a
              href={project.videoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-red-600/80 hover:bg-red-500 text-white text-sm font-medium transition-colors"
            >
              <Play size={14} />
              Watch Demo
            </a>
          )}

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/15 border border-white/10 text-white text-sm font-medium transition-colors"
            >
              <GitBranch size={14} />
              Code
            </a>
          )}

          {project.githubFE && (
            <a
              href={project.githubFE}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/15 border border-white/10 text-white text-sm font-medium transition-colors"
            >
              <GitBranch size={14} />
              FE
            </a>
          )}

          {project.githubBE && (
            <a
              href={project.githubBE}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/15 border border-white/10 text-white text-sm font-medium transition-colors"
            >
              <Code2 size={14} />
              BE
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const PetProjects: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(2);

  const next = () => activeIndex == PET_PROJECTS.length - 1 ? null : setActiveIndex((prev) => (prev + 1) % PET_PROJECTS.length);
  const prev = () => activeIndex == 0 ? null : setActiveIndex((prev) => (prev - 1 + PET_PROJECTS.length) % PET_PROJECTS.length);

  return (
    <section id="projects" className="py-24 bg-github-bg overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-light text-white text-center mb-20 tracking-[0.2em] uppercase"
        >
          Pet{" "}
          <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
            Projects
          </span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PERSONAL_PROJECTS.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        <div className="m-20">
          <h2 className="text-3xl font-bold text-white mb-4 flex items-center gap-3">
            <Briefcase className="text-blue-400" />
            Static UI Styling
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>

          <div className="relative flex justify-center items-center h-[600px] perspective-[2000px]">
            {/* Navigation Buttons */}
            <button
              onClick={prev}
              className="absolute left-4 z-50 p-3 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/20 transition-all"
            >
              <ChevronLeft size={32} />
            </button>
            <button
              onClick={next}
              className="absolute right-4 z-50 p-3 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/20 transition-all"
            >
              <ChevronRight size={32} />
            </button>

            <div className="relative w-full max-w-5xl flex justify-center items-center">
              {PET_PROJECTS.map((project, index) => {
                const offset = index - activeIndex;
                const absOffset = Math.abs(offset);
                const isActive = index === activeIndex;
                const scale = index === activeIndex ? 1.1 : (index == activeIndex - 1 || index == activeIndex + 1) ? 0.8 : 0.6;
                // Hide cards that are too far away
                if (absOffset > 2) return null;

                return (
                  <motion.div
                    key={project.id}
                    initial={false}
                    animate={{
                      x: offset * 260,
                      z: isActive ? 100 : -250,
                      scale: scale,
                      opacity: 1 - absOffset * 0.2,
                    }}
                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                    className="absolute w-[300px] sm:w-[380px] h-[480px] rounded-lg overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.6)] group cursor-pointer border border-white/10"
                    style={{
                      zIndex: 50 - absOffset * 10,
                      transformStyle: 'preserve-3d',
                    }}
                    onClick={() => setActiveIndex(index)}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105 bg-white"
                      referrerPolicy="no-referrer"
                    />

                    {/* Hover Overlay - Only show on active card or all? User said "when hover to the images" */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-6">
                      <motion.a
                        target="_blank"
                        href={project.viewUrl}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-36 py-3 bg-white text-black font-bold text-xl text-center border-2 border-white transition-all shadow-lg"
                      >
                        View
                      </motion.a>
                      <motion.a
                        target="_blank"
                        href={project.codeUrl}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-36 py-3 bg-transparent text-white font-bold text-xl text-center border-2 border-white transition-all shadow-lg"
                      >
                        Code
                      </motion.a>
                    </div>

                    {/* Project Info Overlay (Bottom) */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 via-black/40 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <p className="text-white font-bold text-xl">{project.title}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PetProjects;
