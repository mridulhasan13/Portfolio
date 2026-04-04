import React from 'react';

const Projects: React.FC = () => {
  const projects = [
    {
      name: 'Notemate.seu',
      description: 'A dedicated academic resource and note management platform tailored for university students.',
      languages: ['JavaScript 94.0%', 'CSS 5.9%'],
      url: 'https://github.com/mridulhasan13/Notemate.seu',
      accent: 'group-hover:border-amber-400/30',
      icon: (
        <img src="/notemate-logo.png" alt="Notemate Logo" className="w-8 h-8 object-contain drop-shadow-md group-hover:scale-110 transition-transform duration-300" />
      )
    },
    {
      name: 'Smart-Tutoring-Monitor',
      description: 'An intelligent system designed to monitor and enhance tutoring sessions with smart analytics and tracking.',
      languages: ['TypeScript 90.6%', 'JavaScript 5.3%', 'Python 3.0%'],
      url: 'https://github.com/mridulhasan13/Smart-Tutoring-Monitor',
      demoUrl: 'https://smarttutoringmonitor.netlify.app/',
      accent: 'group-hover:border-blue-500/30',
      icon: (
        <img src="/stm-logo.png" alt="Smart Tutoring Monitor Logo" className="w-8 h-8 object-contain drop-shadow-md group-hover:scale-110 transition-transform duration-300" />
      )
    },
    {
      name: 'Portfolio',
      description: 'My personal portfolio website built with React, TypeScript, and Tailwind CSS, featuring modern glassmorphism and dynamic animations.',
      languages: ['TypeScript 95.7%', 'HTML 2.9%', 'Python 1.4%'],
      url: 'https://github.com/mridulhasan13/Portfolio',
      demoUrl: 'https://mahmudulhasanmridul.netlify.app/',
      accent: 'group-hover:border-rose-500/30',
      icon: (
        <img src="/m-logo.svg" alt="Mridul Logo" className="w-7 h-7 object-contain opacity-80 group-hover:opacity-100 drop-shadow-md group-hover:scale-110 transition-all duration-300" />
      )
    }
  ];

  return (
    <section id="projects" className="py-32 bg-black relative overflow-hidden min-h-screen">
      {/* Vibrant Background Blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-400/5 blur-[120px] rounded-full -z-10 translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-600/5 blur-[150px] rounded-full -z-10 -translate-x-1/2 translate-y-1/2"></div>
      <div className="absolute top-1/2 left-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-from)_0%,_transparent_100%)] from-amber-400/[0.02] -z-10 -translate-x-1/2 -translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center mb-24 text-center mt-20">
          <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-none uppercase">
            My <span className="gold-gradient italic">Projects</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className={`group relative flex flex-col justify-between p-8 rounded-[2rem] bg-gradient-to-br from-neutral-900/80 to-black border border-white/5 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_15px_30px_-5px_rgba(0,0,0,0.5)] ${project.accent}`}
            >
              {/* Action Buttons Top Right */}
              <div className="absolute top-8 right-8 flex items-center gap-2 z-10">
                <a href={project.url} target="_blank" rel="noopener noreferrer" className="group/btn p-2 rounded-xl bg-white/5 border border-white/10 group-hover:border-white/20 hover:bg-white/20 hover:-translate-y-1 hover:scale-110 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-all duration-300">
                  <svg className="w-4 h-4 text-neutral-400 group-hover:text-neutral-200 group-hover/btn:text-white transition-colors" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                  </svg>
                </a>
                
                {project.demoUrl && (
                  <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="group/btn p-2 rounded-xl bg-white/5 border border-white/10 group-hover:border-white/20 hover:bg-white/20 hover:-translate-y-1 hover:scale-110 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-all duration-300">
                    <svg className="w-4 h-4 text-neutral-400 group-hover:text-neutral-200 group-hover/btn:text-white transition-colors" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                  </a>
                )}
              </div>

              <div>
                <div className="w-12 h-12 rounded-xl bg-neutral-800 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-neutral-800 transition-all duration-500">
                  {project.icon}
                </div>
                
                <h3 className="text-2xl font-black text-white tracking-tight mb-3 group-hover:text-amber-400 transition-colors">
                  {project.name}
                </h3>
                
                <p className="text-neutral-400 text-sm leading-relaxed mb-8">
                  {project.description}
                </p>
              </div>

              <div className="flex items-center justify-between mt-auto">
                <div className="flex flex-wrap gap-1.5 mt-1">
                  {project.languages.map((lang, i) => (
                    <span key={i} className="px-2 py-1 bg-amber-400/5 border border-amber-400/20 text-amber-400 text-[8px] font-bold uppercase tracking-wider rounded-lg">
                      {lang}
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

export default Projects;
