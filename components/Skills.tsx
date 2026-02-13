
import React, { useMemo } from 'react';

const Skills: React.FC = () => {
  const coreCategories = [
    {
      title: 'Design Engine',
      skills: ['Adobe Illustrator', 'Adobe Photoshop', 'Canva', 'Layout Architecture', 'Art Direction'],
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M14.58 2H24v20L14.58 2zM9.42 2H0v20L9.42 2zM12 9.17L16.67 20h-3.11l-.92-2.31h-3.28l-.92 2.31H5.33L10 9.17h2z" />
        </svg>
      )
    },
    {
      title: 'Development',
      skills: ['C Programming', 'Python', 'HTML5', 'CSS3', 'UI/UX Principles'],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      )
    },
    {
      title: 'Creative Arts',
      skills: ['Advanced Calligraphy', 'Editorial Design', 'Macro Photography', 'Content Strategy'],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
        </svg>
      )
    },
    {
      title: 'Operations',
      skills: ['Leadership', 'Event Orchestration', 'Strategic Planning', 'Public Speaking', 'Management'],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 011-1h1a2 2 0 100-4H7a1 1 0 01-1-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
        </svg>
      )
    }
  ];

  const languages = [
    { name: 'Bangla', level: 'Native', color: 'from-emerald-500/20 to-emerald-900/40', accent: 'text-emerald-400' },
    { name: 'English', level: 'Professional working', color: 'from-blue-500/20 to-blue-900/40', accent: 'text-blue-400' },
    { name: 'Hindi', level: 'Elementary', color: 'from-amber-500/20 to-amber-900/40', accent: 'text-amber-400' },
  ];

  const allSkillsAlphabetical = useMemo(() => {
    const flatCore = coreCategories.flatMap(cat => cat.skills);
    const flatLangs = languages.map(l => `${l.name} (${l.level})`);
    return Array.from(new Set([...flatCore, ...flatLangs])).sort((a, b) => a.localeCompare(b));
  }, []);

  return (
    <section id="skills" className="scroll-mt-20 py-32 bg-black relative overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-amber-400/20 to-transparent"></div>
      <div className="absolute top-40 -left-40 w-96 h-96 bg-amber-400/5 blur-[120px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <h3 className="text-amber-400 font-bold uppercase tracking-[0.3em] text-xs mb-4">Technical Arsenal</h3>
          <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-none uppercase">
            Skills & <span className="gold-gradient italic">Expertise</span>
          </h2>
        </div>

        {/* Alphabetical Skill Cloud */}
        <div className="mb-32">
          <div className="flex items-center gap-6 mb-12 justify-center">
            <div className="h-px bg-neutral-800 flex-grow max-w-[100px]"></div>
            <h4 className="text-xs font-black text-neutral-500 uppercase tracking-[0.4em] whitespace-nowrap">The Full Spectrum (A-Z)</h4>
            <div className="h-px bg-neutral-800 flex-grow max-w-[100px]"></div>
          </div>

          <div className="flex flex-wrap justify-center gap-3 max-w-5xl mx-auto">
            {allSkillsAlphabetical.map((skill, idx) => (
              <div
                key={idx}
                className="px-6 py-3 bg-neutral-900/50 border border-neutral-800 rounded-2xl text-neutral-400 text-xs font-bold uppercase tracking-widest hover:border-amber-400/40 hover:text-white transition-all duration-300 hover:scale-105 hover:bg-neutral-800 shadow-lg"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>

        {/* Categorized Deep Dives */}
        <div className="mb-32">
          <div className="flex items-center gap-6 mb-16 justify-center">
            <div className="h-px bg-neutral-800 flex-grow max-w-[100px]"></div>
            <h4 className="text-xs font-black text-neutral-500 uppercase tracking-[0.4em] whitespace-nowrap">Core Domains</h4>
            <div className="h-px bg-neutral-800 flex-grow max-w-[100px]"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreCategories.map((cat, idx) => (
              <div key={idx} className="group relative p-10 bg-neutral-900/20 rounded-[3rem] border border-neutral-800 hover:border-amber-400/30 transition-all duration-500 flex flex-col items-center text-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-amber-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                <div className="w-16 h-16 rounded-2xl bg-amber-400/10 flex items-center justify-center text-amber-400 mb-8 group-hover:scale-110 transition-transform duration-500 shadow-[0_0_20px_rgba(251,191,36,0.1)]">
                  {cat.icon}
                </div>

                <h4 className="text-white font-black text-xl mb-8 tracking-tighter uppercase">{cat.title}</h4>

                <div className="flex flex-wrap justify-center gap-2 mt-auto">
                  {cat.skills.map((skill, i) => (
                    <span key={i} className="px-3 py-1 bg-black/40 text-neutral-500 text-[10px] font-black uppercase tracking-wider rounded-lg border border-neutral-800 group-hover:border-neutral-700 group-hover:text-neutral-300 transition-all">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Languages - Full Width Page Section */}
        <div className="relative">
          <div className="flex items-center gap-6 mb-16 justify-center">
            <div className="h-px bg-neutral-800 flex-grow max-w-[100px]"></div>
            <h4 className="text-xs font-black text-neutral-500 uppercase tracking-[0.4em] whitespace-nowrap">Linguistic Proficiency</h4>
            <div className="h-px bg-neutral-800 flex-grow max-w-[100px]"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {languages.map((lang, idx) => (
              <div
                key={idx}
                className={`relative group h-[300px] lg:h-[400px] rounded-[3.5rem] overflow-hidden border border-neutral-800 transition-all duration-700 hover:border-amber-400/40 flex flex-col items-center justify-center text-center p-8 bg-gradient-to-br ${lang.color}`}
              >
                {/* Subtle glass effect for the card content */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500"></div>

                <div className="relative z-10">
                  <span className={`text-[10px] font-black uppercase tracking-[0.5em] mb-4 block ${lang.accent} opacity-80 group-hover:opacity-100 transition-opacity`}>
                    Level: {lang.level}
                  </span>
                  <h5 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase group-hover:scale-105 transition-transform duration-500">
                    {lang.name}
                  </h5>
                  <div className={`w-12 h-1 bg-white/20 mt-8 mx-auto rounded-full group-hover:w-24 group-hover:bg-amber-400/50 transition-all duration-700`}></div>
                </div>

                {/* Background decorative text */}
                <div className="absolute -bottom-10 -right-10 text-[150px] font-black text-white/[0.03] select-none uppercase pointer-events-none group-hover:text-white/[0.06] transition-colors duration-500">
                  {lang.name.charAt(0)}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <p className="text-neutral-500 text-xs font-medium tracking-[0.2em] uppercase max-w-lg mx-auto leading-relaxed">
              Fluent communication across diverse cultural landscapes, enabling seamless global collaboration and leadership.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
