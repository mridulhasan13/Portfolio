
import React, { useRef, useEffect } from 'react';
import Hero from '../components/Hero';
import NDSCLogo from '../Logo/Notre Dame Science Club.png';
import NDPCLogo from '../Logo/NDPC 1-01.png';
import SHKSCNutritionClubLogo from '../Logo/SHKSC Nutrition Club.png';
import SHKSCScienceClubLogo from '../Logo/shkscsc-01.png';
import TrimasLogo from '../Logo/Trimas.png';
import HavenOfHandwritersLogo from '../Logo/Haven Of Handwriters.png';
import PenmaniacsLogo from '../Logo/Penmaniacs.png';
import MahmudulsPhotographsLogo from '../Logo/Mahmuduls photographs.png';
import EditorialImage from '../Images/rwqr.png';
import GalleryImg3 from '../Website/3.png';
import GalleryImg87 from '../Website/87.jpeg';
import GalleryImg1 from '../Website/1.png';
import GalleryImg15 from '../Website/15.png';
import DesignImgBreakdown from '../Design/70 Final logo Breakdown-01.png';
import DesignImgGold from '../Design/Gold Madel.png';

interface HomeProps {
  onNavigate: (page: string) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  const socialIcons = {
    facebook: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
    instagram: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.668-.072-4.948-.197-4.359-2.62-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4.162 4.162 0 110-8.324A4.162 4.162 0 0112 16zM18.406 4.165a1.44 1.44 0 100 2.879 1.44 1.44 0 000-2.879z" />
      </svg>
    ),
    youtube: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
    website: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
      </svg>
    )
  };

  const row1Items = [
    { title: 'Photography', url: GalleryImg3 },
    { title: 'Photography', url: GalleryImg87 },
    { title: 'Design', url: DesignImgBreakdown },
    { title: 'Photography', url: GalleryImg1 },
    { title: 'Design', url: DesignImgGold },
    { title: 'Photography', url: GalleryImg15 },
  ];

  const featuredAwards = [
    { title: '24th Merit Position', event: 'Dhaka Education Board (SSC)', year: '2022', rank: 'BOARD MERIT' },
    { title: 'Champion', event: 'Physics Olympiad (Students Corner)', year: '2022', rank: 'CHAMPION' },
    { title: 'Regional Winner', event: '19th Bangladesh Math Olympiad', year: '2021', rank: 'WINNER' },
    { title: "Organizer's Award", event: 'Notre Dame Science Club', year: '2024', rank: 'VALOR' },
  ];



  return (
    <div className="bg-black">
      <Hero onNavigate={onNavigate} />

      {/* Leadership Teaser */}
      <section className="py-12 md:py-24 border-t border-neutral-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center mb-10 md:mb-20">
            <div>
              <h3 className="text-amber-400 font-bold uppercase tracking-[0.3em] text-xs mb-6 text-left">Leadership & Impact</h3>
              <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter mb-8 leading-tight text-left">
                Orchestrating <br />
                <span className="gold-gradient italic">Creative Communities.</span>
              </h2>
              <p className="text-neutral-400 text-lg leading-relaxed font-light text-left">
                From presiding over the <strong>Notre Dame Science Club</strong> publications to leading specialized squads at <strong>SHKSC</strong> and <strong>NDPC</strong>, my leadership journey is defined by a commitment to organizational excellence and visual storytelling.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              {/* Leadership Cards */}
              <div className="group bg-neutral-900/50 rounded-3xl p-6 flex flex-col items-center justify-center border border-neutral-800 hover:border-amber-400/30 transition-all relative">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-full flex items-center justify-center p-0 mb-4 shadow-2xl group-hover:scale-110 transition-transform overflow-hidden border-2 border-amber-400/20">
                  <img src={NDSCLogo} alt="NDSC Logo" className="w-[85%] h-[85%] object-contain transition-all" />
                </div>
                <span className="text-white font-black text-center text-[10px] md:text-sm mb-1 leading-tight tracking-tight uppercase">Notre Dame Science Club</span>
                <p className="text-amber-400 text-[8px] md:text-[9px] uppercase font-bold tracking-widest text-center mb-3">President (Publication)</p>
                <div className="flex gap-4">
                  <a href="https://www.facebook.com/NDSCOfficial" target="_blank" rel="noopener noreferrer" className="text-neutral-600 hover:text-amber-400 transition-all transform hover:scale-110" title="Facebook">{socialIcons.facebook}</a>
                  <a href="https://www.instagram.com/ndsc_official?fbclid=IwY2xjawP57mxleHRuA2FlbQIxMABicmlkETF5SFRlY1FCZlhKSVNsb1Vvc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHsWWid3kVqI53-MRQuQu3J0X4livEFAkT5KXcedHCrce6Of4W0XV0LmZbLSM_aem_kV3fH_LRIYYOrhslSU3Kpg" target="_blank" rel="noopener noreferrer" className="text-neutral-600 hover:text-amber-400 transition-all transform hover:scale-110" title="Instagram">{socialIcons.instagram}</a>
                  <a href="https://www.ndscbd.com/" target="_blank" rel="noopener noreferrer" className="text-neutral-600 hover:text-amber-400 transition-all transform hover:scale-110" title="Website">{socialIcons.website}</a>
                </div>
              </div>

              <div className="group bg-neutral-900/50 rounded-3xl p-6 flex flex-col items-center justify-center border border-neutral-800 hover:border-amber-400/30 transition-all relative">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-neutral-800 rounded-full flex items-center justify-center p-2 mb-4 shadow-2xl group-hover:scale-110 transition-transform">
                  <img src={NDPCLogo} alt="NDPC Logo" className="w-full h-full object-contain group-hover:brightness-125 transition-all" />
                </div>
                <span className="text-white font-black text-center text-[10px] md:text-sm mb-1 leading-tight tracking-tight uppercase">Notre Dame Photography Club</span>
                <p className="text-amber-400 text-[8px] md:text-[9px] uppercase font-bold tracking-widest text-center mb-3">Secretary Creative Squad</p>
                <div className="flex gap-4">
                  <a href="https://www.facebook.com/ndpc17.official" target="_blank" rel="noopener noreferrer" className="text-neutral-600 hover:text-amber-400 transition-all transform hover:scale-110" title="Facebook">{socialIcons.facebook}</a>
                  <a href="https://www.instagram.com/ndpc.official/" target="_blank" rel="noopener noreferrer" className="text-neutral-600 hover:text-amber-400 transition-all transform hover:scale-110" title="Instagram">{socialIcons.instagram}</a>
                </div>
              </div>

              <div className="group bg-neutral-900/50 rounded-3xl p-6 flex flex-col items-center justify-center border border-neutral-800 hover:border-amber-400/30 transition-all relative">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-full flex items-center justify-center p-3 mb-4 shadow-2xl group-hover:scale-110 transition-transform">
                  <img src={SHKSCNutritionClubLogo} alt="SHKSC Nutrition Club Logo" className="w-full h-full object-contain transition-all" />
                </div>
                <span className="text-white font-black text-center text-[10px] md:text-sm mb-1 leading-tight tracking-tight uppercase">SHKSC Nutrition Club</span>
                <p className="text-amber-400 text-[8px] md:text-[9px] uppercase font-bold tracking-widest text-center mb-3">Vice-President</p>
                <div className="flex gap-4">
                  <a href="https://www.facebook.com/shkscnc" target="_blank" rel="noopener noreferrer" className="text-neutral-600 hover:text-amber-400 transition-all transform hover:scale-110" title="Facebook">{socialIcons.facebook}</a>
                  <a href="https://www.instagram.com/shksc_nutrition_club/" target="_blank" rel="noopener noreferrer" className="text-neutral-600 hover:text-amber-400 transition-all transform hover:scale-110" title="Instagram">{socialIcons.instagram}</a>
                </div>
              </div>

              <div className="group bg-neutral-900/50 rounded-3xl p-6 flex flex-col items-center justify-center border border-neutral-800 hover:border-amber-400/30 transition-all relative">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-full flex items-center justify-center p-3 mb-4 shadow-2xl group-hover:scale-110 transition-transform">
                  <img src={SHKSCScienceClubLogo} alt="SHKSC Science Club Logo" className="w-full h-full object-contain transition-all" />
                </div>
                <span className="text-white font-black text-center text-[10px] md:text-sm mb-1 leading-tight tracking-tight uppercase">SHKSC Science Club</span>
                <p className="text-amber-400 text-[8px] md:text-[9px] uppercase font-bold tracking-widest text-center mb-3">Assistant Gen. Secretary</p>
                <div className="flex gap-4">
                  <a href="https://www.facebook.com/shkscsc" target="_blank" rel="noopener noreferrer" className="text-neutral-600 hover:text-amber-400 transition-all transform hover:scale-110" title="Facebook">{socialIcons.facebook}</a>
                  <a href="https://www.instagram.com/shkscsc_official/" target="_blank" rel="noopener noreferrer" className="text-neutral-600 hover:text-amber-400 transition-all transform hover:scale-110" title="Instagram">{socialIcons.instagram}</a>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center border-t border-neutral-900/50 pt-12">
            <button
              onClick={() => onNavigate('experience')}
              className="group flex flex-col items-center gap-4 text-white font-black text-[10px] uppercase tracking-[0.4em] hover:text-amber-400 transition-colors"
            >
              Explore Full Journey
              <div className="w-12 h-px bg-amber-400 group-hover:w-24 transition-all duration-500"></div>
            </button>
          </div>
        </div>
      </section>

      {/* Founded Ventures Section */}
      <section className="py-12 md:py-24 bg-black border-y border-neutral-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
            <h3 className="text-amber-400 font-bold uppercase tracking-[0.3em] text-xs mb-6">The Entrepreneurial Wing</h3>
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter mb-8">Founded Ventures</h2>
            <p className="text-neutral-400 text-lg font-light">
              Pioneering spaces for environmental impact, calligraphic excellence, and visual narratives.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Trimàs',
                role: 'Co-Founder (2022)',
                desc: 'An organization dedicated to environmental sustainability and climate action projects.',
                img: TrimasLogo,
                links: [{ type: 'facebook', url: 'https://www.facebook.com/trimas.org' }]
              },
              {
                title: 'Haven Of Handwriters',
                role: 'Founder (2021)',
                desc: 'A thriving community of 4,000+ handwriters fostering the art of manual script.',
                img: HavenOfHandwritersLogo,
                links: [{ type: 'facebook', url: 'https://www.facebook.com/haven.of.handwriters' }]
              },
              {
                title: 'Penmaniacs',
                role: 'Founder (2022)',
                desc: 'A specialized platform for high-fidelity calligraphy and fine writing tools.',
                img: PenmaniacsLogo,
                links: [
                  { type: 'facebook', url: 'https://www.facebook.com/penmaniacs.creation' },
                  { type: 'youtube', url: 'https://www.youtube.com/@penmaniacs.creation' }
                ]
              },
              {
                title: "Mahmudul's Photographs",
                role: 'Founder',
                desc: 'A professional portfolio house capturing macro life, urban narratives, and architectural stills.',
                img: MahmudulsPhotographsLogo,
                links: [
                  { type: 'facebook', url: 'https://www.facebook.com/MAHMUDUL.PHOTOGRAPHS' },
                  { type: 'instagram', url: 'https://www.instagram.com/mahmuduls_photographs/' }
                ]
              }
            ].map((item, i) => (
              <div key={i} className="group p-8 bg-neutral-900/20 rounded-[2rem] border border-neutral-800 hover:border-amber-400/20 transition-all flex flex-col items-center text-center">
                <div className="w-20 h-20 mb-6 rounded-2xl overflow-hidden border border-neutral-800 flex items-center justify-center p-3 bg-neutral-900 group-hover:scale-110 transition-transform">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-contain transition-all brightness-75 group-hover:brightness-100"
                  />
                </div>
                <h4 className="text-lg font-bold text-white mb-2 leading-tight">{item.title}</h4>
                <p className="text-amber-400 text-[8px] uppercase font-black tracking-widest mb-4">{item.role}</p>
                <div className="flex gap-4 mb-4">
                  {item.links?.map((link, idx) => (
                    <a key={idx} href={link.url} target="_blank" rel="noopener noreferrer" className="text-neutral-600 hover:text-amber-400 transition-all transform hover:scale-110">
                      {socialIcons[link.type as keyof typeof socialIcons]}
                    </a>
                  ))}
                </div>
                <p className="text-neutral-500 text-xs leading-relaxed line-clamp-3 text-center">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Editorial Mastery Section */}
      <section className="py-12 md:py-24 bg-neutral-950 overflow-hidden relative border-b border-neutral-900">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-400/5 blur-[120px] rounded-full -mr-48 -mt-48"></div>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-16">
            <div className="flex-1">
              <h3 className="text-amber-400 font-bold uppercase tracking-[0.3em] text-xs mb-6 text-left">Editorial Mastery</h3>
              <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter mb-8 leading-tight text-left">
                Crafting <span className="gold-gradient italic">Narratives.</span>
              </h2>
              <p className="text-neutral-400 text-lg leading-relaxed font-light mb-10 text-left">
                As the <strong>Editor & Chief Designer of AUDRI 24</strong>, I was responsible for the conceptual vision, content curation, and visual architecture of the flagship publication for the Notre Dame Science Club.
              </p>

              <div className="p-8 bg-black/40 rounded-3xl border border-neutral-800 backdrop-blur-sm group hover:border-amber-400/30 transition-all">
                <div className="flex items-center gap-6 mb-4">
                  <div className="w-12 h-12 bg-amber-400 rounded-xl flex items-center justify-center text-black shadow-lg shadow-amber-400/20">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <div className="text-left">
                    <h4 className="text-white font-bold text-xl uppercase tracking-tighter">AUDRI 2024</h4>
                    <p className="text-neutral-500 text-sm">Annual Publication • NDSC</p>
                  </div>
                </div>
                <div className="text-left">
                  <a
                    href="https://heyzine.com/flip-book/7b436e4c13.html#page/1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 text-amber-400 font-black text-[10px] uppercase tracking-[0.3em] hover:text-amber-300 transition-colors"
                  >
                    VIEW DIGITAL BOOK
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="flex-1 w-full max-w-lg aspect-[4/5] bg-neutral-900 rounded-[3rem] border border-neutral-800 shadow-2xl overflow-hidden relative group">
              <img
                src={EditorialImage}
                alt="AUDRI 24 Preview"
                className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-all duration-1000 brightness-75 group-hover:brightness-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80"></div>
              <div className="absolute bottom-10 left-10 text-left">
                <p className="text-amber-400 font-black text-[9px] uppercase tracking-widest mb-2">Editor's Signature Project</p>
                <h4 className="text-white text-3xl font-black tracking-tighter">Audri'24</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Honors & Recognition Teaser */}
      <section className="py-16 md:py-32 bg-black border-b border-neutral-900 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[800px] md:h-[800px] bg-amber-400/[0.03] blur-[100px] md:blur-[150px] rounded-full -z-10"></div>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10 md:mb-20">
            <h3 className="text-amber-400 font-bold uppercase tracking-[0.3em] text-xs mb-6">Hall of Fame</h3>
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter mb-8">Honors & <span className="gold-gradient italic">Recognition.</span></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredAwards.map((award, i) => (
              <div key={i} className="group p-8 bg-neutral-900/10 border border-neutral-900 rounded-[2rem] hover:border-amber-400/30 transition-all">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-amber-400 font-black text-[8px] uppercase tracking-[0.3em]">{award.rank}</span>
                  <span className="text-neutral-700 font-bold text-[8px] uppercase">{award.year}</span>
                </div>
                <h4 className="text-xl font-bold text-white mb-2 leading-tight group-hover:text-amber-400 transition-colors text-left">{award.title}</h4>
                <p className="text-neutral-500 text-[10px] font-medium leading-relaxed uppercase tracking-wider text-left">{award.event}</p>
              </div>
            ))}
          </div>

          <div className="mt-20 flex justify-center">
            <button
              onClick={() => onNavigate('awards')}
              className="px-10 py-4 border border-amber-400/20 text-amber-400 text-[10px] font-black uppercase tracking-[0.4em] rounded-full hover:bg-amber-400 hover:text-black transition-all transform active:scale-95"
            >
              View Full Accolades
            </button>
          </div>
        </div>
      </section>

      {/* Visual Showcase Teaser */}
      <section className="py-16 md:py-32 bg-black overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 mb-8 md:mb-16">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="max-w-lg">
              <h3 className="text-amber-400 font-bold uppercase tracking-[0.3em] text-xs mb-6 text-center md:text-left">Gallery Teaser</h3>
              <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter leading-tight text-center md:text-left">The Visual <span className="gold-gradient italic">Showcase.</span></h2>
            </div>
            <button
              onClick={() => onNavigate('creatives')}
              className="group inline-flex items-center gap-4 text-white font-black text-[10px] uppercase tracking-[0.4em] hover:text-amber-400 transition-colors"
            >
              ENTER FULL GALLERY
              <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
          {/* Marquee Rows */}
          <div className="relative flex overflow-hidden group mb-8">
            {/* Added pr-8 to match gap-8 for perfect loop */}
            <div className="flex animate-marquee gap-8 whitespace-nowrap py-12 px-4 pr-8 items-center">
              {/* Repeat items 4 times to ensure smooth infinite loop on wide screens */}
              {[...row1Items, ...row1Items, ...row1Items, ...row1Items].map((item, i) => (
                <div key={i} className={`relative shrink-0 rounded-[2rem] overflow-hidden bg-neutral-900 border border-neutral-800 shadow-xl h-[200px] md:h-[400px] w-auto cursor-pointer transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:border-amber-400/40`} onClick={() => onNavigate('creatives')}>
                  <img src={item.url} className="w-auto h-full object-contain" alt={item.title} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <span className="text-amber-400 font-black text-xs uppercase tracking-[0.2em] transform translate-y-4 hover:translate-y-0 transition-transform duration-300">{item.title}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
