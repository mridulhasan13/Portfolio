import React from 'react';
import rawProjects from '../repos.json';

interface ProjectItem {
  name: string;
  description: string;
  languages: string[];
  url: string;
  demoUrl?: string;
  updatedAt: string;
  isPrivate?: boolean;
}

interface StyleProps {
  accent: string;
  glow: string;
  badge: string;
  textHover: string;
  glowColor: string;
}

const PROJECT_STYLES: { [key: string]: StyleProps } = {
  unigrid: {
    accent: 'group-hover:border-blue-500/40',
    glow: 'hover:shadow-[0_0_50px_rgba(59,130,246,0.15)]',
    badge: 'bg-blue-500/5 border-blue-500/20 text-blue-400',
    textHover: 'group-hover:text-blue-400',
    glowColor: 'from-blue-500/20 to-transparent'
  },
  aipe: {
    accent: 'group-hover:border-amber-400/40',
    glow: 'hover:shadow-[0_0_50px_rgba(251,191,36,0.15)]',
    badge: 'bg-amber-400/5 border-amber-400/20 text-amber-400',
    textHover: 'group-hover:text-amber-400',
    glowColor: 'from-amber-400/20 to-transparent'
  },
  vote: {
    accent: 'group-hover:border-rose-500/40',
    glow: 'hover:shadow-[0_0_50px_rgba(244,63,94,0.15)]',
    badge: 'bg-rose-500/5 border-rose-500/20 text-rose-400',
    textHover: 'group-hover:text-rose-400',
    glowColor: 'from-rose-500/20 to-transparent'
  },
  smart: {
    accent: 'group-hover:border-rose-500/40',
    glow: 'hover:shadow-[0_0_50px_rgba(244,63,94,0.15)]',
    badge: 'bg-rose-500/5 border-rose-500/20 text-rose-400',
    textHover: 'group-hover:text-rose-400',
    glowColor: 'from-rose-500/20 to-transparent'
  },
  notemate: {
    accent: 'group-hover:border-emerald-500/40',
    glow: 'hover:shadow-[0_0_50px_rgba(16,185,129,0.15)]',
    badge: 'bg-emerald-500/5 border-emerald-500/20 text-emerald-400',
    textHover: 'group-hover:text-emerald-400',
    glowColor: 'from-emerald-500/20 to-transparent'
  },
  portfolio: {
    accent: 'group-hover:border-cyan-500/40',
    glow: 'hover:shadow-[0_0_50px_rgba(6,182,212,0.15)]',
    badge: 'bg-cyan-500/5 border-cyan-500/20 text-cyan-400',
    textHover: 'group-hover:text-cyan-400',
    glowColor: 'from-cyan-500/20 to-transparent'
  }
};

