
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
      institution: 'Notre Dame College (NDC), Dhaka',
      degree: 'Higher Secondary Certificate (HSC)',
      year: '2024',
      gpa: '5.00/5.00',
      achievements: ['Average Mark: 91%', 'Core Science Average: 98% (Phy, Chem, Math)']
    },
    {
      institution: 'Shamsul Hoque Khan School & College',
      degree: 'Secondary School Certificate (SSC)',
      year: '2022',
      gpa: '5.00/5.00',
      achievements: ['24th Merit Position in Dhaka Education Board', 'Aggregate: 95.5% (1241/1300)', 'Average Mark: 97%']
    }
  ];

  // Map institutional logos
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

        <div className="grid md:grid-cols-3 gap-8">
          {education.map((edu, idx) => (
            <div key={idx} className="group glass p-10 rounded-[2.5rem] border border-neutral-800 hover:border-amber-400/20 transition-all flex flex-col h-full relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-400/5 blur-[40px] rounded-full -mr-16 -mt-16 group-hover:bg-amber-400/10 transition-all"></div>

              <div className="mb-10 w-20 h-20 bg-white/5 rounded-2xl p-3 border border-neutral-800 flex items-center justify-center group-hover:scale-105 transition-transform">
                <img
                  src={getLogo(edu.institution)}
                  alt={edu.institution}
                  className="w-full h-full object-contain brightness-90 group-hover:brightness-100"
                  onError={(e) => { (e.target as HTMLImageElement).src = 'https://via.placeholder.com/100?text=Logo'; }}
                />
              </div>

              <span className="text-amber-400 font-black text-[10px] uppercase tracking-[0.2em] mb-4">{edu.year}</span>
              <h4 className="text-2xl font-bold text-white mb-2 leading-tight group-hover:text-amber-400 transition-colors">{edu.institution}</h4>
              <p className="text-neutral-400 text-sm mb-6 font-light">{edu.degree}</p>

              {edu.gpa && (
                <div className="mb-8 inline-flex items-center gap-2 px-3 py-1 bg-neutral-800 rounded-full text-[9px] text-white font-black uppercase tracking-widest w-fit">
                  Result: <span className="text-amber-400">{edu.gpa}</span>
                </div>
              )}

              <ul className="space-y-4 mt-auto pt-8 border-t border-neutral-800/50">
                {edu.achievements?.map((ach, i) => (
                  <li key={i} className="text-[11px] text-neutral-500 flex items-start gap-3 leading-relaxed">
                    <span className="text-amber-400 mt-1 shrink-0">
                      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                    </span>
                    {ach}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
