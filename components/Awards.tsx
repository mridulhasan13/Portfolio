
import React from 'react';
import exhibitionPhoto1 from '../src/assets/Photo_Mridul_01521757204_4.png';

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

  const exhibitionPhotos = [
    {
      title: 'Pure Chemicals Ltd. presents নীরবতায় কলরব ৭.০, organized by 𝗔𝗥𝗧𝗲𝘅 – 𝗔𝗿𝘁 & 𝗣𝗵𝗼𝘁𝗼𝗴𝗿𝗮𝗽𝗵𝘆 𝗖𝗹𝘂𝗯 𝗼𝗳 𝗕𝗨𝗧𝗘𝗫',
      event: 'ARTex Exhibition',
      year: '2025',
      rank: 'EXHIBITED',
      src: exhibitionPhoto1,
      link: 'https://www.facebook.com/photo/?fbid=1538635878261494&set=pcb.1538767354915013'
    }
  ];

  const mediaCoverages = [
    {
      outlet: 'Textile Times',
      badge: 'FEATURED ARTICLE',
      title: 'BUTEX Student Develops UniGrid, an All-in-One App to Simplify Academic Life',
      bengaliTitle: "বুটেক্সিয়ানদের একাডেমিক জীবন সহজ করতে অল-ইন-ওয়ান অ্যাপ 'UniGrid' তৈরি করলেন ৫১ তম ব্যাচের শিক্ষার্থী মৃদুল",
      description: 'Featured for engineering UniGrid — an all-in-one digital platform designed to simplify academic activities for university students by centralizing class routines, departmental notices with file attachments, lecture slides, study materials, and automated class test reminders.',
      year: '2026',
      image: '/news-textiletimes.png',
      primaryLink: 'https://lnkd.in/p/gjRUXt4s',
      links: [
        { name: 'LinkedIn', url: 'https://lnkd.in/p/gjRUXt4s' },
        { name: 'Facebook', url: 'https://www.facebook.com/share/p/1GZiiuJYAv/' },
        { name: 'Instagram', url: 'https://www.instagram.com/p/DeR5ob4nxRD/' }
      ]
    },
    {
      outlet: 'The Seven Digit Post',
      badge: 'PRESS COVERAGE',
      title: 'Campus Tech Spotlight: Student Innovation Behind the UniGrid Platform',
      bengaliTitle: "বুটেক্সিয়ানদের একাডেমিক জীবন সহজ করতে অল-ইন-ওয়ান অ্যাপ 'UniGrid' তৈরি করলেন ৫১ তম ব্যাচের শিক্ষার্থী মৃদুল",
      description: 'Campus media feature showcasing Mahmudul Hasan Mridul (51st Batch, Department of IPE, BUTEX) and his software engineering work on the UniGrid student ecosystem.',
      year: '2026',
      image: '/news-thesevendigitpost.png',
      primaryLink: 'https://www.facebook.com/share/p/1GkntcE2SL/',
      links: [
        { name: 'Facebook', url: 'https://www.facebook.com/share/p/1GkntcE2SL/' }
      ]
    }
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
                <h3 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-6">24th Merit Position <br /><span className="text-neutral-500">Board Merit List</span></h3>
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

        {/* Press & Media Features Section */}
        <div className="mt-32">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-400 text-[10px] font-black uppercase tracking-[0.3em] mb-6">
              Media Spotlight
            </div>
            <h3 className="text-4xl md:text-5xl font-black text-white tracking-tighter uppercase">
              Featured in <span className="gold-gradient italic">the News</span>
            </h3>
            <p className="mt-4 text-neutral-500 font-light max-w-2xl mx-auto">
              Media appearances and press coverage highlighting software engineering achievements, technological innovation, and campus leadership.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto auto-rows-fr">
            {mediaCoverages.map((item, i) => (
              <div 
                key={i}
                className="group relative p-8 md:p-10 rounded-[2rem] border border-neutral-900 bg-neutral-900/20 hover:border-amber-400/30 transition-all duration-500 flex flex-col justify-between h-full overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-amber-400/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                <div className="relative z-10 text-left flex flex-col flex-1">
                  {/* News Clipping Poster Image */}
                  {item.image && (
                    <a
                      href={item.primaryLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block relative mb-6 rounded-2xl overflow-hidden border border-white/10 bg-neutral-950 w-full group/img cursor-pointer shadow-2xl shrink-0"
                      style={{ aspectRatio: '4 / 5' }}
                      title="Click to view full feature"
                    >
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover/img:scale-[1.01]"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-white/0 group-hover/img:bg-white/[0.03] transition-colors pointer-events-none"></div>
                    </a>
                  )}

                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-400 font-black text-[9px] uppercase tracking-[0.2em]">
                      {item.badge}
                    </span>
                    <span className="text-neutral-500 font-bold text-xs">{item.year}</span>
                  </div>

                  <p className="text-xs uppercase tracking-widest font-black text-neutral-400 mb-2">
                    {item.outlet}
                  </p>

                  <h4 className="text-xl md:text-2xl font-bold text-white group-hover:text-amber-400 transition-colors leading-snug mb-4 min-h-[56px] md:min-h-[64px] flex items-center">
                    {item.title}
                  </h4>

                  <p className="text-neutral-400 text-sm leading-relaxed mb-6 font-light min-h-[84px] md:min-h-[96px] flex-1">
                    {item.description}
                  </p>
                </div>

                <div className="relative z-10 mt-auto pt-4 border-t border-neutral-800/80 flex items-center justify-between gap-3 min-h-[52px]">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-neutral-500">Read on:</span>
                    {item.links.map((link, idx) => (
                      <a
                        key={idx}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-2.5 py-1 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-amber-400/40 text-neutral-300 hover:text-white text-xs font-medium transition-all"
                      >
                        {link.name}
                      </a>
                    ))}
                  </div>

                  <a
                    href={item.primaryLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 hover:text-amber-300 group-hover:translate-x-1 transition-all shrink-0"
                  >
                    <span>View Feature</span>
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Selected Photographs for Exhibition Section */}
        <div className="mt-32">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-400 text-[10px] font-black uppercase tracking-[0.3em] mb-6">
              Visual Arts
            </div>
            <h3 className="text-4xl md:text-5xl font-black text-white tracking-tighter uppercase">
              Selected <span className="gold-gradient italic">Photographs</span>
            </h3>
            <p className="mt-4 text-neutral-500 font-light max-w-2xl mx-auto">
              Showcasing visual narratives and moments captured through the lens, selected for national and regional exhibitions.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            {exhibitionPhotos.map((photo, i) => (
              <a key={i} href={photo.link} target="_blank" rel="noopener noreferrer" className="block group relative rounded-[2.5rem] overflow-hidden border border-neutral-800 bg-neutral-900 aspect-[4/3] md:aspect-[16/9] shadow-2xl cursor-pointer">
                <img src={photo.src} alt="Exhibition Photo" className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex flex-col justify-end p-8 md:p-16">
                  <span className="text-amber-400 font-black text-xs md:text-sm uppercase tracking-[0.3em] mb-3 md:mb-4 block">{photo.rank}</span>
                  <h4 className="text-white font-bold text-lg md:text-2xl leading-snug mb-3 md:mb-4 translate-y-8 group-hover:translate-y-0 transition-transform duration-700">{photo.title}</h4>
                  <div className="flex items-center gap-3 md:gap-4 text-neutral-300 text-xs md:text-base font-medium translate-y-8 group-hover:translate-y-0 transition-transform duration-700 delay-100">
                    <span>{photo.event}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                    <span>{photo.year}</span>
                  </div>
                </div>
              </a>
            ))}
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