const Projects: React.FC = () => {
  // Use loaded projects or fallback to hardcoded ones if the list is empty
  const hasLoadedProjects = Array.isArray(rawProjects) && rawProjects.length > 0;
  
  const projectsList: ProjectItem[] = hasLoadedProjects 
    ? (rawProjects as ProjectItem[]) 
    : [
        {
          name: 'AIPE-BUTEX',
          description: 'Official website for the Association of Industrial & Production Engineers-BUTEX',
          languages: ['HTML 97.9%', 'CSS 1.6%', 'JavaScript 0.5%'],
          url: 'https://github.com/mridulhasan13/AIPE-BUTEX',
          demoUrl: 'https://aipe-butex.netlify.app',
          updatedAt: '2026-06-01T00:00:00Z',
          isPrivate: true
        },
        {
          name: 'UniGrid',
          description: 'UniGrid is an enterprise-grade academic hub unifying the campus ecosystem across Android, iOS, and Web. Built with Flutter, Firebase, and Supabase, it centralizes real-time communication, dynamic calendars, grading ledgers, and multi-file repositories into a secure, scalable, and high-performance cross-platform solution.',
          languages: ['Dart 76.4%', 'HTML 17.0%'],
          url: 'https://github.com/mridulhasan13/UniGrid',
          demoUrl: 'https://unigrid.netlify.app/',
          updatedAt: '2026-05-29T00:00:00Z'
        },
        {
          name: 'Notemate.seu',
          description: 'A dedicated academic resource and note management platform tailored for university students.',
          languages: ['JavaScript 94.0%', 'CSS 5.9%'],
          url: 'https://github.com/mridulhasan13/Notemate.seu',
          updatedAt: '2026-04-01T00:00:00Z'
        },
        {
          name: 'Smart-Tutoring-Monitor',
          description: 'An intelligent system designed to monitor and enhance tutoring sessions with smart analytics and tracking.',
          languages: ['TypeScript 90.6%', 'JavaScript 5.3%', 'Python 3.0%'],
          url: 'https://github.com/mridulhasan13/Smart-Tutoring-Monitor',
          demoUrl: 'https://smarttutoringmonitor.netlify.app/',
          updatedAt: '2026-02-21T00:00:00Z'
        },
        {
          name: 'Portfolio',
          description: 'My personal portfolio website built with React, TypeScript, and Tailwind CSS, featuring modern glassmorphism and dynamic animations.',
          languages: ['TypeScript 95.7%', 'HTML 2.9%', 'Python 1.4%'],
          url: 'https://github.com/mridulhasan13/Portfolio',
          demoUrl: 'https://mahmudulhasanmridul.netlify.app/',
          updatedAt: '2026-05-09T00:00:00Z'
        }
      ];

  const getProjectStyle = (name: string, index: number): StyleProps => {
    const lowerName = name.toLowerCase();
    if (lowerName.includes('unigrid')) return PROJECT_STYLES.unigrid;
    if (lowerName.includes('aipe-butex') || lowerName.includes('aipe')) return PROJECT_STYLES.aipe;
    if (lowerName.includes('vote-for-ipe-cr') || lowerName.includes('vote')) return PROJECT_STYLES.vote;
    if (lowerName.includes('smart-tutoring') || lowerName.includes('tutoring')) return PROJECT_STYLES.smart;
    if (lowerName.includes('notemate')) return PROJECT_STYLES.notemate;
    if (lowerName === 'portfolio' || lowerName === 'mh-mridul---portfolio') return PROJECT_STYLES.portfolio;
    
    // Cycle styles for other repositories based on index
    const keys = Object.keys(PROJECT_STYLES);
    const key = keys[index % keys.length];
    return PROJECT_STYLES[key];
  };

  const getProjectIcon = (name: string) => {
    const lowerName = name.toLowerCase();
    if (lowerName.includes('notemate')) {
      return <img src="/notemate-logo.png" alt="Notemate Logo" className="w-8 h-8 object-contain drop-shadow-md group-hover:scale-110 transition-transform duration-300" />;
    }
    if (lowerName.includes('smart-tutoring') || lowerName.includes('tutoring')) {
      return <img src="/stm-logo.png" alt="Smart Tutoring Monitor Logo" className="w-8 h-8 object-contain drop-shadow-md group-hover:scale-110 transition-transform duration-300" />;
    }
    if (lowerName === 'portfolio' || lowerName === 'mh-mridul---portfolio') {
      return <img src="/m-logo.svg" alt="Mridul Logo" className="w-7 h-7 object-contain opacity-80 group-hover:opacity-100 drop-shadow-md group-hover:scale-110 transition-all duration-300" />;
    }
    if (lowerName.includes('unigrid')) {
      return <img src="/unigrid-logo.png" alt="UniGrid Logo" className="w-8 h-8 object-contain drop-shadow-md group-hover:scale-110 transition-transform duration-300" />;
    }
    if (lowerName.includes('aipe-butex')) {
      return <img src="/aipe-butex-logo.png" alt="AIPE BUTEX Logo" className="w-8 h-8 object-contain drop-shadow-md group-hover:scale-110 transition-transform duration-300" />;
    }
    if (lowerName.includes('butexdc')) {
      return <img src="/butexdc-logo.png" alt="BUTEX Debating Club Logo" className="w-8 h-8 object-contain drop-shadow-md group-hover:scale-110 transition-transform duration-300" />;
    }
    if (lowerName.includes('satprp') || lowerName.includes('sat-prp')) {
      return (
        <svg className="w-6 h-6 text-neutral-400 group-hover:text-amber-400 transition-colors duration-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
        </svg>
      );
    }
    if (lowerName.includes('vote-for-ipe-cr') || lowerName.includes('vote')) {
      return (
        <svg className="w-6 h-6 text-neutral-400 group-hover:text-rose-500 transition-colors duration-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      );
    }
    
    // Sleek default SVG code icon
    return (
      <svg className="w-6 h-6 text-neutral-400 group-hover:text-amber-400 transition-colors duration-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    );
  };

  const getProjectDemoUrl = (name: string, originalDemoUrl?: string) => {
    const lowerName = name.toLowerCase();
    if (lowerName.includes('aipe-butex')) {
      return 'https://aipe-butex.netlify.app';
    }
    if (lowerName.includes('unigrid')) {
      return 'https://unigrid.netlify.app/';
    }
    if (lowerName.includes('vote-for-ipe-cr') || lowerName.includes('vote')) {
      return 'https://voteforipe.netlify.app/';
    }
    if (lowerName.includes('notebot')) {
      return 'https://notebot3.netlify.app';
    }
    if (lowerName.includes('butexdc')) {
      return 'https://butexdc.netlify.app';
    }
    if (lowerName.includes('satprp') || lowerName.includes('sat-prp')) {
      return 'https://sat-prp4.netlify.app/';
    }
    return originalDemoUrl || '';
  };

  const getProjectDescription = (name: string, originalDescription?: string) => {
    const lowerName = name.toLowerCase();
    if (lowerName.includes('satprp') || lowerName.includes('sat-prp')) {
      return 'An interactive diagnostic, tracking, and mock testing platform designed to help students master the Scholastic Assessment Test (SAT) with real-time scoring and custom analytics.';
    }
    if (lowerName.includes('notebot')) {
      return 'An automated academic note management and assistant platform designed to streamline study resources for students. This is an updated UI model of https://notebot.netlify.app/';
    }
    if (lowerName.includes('butexdc')) {
      return 'Official website for the BUTEX Debating Club (Est. 1993) built with Vanilla JS, featuring interactive event showcases, debate archives, and member directories.';
    }
    if (lowerName.includes('notemate')) {
      return 'A dedicated academic resource and note management platform tailored for university students.';
    }
    if (lowerName.includes('smart-tutoring') || lowerName.includes('tutoring')) {
      return 'An intelligent system designed to monitor and enhance tutoring sessions with smart analytics and tracking.';
    }
    if (lowerName === 'portfolio' || lowerName === 'mh-mridul---portfolio') {
      return 'My personal portfolio website built with React, TypeScript, and Tailwind CSS, featuring modern glassmorphism and dynamic animations.';
    }
    if (lowerName.includes('vote-for-ipe-cr') || lowerName.includes('vote')) {
      return 'A digital voting system built for class representative elections in the Industrial & Production Engineering department.';
    }
    if (lowerName.includes('aipe-butex')) {
      return 'Official website for the Association of Industrial & Production Engineers-BUTEX, showcasing organizational news, events, and member directories.';
    }
    if (lowerName.includes('unigrid')) {
      return 'An enterprise-grade academic hub unifying the campus ecosystem across Android, iOS, and Web with real-time communication, grading ledgers, and secure file repositories.';
    }
    return originalDescription || '';
  };

  const renderFormattedDescription = (text: string) => {
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    const parts = text.split(urlRegex);

    return parts.map((part, index) => {
      if (part.match(urlRegex)) {
        return (
          <a
            key={index}
            href={part}
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-400 hover:text-amber-300 underline underline-offset-2 font-medium transition-colors cursor-pointer relative z-20"
            onClick={(e) => e.stopPropagation()}
          >
            {part}
          </a>
        );
      }
      return part;
    });
  };

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
          {(() => {
            const SORT_ORDER = ['unigrid', 'aipe', 'butexdc', 'smart', 'notebot', 'satprp'];
            const sortedProjects = [...projectsList].sort((a, b) => {
              const getIndex = (name: string) => {
                const lower = name.toLowerCase();
                const idx = SORT_ORDER.findIndex(key => lower.includes(key));
                return idx !== -1 ? idx : 99;
              };
              return getIndex(a.name) - getIndex(b.name);
            });

            return sortedProjects.map((project, index) => {
              const style = getProjectStyle(project.name, index);
              const demoUrl = getProjectDemoUrl(project.name, project.demoUrl);
              const description = getProjectDescription(project.name, project.description);
            
            // Clean up languages: Only show those with >= 1.0% usage and cap to maximum of 4 items
            const filteredLanguages = project.languages
              .filter(lang => {
                const match = lang.match(/([\d.]+)/);
                if (match) {
                  const percentage = parseFloat(match[1]);
                  return percentage >= 1.0;
                }
                return true;
              })
              .slice(0, 4);

            return (
              <div 
                key={index} 
                className={`group relative flex flex-col justify-between p-8 rounded-[2rem] bg-gradient-to-br from-neutral-900/80 to-black border border-white/5 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 ${style.glow} ${style.accent} overflow-hidden`}
              >
                {/* Glowing Color Bleed inside the card */}
                <div className={`absolute -right-16 -top-16 w-48 h-48 bg-gradient-to-br ${style.glowColor} blur-[60px] rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none -z-10`}></div>

                {/* Action Buttons Top Right */}
                <div className="absolute top-8 right-8 flex items-center gap-2 z-10">
                  {project.isPrivate ? (
                    <div 
                      title="Private Repository — Source code protected" 
                      className="p-2 rounded-xl bg-white/5 border border-white/10 text-neutral-500 cursor-not-allowed opacity-60 flex items-center justify-center"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                      </svg>
                    </div>
                  ) : (
                    <a 
                      href={project.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      title="View GitHub Repository"
                      className="group/btn p-2 rounded-xl bg-white/5 border border-white/10 group-hover:border-white/20 hover:bg-white/20 hover:-translate-y-1 hover:scale-110 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-all duration-300"
                    >
                      <svg className="w-4 h-4 text-neutral-400 group-hover:text-neutral-200 group-hover/btn:text-white transition-colors" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                      </svg>
                    </a>
                  )}
                  
                  {demoUrl && (
                    <a 
                      href={demoUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      title="Live Demo"
                      className="group/btn p-2 rounded-xl bg-white/5 border border-white/10 group-hover:border-white/20 hover:bg-white/20 hover:-translate-y-1 hover:scale-110 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-all duration-300"
                    >
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
                    {getProjectIcon(project.name)}
                  </div>
                  
                  <div className="flex items-center flex-wrap gap-2 mb-3">
                    <h3 className={`text-2xl font-black text-white tracking-tight transition-colors duration-300 ${style.textHover}`}>
                      {project.name}
                    </h3>
                    {project.isPrivate && (
                      <span className="px-2 py-0.5 bg-white/5 border border-white/10 text-white/60 text-[8px] font-bold uppercase tracking-wider rounded-md inline-flex items-center gap-1 backdrop-blur-md">
                        <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                        </svg>
                        Private
                      </span>
                    )}
                  </div>
                  
                  <p className="text-neutral-400 text-sm leading-relaxed mb-8 min-h-[72px]">
                    {renderFormattedDescription(description)}
                  </p>
                </div>

                <div className="flex items-center justify-between mt-auto">
                  <div className="flex flex-wrap gap-1.5 mt-1">
                    {filteredLanguages.map((lang, i) => (
                      <span key={i} className={`px-2 py-1 border text-[8px] font-bold uppercase tracking-wider rounded-lg transition-colors duration-300 ${style.badge}`}>
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          });
        })()}
        </div>
      </div>
    </section>
  );
};

export default Projects;
