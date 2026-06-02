
import React from 'react';
import { EducationItem } from '../types';
import BUTEXLogo from '../Logo/BUTEX.png';
import NDCLogo from '../Logo/NDC.png';
import SHKSCLogo from '../Logo/SHKSC-Logo-14.10.2020.png';

const Education: React.FC = () => {
  const education: EducationItem[] = [
    {
      institution: 'Bangladesh University of Textiles (BUTEX)',
      degree: 'B.Sc. in Textile Engineering (IPE)',
      year: '2025 – Present',
      achievements: ['Currently Studying (1st Year)', 'Focusing on Industrial & Production Engineering']
    },
    {
      institution: 'Notre Dame College, Dhaka',
      degree: 'Higher Secondary Certificate (HSC)',
      year: '2023 - 2024',
      gpa: '5.00/5.00',
      achievements: ['Aggregate: 89.9% (1169/1300)', 'Core Science Average: 98% (Phy, Chem, Math)']
    },
    {
      institution: 'Shamsul Hoque Khan School & College',
      degree: 'Secondary School Certificate (SSC)',
      year: '2020 - 2022',
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
    <section id="education" className="py-32 bg-black min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <h3 className="text-amber-400 font-bold uppercase tracking-[0.3em] text-xs mb-4">The Scholar</h3>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tighter">Academic Prowess</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          {education.map((edu, idx) => (
            <div
              key={idx}
              className="group relative p-8 rounded-[2.5rem] border border-neutral-800 bg-neutral-900/40 hover:border-amber-400/30 hover:bg-neutral-900/60 transition-all duration-500 overflow-hidden flex flex-col justify-between"
            >
              {/* Amber corner glow */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-amber-400/5 blur-[50px] rounded-full -mr-20 -mt-20 group-hover:bg-amber-400/10 transition-all duration-500 pointer-events-none" />

              <div className="flex-1 flex flex-col justify-start">
                {/* Header Row: Logo & Institution Info */}
                <div className="flex items-center gap-5 mb-7 text-left">
                  {/* Logo Container */}
                  <div className="w-16 h-16 sm:w-20 sm:h-20 shrink-0 bg-neutral-800 rounded-2xl p-2 sm:p-2.5 border border-neutral-700 flex items-center justify-center group-hover:scale-105 group-hover:border-amber-400/30 transition-all duration-500 shadow-md">
                    <img
                      src={getLogo(edu.institution)}
                      alt={edu.institution}
                      className="w-full h-full object-contain brightness-100 transition-all"
                      onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                    />
                  </div>

                  {/* Institution & Year */}
                  <div className="flex-1 min-w-0">
                    {/* Year badge */}
                    <span className="inline-flex items-center gap-1.5 text-amber-400 font-black text-[9px] uppercase tracking-[0.25em] mb-2">
                      {edu.year}
                    </span>
                    {/* Institution Name */}
                    <h4 className="text-base sm:text-lg md:text-xl font-extrabold text-white leading-snug group-hover:text-amber-400 transition-colors duration-300">
                      {edu.institution}
                    </h4>
                  </div>
                </div>

                {/* Degree */}
                <p className="text-neutral-400 text-sm mb-5 font-light text-left">{edu.degree}</p>

                {/* GPA badge */}
                {edu.gpa && (
                  <div className="mb-5 inline-flex items-center gap-2 px-3 py-1.5 bg-amber-400/5 border border-amber-400/20 rounded-full text-[9px] font-black uppercase tracking-widest w-fit">
                    <span className="text-neutral-500">Result</span>
                    <span className="text-amber-400">{edu.gpa}</span>
                  </div>
                )}
              </div>

              <div className="mt-6">
                {/* Divider */}
                <div className="w-full h-px bg-neutral-800 mb-5" />

                {/* Achievements */}
                <ul className="space-y-3 text-left">
                  {edu.achievements?.map((ach, i) => (
                    <li key={i} className="flex items-start gap-3 text-[11px] text-neutral-400 leading-relaxed group-hover:text-neutral-300 transition-colors">
                      <svg className="w-3.5 h-3.5 text-amber-400 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {ach}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
