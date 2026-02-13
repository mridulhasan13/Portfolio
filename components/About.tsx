
import React from 'react';
import ProfilePhoto from '../Images/ChatGPT Image Feb 3, 2026, 12_06_56 AM.png';

const About: React.FC = () => {
  const socialInfo = [
    {
      name: 'Email',
      label: 'hmridul27@gmail.com',
      url: 'mailto:hmridul27@gmail.com',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      name: 'LinkedIn',
      label: 'linkedin.com/in/mahmudul-hasan-mridul1',
      url: 'https://www.linkedin.com/in/mahmudul-hasan-mridul1/',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      )
    },
    {
      name: 'GitHub',
      label: 'github.com/mridulhasan13',
      url: 'https://github.com/mridulhasan13',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      )
    },
    {
      name: 'Instagram',
      label: '@mustard_slevalion',
      url: 'https://www.instagram.com/mustard_slevalion/',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" strokeWidth={1.5} />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
        </svg>
      )
    },
    {
      name: 'Facebook',
      label: 'fb.com/mahmudulhasan.mridul01',
      url: 'https://www.facebook.com/mahmudulhasan.mridul01/',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      )
    },
    {
      name: 'WhatsApp',
      label: '+880 1521 757204',
      url: 'https://wa.me/01521757204/',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      )
    }
  ];

  return (
    <section id="about" className="scroll-mt-20 pt-32 pb-20 bg-black min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Section Headline - Centered & with social icon */}
        <div className="mb-24 text-center">
          <div className="flex items-center justify-center gap-6 mb-4">
            <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-amber-400/10 border border-amber-400/20 text-amber-400">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <h2 className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-none uppercase">
              About <span className="gold-gradient italic">Me</span>
            </h2>
          </div>
        </div>

        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Portrait Image Column */}
          <div className="contents lg:col-span-5 lg:flex lg:flex-col lg:gap-12">
            <div className="relative group order-1 lg:order-none">
              <div className="absolute -inset-4 bg-amber-400/5 rounded-[3rem] blur-2xl group-hover:bg-amber-400/10 transition-all duration-700"></div>
              <div className="relative aspect-square overflow-hidden rounded-[3rem] border border-neutral-800 bg-neutral-900 shadow-2xl">
                <img
                  src={ProfilePhoto}
                  alt="Mahmudul Hasan Mridul"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-8 left-8 text-left">
                  <p className="text-amber-400 font-black text-[10px] uppercase tracking-widest mb-1">Mridul</p>
                  <h4 className="text-white font-bold text-xl">Dhaka, Bangladesh</h4>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 border-b-2 border-r-2 border-amber-400/20 rounded-br-[3rem] hidden md:block"></div>
            </div>

            {/* Social Links placed BELOW the photo */}
            <div className="space-y-4 order-3 lg:order-none">
              <h4 className="text-white font-bold text-xs uppercase tracking-[0.3em] mb-6 border-b border-neutral-800/50 pb-4 text-left">Digital Connections</h4>
              <div className="flex flex-col gap-3">
                {socialInfo.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-neutral-900/40 rounded-2xl border border-neutral-800 hover:border-amber-400/30 transition-all group"
                  >
                    <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-neutral-800 text-neutral-500 group-hover:text-amber-400 group-hover:bg-amber-400/10 transition-all">
                      {social.icon}
                    </div>
                    <div className="flex flex-col overflow-hidden text-left">
                      <span className="text-amber-400 font-black text-[8px] uppercase tracking-[0.1em]">{social.name}</span>
                      <span className="text-neutral-400 font-medium text-xs truncate group-hover:text-white transition-colors">{social.label}</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Narrative & Stats Column */}
          <div className="order-2 lg:order-none lg:col-span-7 space-y-12">
            <div className="text-left">
              <h3 className="text-3xl md:text-5xl font-extrabold text-white tracking-tighter leading-tight mb-8">
                Engineering <br />
                <span className="text-neutral-500 italic">Precise Elegance.</span>
              </h3>

              <div className="space-y-6 text-neutral-400 text-lg leading-relaxed font-light text-left">
                <p>
                  I’m an <span className="text-white font-semibold">Industrial and Production Engineering</span> student at the Bangladesh University of Textiles (BUTEX) who enjoys bridging the gap between technical systems and creative leadership. I’m the Founder of <span className="text-amber-400">‘Haven Of Handwriters’</span> and a former President (Publication) at the <span className="text-white">Notre Dame Science Club (NDSC)</span>, where I led teams to execute large-scale initiatives along with several government scholarships.
                </p>
                <p>
                  I’ve served as a Director at <span className="text-white">Trimàs</span>, successfully organizing the Green Globe Festival, and managed publication operations for the Annual Science Festival 2023. My work focuses on strategic event planning and team management, ensuring complex projects run smoothly and effectively. I also love blending art with discipline—evident in my background as a <span className="text-white">handwriting artist</span> (2nd Place, Creativity Blast 1.0) and my creative contributions to the Notre Dame Photography Club.
                </p>
                <p>
                  Community building is something I deeply care about. I’ve contributed to several organizations, including the Cultural Classicists and the Shamsul Hoque Khan School & College Science Club, fostering growth through Olympiads and festivals.
                </p>
                <p>
                  I like roles that combine management, creativity, and real-world impact—especially when they allow me to lead diverse teams to success.
                </p>
              </div>
            </div>

            <div className="h-px bg-neutral-900 w-full"></div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <h4 className="text-4xl font-black text-white mb-1 tracking-tighter">98%</h4>
                <p className="text-neutral-500 text-[9px] uppercase font-black tracking-widest text-left">Science Core Avg.</p>
              </div>
              <div>
                <h4 className="text-4xl font-black text-white mb-1 tracking-tighter">24th</h4>
                <p className="text-neutral-500 text-[9px] uppercase font-black tracking-widest text-left">Board Merit Pos.</p>
              </div>
              <div>
                <h4 className="text-4xl font-black text-white mb-1 tracking-tighter">07+</h4>
                <p className="text-neutral-500 text-[9px] uppercase font-black tracking-widest text-left">Design Years</p>
              </div>
              <div>
                <h4 className="text-4xl font-black text-white mb-1 tracking-tighter">04+</h4>
                <p className="text-neutral-500 text-[9px] uppercase font-black tracking-widest text-left">Founded Ventures</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
