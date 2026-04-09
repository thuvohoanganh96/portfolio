import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Briefcase, ChevronLeft, ChevronRight } from 'lucide-react';

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

const PetProjects: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(2);

  const next = () => activeIndex == PET_PROJECTS.length - 1? null : setActiveIndex((prev) => (prev + 1) % PET_PROJECTS.length);
  const prev = () => activeIndex == 0? null : setActiveIndex((prev) => (prev - 1 + PET_PROJECTS.length) % PET_PROJECTS.length);

  return (
    <section id="projects" className="py-24 bg-github-bg overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-light text-white text-center mb-20 tracking-[0.2em] uppercase">
          Pet <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">projects</span>
        </h2>

        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-4 flex items-center gap-3">
            <Briefcase className="text-blue-400" />
            Static UIs
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
        </div>
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

        {/* <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-4 flex items-center gap-3">
            <Briefcase className="text-blue-400" />
            Demo products
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
        </div> */}
      </div>
    </section>
  );
};

export default PetProjects;
