
import React from 'react';
import { EducationItem } from '../types';
import BUTEXLogo from '../Logo/BUTEX.webp';
import NDCLogo from '../Logo/NDC.webp';
import SHKSCLogo from '../Logo/SHKSC-Logo-14.10.2020.webp';

const Education: React.FC = () => {
  const education: EducationItem[] = [
    {
      institution: 'Bangladesh University of Textiles (BUTEX)',
      degree: 'B.Sc. in Textile Engineering (IPE)',
      year: '2025 – Present',
      achievements: ['Currently Studying (2nd Year)', 'Major: Industrial & Production Engineering']
    },
    {
      institution: 'Notre Dame College, Dhaka',
      degree: 'Higher Secondary Certificate (HSC)',
      year: '2023 – 2024',
      gpa: '5.00/5.00',
      achievements: ['Aggregate: 89.9% (1169/1300)', 'Core Science Average: 98% (Phy, Chem, Math)']
    },
    {
      institution: 'Shamsul Hoque Khan School & College',
      degree: 'Secondary School Certificate (SSC)',
      year: '2016 – 2022',
      gpa: '5.00/5.00',
      achievements: ['24th Merit Position in Dhaka Education Board', 'Aggregate: 95.5% (1241/1300)', 'Core Science Average: 99.5% (Phy, Chem, Math)']
    }
  ];

  const getLogo = (name: string) => {
    if (name.includes('BUTEX')) return BUTEXLogo;
    if (name.includes('Notre Dame')) return NDCLogo;
    if (name.includes('Shamsul Hoque')) return SHKSCLogo;
    return '';
  };

  return (
    <section id="education" className="scroll-mt-32 md:scroll-mt-36 pt-32 pb-16 sm:pt-36 sm:pb-20 md:pt-40 md:pb-28 bg-black min-h-screen flex flex-col justify-start sm:justify-center w-full max-w-full overflow-hidden relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 w-full">
        <div className="text-center mb-8 sm:mb-12">
          <h3 className="text-amber-400 font-bold uppercase tracking-[0.3em] text-[10px] sm:text-xs mb-2 sm:mb-3">The Scholar</h3>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">Academic Prowess</h2>
        </div>

        {/* Clean Stacked Row Cards */}
        <div className="space-y-4 sm:space-y-5">
          {education.map((edu, idx) => (
            <div
              key={idx}
              className="group relative p-4 sm:p-6 rounded-2xl bg-neutral-950/70 border border-neutral-800/90 hover:border-amber-400/40 hover:bg-neutral-900/50 transition-all duration-300 shadow-xl"
            >
              {/* Subtle ambient amber corner glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-400/5 blur-[40px] rounded-full pointer-events-none group-hover:bg-amber-400/10 transition-all" />

              <div className="relative z-10 flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                {/* Left: Logo & Core Academic Details */}
                <div className="flex items-start gap-3.5 sm:gap-5 min-w-0 flex-1">
                  {/* Logo Container */}
                  <div className="w-12 h-12 sm:w-16 sm:h-16 shrink-0 bg-neutral-900 rounded-xl sm:rounded-2xl p-2 border border-neutral-800 flex items-center justify-center group-hover:scale-105 group-hover:border-amber-400/30 transition-all shadow-md">
                    <img
                      src={getLogo(edu.institution)}
                      alt={edu.institution}
                      className="w-full h-full object-contain brightness-100 transition-all"
                      onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                    />
                  </div>

                  {/* Institution, Degree & Achievements */}
                  <div className="min-w-0 flex-1 text-left">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <h4 className="text-sm sm:text-base md:text-lg font-bold text-white group-hover:text-amber-400 transition-colors leading-tight">
                        {edu.institution}
                      </h4>
                      {/* Mobile Year Badge */}
                      <span className="sm:hidden text-amber-400 font-mono font-bold text-[9px] uppercase tracking-wider ml-auto">
                        {edu.year}
                      </span>
                    </div>

                    <p className="text-neutral-400 text-xs sm:text-sm font-light mb-2.5">
                      {edu.degree}
                    </p>

                    {/* Achievements */}
                    <ul className="space-y-1.5 mt-2">
                      {edu.achievements?.map((ach, i) => (
                        <li key={i} className="flex items-start gap-2 text-[11px] sm:text-xs text-neutral-400 leading-relaxed group-hover:text-neutral-300 transition-colors">
                          <svg className="w-3.5 h-3.5 text-amber-400 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span>{ach}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Right: Year & Result on Desktop */}
                <div className="hidden sm:flex flex-col items-end justify-start shrink-0 text-right pt-0.5">
                  <span className="text-amber-400 font-mono font-bold text-xs uppercase tracking-wider mb-2">
                    {edu.year}
                  </span>
                  {edu.gpa && (
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-amber-400/10 border border-amber-400/20 rounded-full text-[10px] font-bold">
                      <span className="text-neutral-400 uppercase text-[9px]">Result</span>
                      <span className="text-amber-300 font-mono">{edu.gpa}</span>
                    </div>
                  )}
                </div>

                {/* Mobile Result Badge */}
                {edu.gpa && (
                  <div className="sm:hidden flex items-center justify-between pt-2 border-t border-neutral-800/80">
                    <span className="text-[10px] uppercase font-bold text-neutral-400">Official Result</span>
                    <span className="px-2 py-0.5 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-300 font-mono text-[10px] font-bold">
                      {edu.gpa}
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
