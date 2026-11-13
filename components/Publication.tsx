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

          <h2 className="text-4xl sm:text-5xl md:text-7xl font-black text-white tracking-tighter leading-none uppercase">
            Research & <span className="gold-gradient italic">Publications</span>
          </h2>
          <p className="mt-4 sm:mt-6 text-neutral-400 max-w-2xl mx-auto font-light text-sm sm:text-base md:text-lg">
            Peer-reviewed book chapters, life-cycle sustainability frameworks, and methodological research.
          </p>
        </div>

        {/* Research Project Card */}
        <div className="max-w-5xl mx-auto">
          <ResearchCard />
        </div>


      </div>
    </section>
  );
};

export default Publication;

