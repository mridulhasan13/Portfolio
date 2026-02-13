
import React from 'react';

const Awards: React.FC = () => {
  const olympiads = [
    { title: 'Regional Winner', event: '19th Bangladesh Mathematical Olympiad', year: '2021', rank: 'WINNER' },
    { title: 'Champion', event: 'Physics Olympiad (Students Corner)', year: '2022', rank: 'CHAMPION' },
    { title: 'Project Selection', event: 'Children Science Congress', year: '2021', rank: 'SELECTED' },
    { title: 'Participant', event: 'International Nutrition Olympiad', year: '2022', rank: 'GLOBAL' },
    { title: 'Participant', event: '8th Bangladesh Junior Science Olympiad', year: '2022', rank: 'REGIONAL' },
    { title: 'Participant', event: '7th Bangladesh Junior Science Olympiad', year: '2021', rank: 'REGIONAL' },
  ];

  const clubAwards = [
    { title: "Organizer's Award", event: 'Notre Dame Science Club', year: '2024', rank: 'VALOR' },
    { title: 'Lifetime Member', event: 'Notre Dame Science Club', year: '2024', rank: 'HONOR' },
    { title: 'Honorable Mention', event: 'Notre Dame Science Club', year: '2023', rank: 'MERIT' },
    { title: 'Exceptional Dedication', event: 'Notre Dame Photography Club', year: '2024', rank: 'DISTINCTION' },
    { title: 'Club Contribution', event: 'SHKSC Debating Club Festival', year: '2023', rank: 'RECOGNIZED' },
  ];

  const recognitions = [
    { title: '2nd Place (Handwriting)', event: 'Creativity Blast 1.0', year: '2020', rank: 'SILVER' },
    { title: '24th Merit Position', event: 'Dhaka Education Board (SSC)', year: '2022', rank: 'BOARD MERIT' },
    { title: 'Finalist (Handwriting)', event: 'Classisist Bhasha Utshob', year: '2022', rank: 'FINALIST' },
    { title: 'Testimonial of Gratitude', event: 'Bidyanondo Fundraiser Carnival', year: '2020', rank: 'SERVICE' },
    { title: 'Science Camp Alumnus', event: 'Qudrat-E-Khuda Science Camp', year: '2021', rank: 'ALUMNI' },
  ];

  return (
    <section id="awards" className="py-32 bg-black min-h-screen relative overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-amber-400/5 blur-[120px] rounded-full -z-10 animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-blue-600/5 blur-[150px] rounded-full -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-32">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-400 text-[10px] font-black uppercase tracking-[0.3em] mb-6">
            Hall of Fame
          </div>
          <h2 className="text-5xl md:text-8xl font-black text-white tracking-tighter leading-none uppercase">
            Honors & <span className="gold-gradient italic">Accolades</span>
          </h2>
          <p className="mt-8 text-neutral-500 max-w-2xl mx-auto font-light text-lg">
            A comprehensive record of competitive excellence, organizational leadership, and creative milestones.
          </p>
        </div>

        {/* Featured Award Spotlight */}
        <div className="mb-32">
          <div className="relative group overflow-hidden rounded-[3rem] border border-amber-400/30 bg-neutral-900/40 p-12 backdrop-blur-xl">
             <div className="absolute top-0 right-0 w-64 h-64 bg-amber-400/10 blur-3xl -mr-32 -mt-32"></div>
             <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
               <div className="max-w-xl">
                 <span className="text-amber-400 font-black text-[10px] uppercase tracking-[0.5em] mb-4 block">Major Distinction</span>
                 <h3 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-6">24th Merit Position <br/><span className="text-neutral-500">Board Merit List</span></h3>
                 <p className="text-neutral-400 text-lg font-light leading-relaxed text-left">
                   Ranked 24th among 500,000+ students in the Dhaka Education Board for the Secondary School Certificate (SSC) examination 2022.
                 </p>
               </div>
               <div className="flex flex-col items-center md:items-end">
                 <div className="text-8xl font-black text-amber-400 leading-none tracking-tighter mb-2">24</div>
                 <span className="text-white font-bold uppercase tracking-[0.2em] text-xs">Merit Rank</span>
                 <div className="w-12 h-1 bg-amber-400 mt-4 rounded-full"></div>
               </div>
             </div>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-8">
          
          {/* Olympiad Section */}
          <div className="space-y-8">
            <div className="flex items-center gap-4 mb-8">
              <h4 className="text-xl font-black text-white uppercase tracking-tight">Olympiad</h4>
              <div className="h-px bg-gradient-to-r from-amber-400/30 to-transparent flex-grow"></div>
            </div>
            <div className="space-y-4">
              {olympiads.map((award, i) => (
                <AwardCard key={i} award={award} type="olympiad" />
              ))}
            </div>
          </div>

          {/* Club Section */}
          <div className="space-y-8">
            <div className="flex items-center gap-4 mb-8">
              <h4 className="text-xl font-black text-white uppercase tracking-tight">Club</h4>
              <div className="h-px bg-gradient-to-r from-amber-400/30 to-transparent flex-grow"></div>
            </div>
            <div className="space-y-4">
              {clubAwards.map((award, i) => (
                <AwardCard key={i} award={award} type="club" />
              ))}
            </div>
          </div>

          {/* Recognization Section */}
          <div className="space-y-8">
            <div className="flex items-center gap-4 mb-8">
              <h4 className="text-xl font-black text-white uppercase tracking-tight">Recognization</h4>
              <div className="h-px bg-gradient-to-r from-amber-400/30 to-transparent flex-grow"></div>
            </div>
            <div className="space-y-4">
              {recognitions.map((award, i) => (
                <AwardCard key={i} award={award} type="recognization" />
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Decorative Element */}
        <div className="mt-40 pt-20 border-t border-neutral-900 text-center">
           <div className="inline-flex items-center gap-4 text-neutral-600">
              <div className="w-8 h-px bg-neutral-800"></div>
              <p className="text-[10px] font-black uppercase tracking-[0.6em]">Academic Chronicle 2018-2025</p>
              <div className="w-8 h-px bg-neutral-800"></div>
           </div>
        </div>
      </div>
    </section>
  );
};

interface AwardCardProps {
  award: { title: string; event: string; year: string; rank: string };
  type: 'olympiad' | 'club' | 'recognization';
}

const AwardCard: React.FC<AwardCardProps> = ({ award }) => (
  <div className="group relative p-6 rounded-[1.5rem] border border-neutral-900 bg-neutral-900/10 hover:border-amber-400/20 transition-all duration-500">
    <div className="absolute inset-0 bg-gradient-to-br from-amber-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-[1.5rem]"></div>
    <div className="relative z-10 text-left">
      <div className="flex items-center justify-between mb-3">
        <span className="text-amber-400 font-black text-[8px] uppercase tracking-[0.2em] opacity-60">{award.rank}</span>
        <span className="text-neutral-600 font-bold text-[8px] uppercase">{award.year}</span>
      </div>
      <h5 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors leading-tight mb-1">{award.title}</h5>
      <p className="text-neutral-500 text-[11px] font-medium leading-relaxed">{award.event}</p>
    </div>
  </div>
);

export default Awards;
