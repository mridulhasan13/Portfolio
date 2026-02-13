
import React from 'react';
import { ExperienceItem } from '../types';
import NooreLogo from '../Logo/Noore.webp';
import SHKSCScienceClubLogo from '../Logo/SHKSC Science Club.webp';
import NDSCLogo from '../Logo/Notre Dame Science Club.webp';
import NDPCLogo from '../Logo/Notre Dame Photography Club.webp';
import SHKSCNutritionClubLogo from '../Logo/SHKSC Nutrition Club.webp';
import PenmaniacsLogo from '../Logo/Penmaniacs.webp';
import TrimasLogo from '../Logo/Trimas.webp';
import HavenOfHandwritersLogo from '../Logo/Haven Of Handwriters.webp';
import MahmudulsPhotographsLogo from '../Logo/Mahmuduls photographs.webp';

const Experience: React.FC = () => {
  const socialIcons = {
    facebook: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
    instagram: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.668-.072-4.948-.197-4.359-2.62-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4.162 4.162 0 110-8.324A4.162 4.162 0 0112 16zM18.406 4.165a1.44 1.44 0 100 2.879 1.44 1.44 0 000-2.879z" />
      </svg>
    ),
    youtube: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
    website: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
      </svg>
    )
  };

  const experiences: (ExperienceItem & { logo: string; links?: { type: string; url: string }[]; accent?: string })[] = [
    {
      role: 'Founder',
      organization: 'Fashion Startup (Recently Started)',
      period: '2025 – Present',
      description: [
        'Incepted a luxury fashion label focusing on the intersection of heritage textiles and contemporary silhouettes.',
        'Leading brand strategy, visual direction, and supply chain logistics for the debut collections.'
      ],
      logo: NooreLogo,
      accent: 'border-rose-500/30 shadow-rose-500/10'
    },
    {
      role: 'Founder',
      organization: "Mahmudul's Photographs",
      period: '2025 – Present',
      description: [
        'A professional portfolio house capturing macro life, urban narratives, and architectural stills.',
        'Focusing on high-fidelity visual storytelling through refined photographic lenses.'
      ],
      logo: MahmudulsPhotographsLogo,
      links: [
        { type: 'facebook', url: 'https://www.facebook.com/MAHMUDUL.PHOTOGRAPHS' },
        { type: 'instagram', url: 'https://www.instagram.com/mahmuduls_photographs/' }
      ],
      accent: 'border-neutral-500/30 shadow-neutral-500/10'
    },
    {
      role: 'Secretary (Creative Squad)',
      organization: 'Notre Dame Photography Club (NDPC)',
      period: '2024 – 2025',
      description: [
        'Recognized for exceptional dedication and opening new frontiers for the organization.',
        'Led the Creative Squad in visual direction and event photography curation.',
        'Managed creative assets and social media aesthetics for the 2024-25 session.'
      ],
      logo: NDPCLogo,
      links: [
        { type: 'facebook', url: 'https://www.facebook.com/ndpc17.official' },
        { type: 'instagram', url: 'https://www.instagram.com/ndpc.official/' }
      ],
      accent: 'border-indigo-500/30 shadow-indigo-500/10'
    },
    {
      role: 'President (Publication) & Organizer',
      organization: 'Notre Dame Science Club (NDSC)',
      period: '2023 – 2024',
      description: [
        'Served as the Editor & Chief Designer for AUDRI 24 (Annual flagship publication).',
        'Organized the Annual Science Festival 2023, managing publication logistics.',
        'Received the Organizer\'s Award for valor and determination (Session 2023-24).'
      ],
      awards: ['Organizer\'s Award', 'Lifetime Member'],
      logo: NDSCLogo,
      links: [
        { type: 'facebook', url: 'https://www.facebook.com/NDSCOfficial' },
        { type: 'instagram', url: 'https://www.instagram.com/ndsc_official?fbclid=IwY2xjawP57mxleHRuA2FlbQIxMABicmlkETF5SFRlY1FCZlhKSVNsb1Vvc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHsWWid3kVqI53-MRQuQu3J0X4livEFAkT5KXcedHCrce6Of4W0XV0LmZbLSM_aem_kV3fH_LRIYYOrhslSU3Kpg' },
        { type: 'website', url: 'https://www.ndscbd.com/' }
      ],
      accent: 'border-amber-400/30 shadow-amber-400/10'
    },
    {
      role: 'Founder & President',
      organization: 'Haven Of Handwriters',
      period: '2023 – Present',
      description: [
        'Leading a niche movement to celebrate the art of manual script with 4,000+ members.',
        'Growing a vibrant community focused on calligraphic excellence and hand-inked narratives.'
      ],
      logo: HavenOfHandwritersLogo,
      links: [{ type: 'facebook', url: 'https://www.facebook.com/haven.of.handwriters' }],
      accent: 'border-purple-500/30 shadow-purple-500/10'
    },
    {
      role: 'Founder',
      organization: 'Penmaniacs',
      period: '2023 – Present',
      description: [
        'Building a specialized platform for high-fidelity calligraphy and writing art.',
        'Curating professional artistic tools and educational resources for script enthusiasts.'
      ],
      logo: PenmaniacsLogo,
      links: [
        { type: 'facebook', url: 'https://www.facebook.com/penmaniacs.creation' },
        { type: 'youtube', url: 'https://www.youtube.com/@penmaniacs.creation' }
      ],
      accent: 'border-orange-500/30 shadow-orange-500/10'
    },
    {
      role: 'Assistant General Secretary (Olympiad)',
      organization: 'SHKSC Science Club',
      period: 'March 2022 – Aug 2023',
      description: [
        'Organized SHKSC Science Workshop 2022 (April 14-15, 2022).',
        'Coordinated the Education Week and Club Festival 2023 (Jan 22-27, 2023).',
        'Spearheaded Olympiad initiatives and resource curation for student competitors.'
      ],
      logo: SHKSCScienceClubLogo,
      links: [
        { type: 'facebook', url: 'https://www.facebook.com/shkscsc' },
        { type: 'instagram', url: 'https://www.instagram.com/shkscsc_official/' }
      ],
      accent: 'border-blue-500/30 shadow-blue-500/10'
    },
    {
      role: 'Co-Founder & Director',
      organization: 'Trimàs',
      period: '2022 – Present',
      description: [
        'Driving a community-led initiative for environmental consciousness and sustainable action.',
        'Successfully organized the Green Globe Festival and various climate projects.'
      ],
      logo: TrimasLogo,
      links: [{ type: 'facebook', url: 'https://www.facebook.com/trimas.org' }],
      accent: 'border-cyan-500/30 shadow-cyan-500/10'
    },
    {
      role: 'Vice-President',
      organization: 'SHKSC Nutrition Club',
      period: '2022 – 2023',
      description: [
        'Spearheaded nutrition awareness campaigns reaching thousands of students.',
        'Directed the club\'s participation in the International Nutrition Olympiad 2022.',
        'Managed organizational growth and membership expansion.'
      ],
      logo: SHKSCNutritionClubLogo,
      links: [
        { type: 'facebook', url: 'https://www.facebook.com/shkscnc' },
        { type: 'instagram', url: 'https://www.instagram.com/shksc_nutrition_club/' }
      ],
      accent: 'border-emerald-500/30 shadow-emerald-500/10'
    }
  ];

  return (
    <section id="experience" className="py-32 bg-black relative overflow-hidden">
      {/* Vibrant Background Blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-400/5 blur-[120px] rounded-full -z-10 translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-600/5 blur-[150px] rounded-full -z-10 -translate-x-1/2 translate-y-1/2"></div>
      <div className="absolute top-1/2 left-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-from)_0%,_transparent_100%)] from-amber-400/[0.02] -z-10 -translate-x-1/2 -translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center mb-24 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-400 text-[10px] font-black uppercase tracking-[0.3em] mb-6">
            The Chronology
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-none uppercase">
            Experience & <span className="gold-gradient italic">Impact</span>
          </h2>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Main Timeline Line */}
          <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-amber-400/50 via-neutral-800 to-transparent"></div>

          <div className="space-y-32">
            {experiences.map((exp, index) => (
              <div key={index} className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>

                {/* Pulsating Marker */}
                <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-6 h-6 z-10">
                  <div className="absolute inset-0 bg-amber-400 rounded-full animate-ping opacity-20"></div>
                  <div className="absolute inset-1.5 bg-black border-2 border-amber-400 rounded-full shadow-[0_0_15px_rgba(251,191,36,0.6)]"></div>
                </div>

                <div className="ml-10 md:ml-0 md:w-1/2 px-0 md:px-12 w-full group">
                  <div className={`relative p-1 rounded-[2.5rem] bg-gradient-to-br from-neutral-800/50 to-neutral-900/50 transition-all duration-500 hover:scale-[1.02] ${exp.accent}`}>
                    <div className="bg-black/80 backdrop-blur-xl rounded-[2.3rem] p-8 h-full border border-white/5">

                      {/* Top Header Section */}
                      <div className={`flex items-start gap-6 mb-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                        <div className="w-20 h-20 shrink-0 bg-white/5 rounded-2xl p-3 border border-neutral-800 flex items-center justify-center group-hover:bg-amber-400/10 transition-colors overflow-hidden">
                          <img src={exp.logo} alt={exp.organization} className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-700" />
                        </div>
                        <div className={`pt-2 flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                          <div className={`inline-flex items-center gap-2 mb-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-amber-400 text-[9px] font-black uppercase tracking-widest ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse"></span>
                            {exp.period}
                          </div>
                          <h4 className="text-3xl font-black text-white leading-[1.1] tracking-tight group-hover:text-amber-400 transition-colors">{exp.role}</h4>
                          <p className="text-neutral-500 font-bold text-xs mt-2 uppercase tracking-wider">{exp.organization}</p>

                          {/* Social Links */}
                          <div className={`flex gap-3 mt-4 ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                            {exp.links?.map((link, idx) => (
                              <a key={idx} href={link.url} target="_blank" rel="noopener noreferrer" className="w-8 h-8 flex items-center justify-center rounded-full bg-neutral-900 border border-neutral-800 text-neutral-500 hover:text-amber-400 hover:border-amber-400/30 transition-all transform hover:scale-110">
                                {socialIcons[link.type as keyof typeof socialIcons]}
                              </a>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Content Description */}
                      <div className="h-px bg-gradient-to-r from-transparent via-neutral-800 to-transparent w-full mb-8"></div>

                      <ul className={`space-y-4 ${index % 2 === 0 ? 'md:text-right' : 'text-left'}`}>
                        {exp.description.map((item, i) => (
                          <li key={i} className={`flex items-start gap-4 text-sm text-neutral-400 font-light leading-relaxed group-hover:text-neutral-200 transition-colors ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                            <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-400/50 group-hover:bg-amber-400 shrink-0 shadow-[0_0_8px_rgba(251,191,36,0.3)]"></div>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Bottom Badges */}
                      {exp.awards && (
                        <div className={`mt-10 flex flex-wrap gap-2 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                          {exp.awards.map((award, i) => (
                            <span key={i} className="px-4 py-1.5 bg-amber-400/5 border border-amber-400/20 text-amber-400 text-[9px] font-black uppercase tracking-widest rounded-xl flex items-center gap-2">
                              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                              {award}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Empty Space for Desktop Timeline Layout */}
                <div className="hidden md:block md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
