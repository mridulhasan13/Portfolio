import React from 'react';
import ResearchCard from './ResearchCard';

const Publication: React.FC = () => {
  return (
    <section
      id="publication"
      className="scroll-mt-32 md:scroll-mt-36 pt-32 pb-20 sm:pt-36 sm:pb-24 md:pt-40 md:pb-32 bg-black min-h-screen relative overflow-hidden w-full max-w-full"
    >
      {/* Dynamic ambient background glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber-400/5 blur-[150px] rounded-full -z-10 translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-600/5 blur-[150px] rounded-full -z-10 -translate-x-1/2 translate-y-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-400 text-[10px] font-black uppercase tracking-[0.3em] mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
            Academic Scholarship
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-black text-white tracking-tighter leading-none uppercase">
            Research & <span className="gold-gradient italic">Publications</span>
          </h2>
          <p className="mt-4 sm:mt-6 text-neutral-400 max-w-2xl mx-auto font-light text-sm sm:text-base md:text-lg">
            Peer-reviewed book chapters, life-cycle sustainability frameworks, and methodological research in textile and industrial engineering.
          </p>
        </div>

        {/* Research Project Card */}
        <div className="max-w-5xl mx-auto">
          <ResearchCard />
        </div>

        {/* Academic Affiliation Note */}
        <div className="mt-20 sm:mt-28 pt-12 sm:pt-16 border-t border-neutral-900 text-center max-w-2xl mx-auto">
          <p className="font-mono text-xs text-neutral-500 uppercase tracking-widest mb-2">
            Institutional Affiliation
          </p>
          <p className="text-neutral-400 text-sm font-light">
            Department of Industrial & Production Engineering (IPE) · Bangladesh University of Textiles (BUTEX)
          </p>
        </div>
      </div>
    </section>
  );
};

export default Publication;
