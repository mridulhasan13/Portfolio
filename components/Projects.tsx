import React, { useState } from 'react';
import rawProjects from '../repos.json';

interface ProjectItem {
  name: string;
  description: string;
  languages: string[];
  url: string;
  demoUrl?: string;
  playStoreUrl?: string;
  adminUrl?: string;
  credentials?: {
    username?: string;
    password?: string;
    label?: string;
  };
  updatedAt: string;
  isPrivate?: boolean;
}

interface StyleProps {
  accent: string;
  glow: string;
  badge: string;
  textHover: string;
  glowColor: string;
}

const PROJECT_STYLES: { [key: string]: StyleProps } = {
  satprp: {
    accent: 'group-hover:border-purple-500/40',
    glow: 'hover:shadow-[0_0_50px_rgba(168,85,247,0.15)]',
    badge: 'bg-purple-500/5 border-purple-500/20 text-purple-400',
    textHover: 'group-hover:text-purple-400',
    glowColor: 'from-purple-500/20 to-transparent'
  },
  unigrid: {
    accent: 'group-hover:border-blue-500/40',
    glow: 'hover:shadow-[0_0_50px_rgba(59,130,246,0.15)]',
    badge: 'bg-blue-500/5 border-blue-500/20 text-blue-400',
    textHover: 'group-hover:text-blue-400',
    glowColor: 'from-blue-500/20 to-transparent'
  },
  aipe: {
    accent: 'group-hover:border-amber-400/40',
    glow: 'hover:shadow-[0_0_50px_rgba(251,191,36,0.15)]',
    badge: 'bg-amber-400/5 border-amber-400/20 text-amber-400',
    textHover: 'group-hover:text-amber-400',
    glowColor: 'from-amber-400/20 to-transparent'
  },
  vote: {
    accent: 'group-hover:border-rose-500/40',
    glow: 'hover:shadow-[0_0_50px_rgba(244,63,94,0.15)]',
    badge: 'bg-rose-500/5 border-rose-500/20 text-rose-400',
    textHover: 'group-hover:text-rose-400',
    glowColor: 'from-rose-500/20 to-transparent'
  },
  smart: {
    accent: 'group-hover:border-rose-500/40',
    glow: 'hover:shadow-[0_0_50px_rgba(244,63,94,0.15)]',
    badge: 'bg-rose-500/5 border-rose-500/20 text-rose-400',
    textHover: 'group-hover:text-rose-400',
    glowColor: 'from-rose-500/20 to-transparent'
  },
  notemate: {
    accent: 'group-hover:border-emerald-500/40',
    glow: 'hover:shadow-[0_0_50px_rgba(16,185,129,0.15)]',
    badge: 'bg-emerald-500/5 border-emerald-500/20 text-emerald-400',
    textHover: 'group-hover:text-emerald-400',
    glowColor: 'from-emerald-500/20 to-transparent'
  },
  portfolio: {
    accent: 'group-hover:border-cyan-500/40',
    glow: 'hover:shadow-[0_0_50px_rgba(6,182,212,0.15)]',
    badge: 'bg-cyan-500/5 border-cyan-500/20 text-cyan-400',
    textHover: 'group-hover:text-cyan-400',
    glowColor: 'from-cyan-500/20 to-transparent'
  },
  premium: {
    accent: 'group-hover:border-orange-500/40',
    glow: 'hover:shadow-[0_0_50px_rgba(249,115,22,0.15)]',
    badge: 'bg-orange-500/5 border-orange-500/20 text-orange-400',
    textHover: 'group-hover:text-orange-400',
    glowColor: 'from-orange-500/20 to-transparent'
  }
};

const Projects: React.FC = () => {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const handleCopy = (text: string, fieldId: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldId);
    setTimeout(() => {
      setCopiedField(null);
    }, 2000);
  };

  // Use loaded projects or fallback to hardcoded ones if the list is empty
  const hasLoadedProjects = Array.isArray(rawProjects) && rawProjects.length > 0;
  
  const projectsList: ProjectItem[] = hasLoadedProjects 
    ? (rawProjects as ProjectItem[]) 
    : [
        {
          name: 'UniGrid',
          description: 'An enterprise-grade academic hub unifying the campus ecosystem across Android, iOS, and Web with real-time communication, grading ledgers, and secure file repositories. [Details of the app](https://info-unigrid.netlify.app/)',
          languages: ['Dart 76.4%', 'HTML 17.0%'],
          url: '',
          demoUrl: 'https://unigrid.netlify.app/',
          playStoreUrl: 'https://play.google.com/store/apps/details?id=com.unigrid.app',
          credentials: {
            username: 'demo.reviewer@unigrid.app',
            password: 'UniGrid@2026',
            label: 'UniGrid — Reviewer Access'
          },
          updatedAt: '2026-05-29T00:00:00Z'
        },
        {
          name: 'premium_business',
          description: 'A full-featured commercial restaurant web platform for Mimosa Pizza featuring dining menus, table reservations, inventory tracking, and staff management.',
          languages: ['HTML 69.7%', 'CSS 18.4%', 'JavaScript 11.9%'],
          url: 'https://github.com/mridulhasan13/premium_business',
          demoUrl: 'https://premium-b.netlify.app/',
          adminUrl: 'https://premium-b.netlify.app/admin.html',
          credentials: {
            username: 'login@test.com',
            password: '123456',
            label: 'Mimosa Pizza — Staff Portal'
          },
          updatedAt: '2026-06-20T02:18:14Z',
          isPrivate: true
        },
        {
          name: 'satprp',
          description: 'An interactive diagnostic, tracking, and mock testing platform designed to help students master the Scholastic Assessment Test (SAT) with real-time scoring and custom analytics.',
          languages: ['JavaScript 98.6%', 'Python 1.1%'],
          url: 'https://github.com/mridulhasan13/satprp',
          demoUrl: 'https://sat-prp4.netlify.app/',
          credentials: {
            username: 'sat6066@preparation.com',
            password: '60606060',
            label: 'SAT Prep — Student Portal'
          },
          updatedAt: '2026-07-04T05:18:22Z',
          isPrivate: true
        },
        {
          name: 'AIPE-BUTEX',
          description: 'Official website for the Association of Industrial & Production Engineers-BUTEX',
          languages: ['HTML 97.9%', 'CSS 1.6%', 'JavaScript 0.5%'],
          url: 'https://github.com/mridulhasan13/AIPE-BUTEX',
          demoUrl: 'https://aipe-butex.netlify.app',
          updatedAt: '2026-06-01T00:00:00Z',
          isPrivate: true
        },
        {
          name: 'Notemate.seu',
          description: 'A dedicated academic resource and note management platform tailored for university students.',
          languages: ['JavaScript 94.0%', 'CSS 5.9%'],
          url: 'https://github.com/mridulhasan13/Notemate.seu',
          updatedAt: '2026-04-01T00:00:00Z'
        },
        {
          name: 'Smart-Tutoring-Monitor',
          description: 'An intelligent system designed to monitor and enhance tutoring sessions with smart analytics and tracking.',
          languages: ['TypeScript 90.6%', 'JavaScript 5.3%', 'Python 3.0%'],
          url: 'https://github.com/mridulhasan13/Smart-Tutoring-Monitor',
          demoUrl: 'https://smarttutoringmonitor.netlify.app/',
          updatedAt: '2026-02-21T00:00:00Z'
        },
        {
          name: 'Portfolio',
          description: 'My personal portfolio website built with React, TypeScript, and Tailwind CSS, featuring modern glassmorphism and dynamic animations.',
          languages: ['TypeScript 95.7%', 'HTML 2.9%', 'Python 1.4%'],
          url: 'https://github.com/mridulhasan13/Portfolio',
          demoUrl: 'https://mahmudulhasanmridul.netlify.app/',
          updatedAt: '2026-05-09T00:00:00Z'
        }
      ];

  const getProjectStyle = (name: string, index: number): StyleProps => {
    const lowerName = name.toLowerCase();
    if (lowerName.includes('satprp') || lowerName.includes('sat-prp')) return PROJECT_STYLES.satprp;
    if (lowerName.includes('unigrid')) return PROJECT_STYLES.unigrid;
    if (lowerName.includes('aipe-butex') || lowerName.includes('aipe')) return PROJECT_STYLES.aipe;
    if (lowerName.includes('premium')) return PROJECT_STYLES.premium;
    if (lowerName.includes('vote-for-ipe-cr') || lowerName.includes('vote')) return PROJECT_STYLES.vote;
    if (lowerName.includes('smart-tutoring') || lowerName.includes('tutoring')) return PROJECT_STYLES.smart;
    if (lowerName.includes('notemate')) return PROJECT_STYLES.notemate;
    if (lowerName === 'portfolio' || lowerName === 'mh-mridul---portfolio') return PROJECT_STYLES.portfolio;
    
    // Cycle styles for other repositories based on index
    const keys = Object.keys(PROJECT_STYLES);
    const key = keys[index % keys.length];
    return PROJECT_STYLES[key];
  };

  const getProjectIcon = (name: string) => {
    const lowerName = name.toLowerCase();
    if (lowerName.includes('notemate')) {
      return <img src="/notemate-logo.png" alt="Notemate Logo" className="w-8 h-8 object-contain drop-shadow-md group-hover:scale-110 transition-transform duration-300" />;
    }
    if (lowerName.includes('smart-tutoring') || lowerName.includes('tutoring')) {
      return <img src="/stm-logo.png" alt="Smart Tutoring Monitor Logo" className="w-8 h-8 object-contain drop-shadow-md group-hover:scale-110 transition-transform duration-300" />;
    }
    if (lowerName === 'portfolio' || lowerName === 'mh-mridul---portfolio') {
      return <img src="/m-logo.svg" alt="Mridul Logo" className="w-7 h-7 object-contain opacity-80 group-hover:opacity-100 drop-shadow-md group-hover:scale-110 transition-all duration-300" />;
    }
    if (lowerName.includes('unigrid')) {
      return <img src="/unigrid-logo.png" alt="UniGrid Logo" className="w-8 h-8 object-contain drop-shadow-md group-hover:scale-110 transition-transform duration-300" />;
    }
    if (lowerName.includes('aipe-butex')) {
      return <img src="/aipe-butex-logo.png" alt="AIPE BUTEX Logo" className="w-8 h-8 object-contain drop-shadow-md group-hover:scale-110 transition-transform duration-300" />;
    }
    if (lowerName.includes('butexdc')) {
      return <img src="/butexdc-logo.png" alt="BUTEX Debating Club Logo" className="w-8 h-8 object-contain drop-shadow-md group-hover:scale-110 transition-transform duration-300" />;
    }
    if (lowerName.includes('satprp') || lowerName.includes('sat-prp')) {
      return (
        <svg className="w-6 h-6 text-neutral-400 group-hover:text-purple-400 transition-colors duration-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
        </svg>
      );
    }
    if (lowerName.includes('vote-for-ipe-cr') || lowerName.includes('vote')) {
      return (
        <svg className="w-6 h-6 text-neutral-400 group-hover:text-rose-500 transition-colors duration-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      );
    }
    
    if (lowerName.includes('premium')) {
      return (
        <svg className="w-6 h-6 text-neutral-400 group-hover:text-orange-400 transition-colors duration-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v1.5m7.5 0a48.667 48.667 0 00-7.5 0" />
        </svg>
      );
    }
    
    // Sleek default SVG code icon
    return (
      <svg className="w-6 h-6 text-neutral-400 group-hover:text-amber-400 transition-colors duration-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    );
  };

  const getProjectDemoUrl = (name: string, originalDemoUrl?: string) => {
    const lowerName = name.toLowerCase();
    if (lowerName.includes('aipe-butex')) {
      return 'https://aipe-butex.netlify.app';
    }
    if (lowerName.includes('premium')) {
      return 'https://premium-b.netlify.app/';
    }
    if (lowerName.includes('unigrid')) {
      return 'https://unigrid.netlify.app/';
    }
    if (lowerName.includes('vote-for-ipe-cr') || lowerName.includes('vote')) {
      return 'https://voteforipe.netlify.app/';
    }
    if (lowerName.includes('notebot')) {
      return 'https://notebot3.netlify.app';
    }
    if (lowerName.includes('butexdc')) {
      return 'https://butexdc.netlify.app';
    }
    if (lowerName.includes('satprp') || lowerName.includes('sat-prp')) {
      return 'https://sat-prp4.netlify.app/';
    }
    return originalDemoUrl || '';
  };

  const getProjectPlayStoreUrl = (name: string, originalPlayStoreUrl?: string) => {
    const lowerName = name.toLowerCase();
    if (lowerName.includes('unigrid')) {
      return 'https://play.google.com/store/apps/details?id=com.unigrid.app';
    }
    return originalPlayStoreUrl || '';
  };

  const getProjectAdminUrl = (name: string, originalAdminUrl?: string) => {
    const lowerName = name.toLowerCase();
    if (lowerName.includes('premium')) {
      return 'https://premium-b.netlify.app/admin.html';
    }
    return originalAdminUrl || '';
  };

  const getProjectCredentials = (
    name: string,
    originalCredentials?: { username?: string; password?: string; label?: string },
    description?: string
  ) => {
    const lowerName = name.toLowerCase();
    if (lowerName.includes('satprp') || lowerName.includes('sat-prp')) {
      return {
        username: 'sat6066@preparation.com',
        password: '60606060',
        label: 'SAT Prep — Student Portal'
      };
    }
    if (lowerName.includes('unigrid')) {
      return {
        username: 'demo.reviewer@unigrid.app',
        password: 'UniGrid@2026',
        label: 'UniGrid — Reviewer Access'
      };
    }
    if (lowerName.includes('premium')) {
      return {
        username: 'login@test.com',
        password: '123456',
        label: 'Mimosa Pizza — Staff Portal'
      };
    }
    if (originalCredentials) return originalCredentials;
    if (description) {
      const match = description.match(/(?:Admin panel|Staff portal|Demo)?:\s*\[(.*?)\]\((https?:\/\/[^\s\)]+)\)\s*\(User:\s*([^\s|]+)\s*\|\s*Pass:\s*([^\s)]+)\)\.?/i);
      if (match) {
        return {
          label: match[1],
          username: match[3],
          password: match[4]
        };
      }
    }
    return null;
  };

  const getCredentialTheme = (name: string) => {
    const lower = name.toLowerCase();
    if (lower.includes('satprp') || lower.includes('sat-prp')) {
      return {
        cardBg: 'from-purple-500/[0.08] via-neutral-900/90 to-black',
        border: 'border-purple-500/30 group-hover:border-purple-400/50',
        iconColor: 'text-purple-400',
        btn: 'text-purple-400 hover:text-black hover:bg-purple-400 border-purple-400/40 hover:border-purple-400 shadow-purple-500/10',
        pillBorder: 'border-white/10 hover:border-purple-400/50',
        valueHover: 'group-hover/cred:text-purple-300',
        tagColor: 'text-purple-400',
        copyIconHover: 'group-hover/cred:text-purple-400',
        launchLabel: 'Launch Platform',
        footerBadge: 'Student Portal Access'
      };
    }
    if (lower.includes('unigrid')) {
      return {
        cardBg: 'from-blue-500/[0.08] via-neutral-900/90 to-black',
        border: 'border-blue-500/30 group-hover:border-blue-400/50',
        iconColor: 'text-blue-400',
        btn: 'text-blue-400 hover:text-black hover:bg-blue-400 border-blue-400/40 hover:border-blue-400 shadow-blue-500/10',
        pillBorder: 'border-white/10 hover:border-blue-400/50',
        valueHover: 'group-hover/cred:text-blue-300',
        tagColor: 'text-blue-400',
        copyIconHover: 'group-hover/cred:text-blue-400',
        launchLabel: 'Launch Hub',
        footerBadge: 'Reviewer Access'
      };
    }
    return {
      cardBg: 'from-amber-500/[0.08] via-neutral-900/90 to-black',
      border: 'border-amber-500/30 group-hover:border-amber-400/50',
      iconColor: 'text-amber-400',
      btn: 'text-amber-400 hover:text-black hover:bg-amber-400 border-amber-400/40 hover:border-amber-400 shadow-amber-500/10',
      pillBorder: 'border-white/10 hover:border-amber-400/50',
      valueHover: 'group-hover/cred:text-amber-300',
      tagColor: 'text-amber-400',
      copyIconHover: 'group-hover/cred:text-amber-400',
      launchLabel: 'Launch Portal',
      footerBadge: 'Live Demo Access'
    };
  };

  const getProjectDescription = (name: string, originalDescription?: string) => {
    const lowerName = name.toLowerCase();
    if (lowerName.includes('satprp') || lowerName.includes('sat-prp')) {
      return 'An interactive diagnostic, tracking, and mock testing platform designed to help students master the Scholastic Assessment Test (SAT) with real-time scoring and custom analytics.';
    }
    if (lowerName.includes('notebot')) {
      return 'An automated academic note management and assistant platform designed to streamline study resources for students. This is an updated UI model of https://notebot.netlify.app/';
    }
    if (lowerName.includes('butexdc')) {
      return 'Official website for the BUTEX Debating Club (Est. 1993) built with Vanilla JS, featuring interactive event showcases, debate archives, and member directories.';
    }
    if (lowerName.includes('notemate')) {
      return 'A dedicated academic resource and note management platform tailored for university students.';
    }
    if (lowerName.includes('smart-tutoring') || lowerName.includes('tutoring')) {
      return 'An intelligent system designed to monitor and enhance tutoring sessions with smart analytics and tracking.';
    }
    if (lowerName === 'portfolio' || lowerName === 'mh-mridul---portfolio') {
      return 'My personal portfolio website built with React, TypeScript, and Tailwind CSS, featuring modern glassmorphism and dynamic animations.';
    }
    if (lowerName.includes('vote-for-ipe-cr') || lowerName.includes('vote')) {
      return 'A digital voting system built for class representative elections in the Industrial & Production Engineering department.';
    }
    if (lowerName.includes('aipe-butex')) {
      return 'Official website for the Association of Industrial & Production Engineers-BUTEX, showcasing organizational news, events, and member directories.';
    }
    if (lowerName.includes('premium')) {
      return 'A full-featured commercial restaurant web platform for Mimosa Pizza featuring dining menus, table reservations, inventory tracking, and staff management.';
    }
    if (lowerName.includes('unigrid')) {
      return 'An enterprise-grade academic hub unifying the campus ecosystem across Android, iOS, and Web with real-time communication, grading ledgers, and secure file repositories. [Details of the app](https://info-unigrid.netlify.app/)';
    }

    if (originalDescription) {
      const credRegex = /(?:Admin panel|Staff portal|Demo)?:\s*\[(.*?)\]\((https?:\/\/[^\s\)]+)\)\s*\(User:\s*([^\s|]+)\s*\|\s*Pass:\s*([^\s)]+)\)\.?/i;
      return originalDescription.replace(credRegex, '').trim();
    }
    return '';
  };

  const renderFormattedDescription = (text: string) => {
    // Strip raw credentials snippet if present in description
    const credRegex = /(?:Admin panel|Staff portal|Demo)?:\s*\[(.*?)\]\((https?:\/\/[^\s\)]+)\)\s*\(User:\s*([^\s|]+)\s*\|\s*Pass:\s*([^\s)]+)\)\.?/i;
    const cleanText = text.replace(credRegex, '').trim();

    const regex = /\[(.*?)\]\((https?:\/\/[^\s\)]+)\)|(https?:\/\/[^\s]+)/g;
    const elements: React.ReactNode[] = [];
    let lastIndex = 0;
    let match: RegExpExecArray | null;

    while ((match = regex.exec(cleanText)) !== null) {
      if (match.index > lastIndex) {
        elements.push(cleanText.slice(lastIndex, match.index));
      }

      if (match[1] && match[2]) {
        const label = match[1];
        const url = match[2];
        elements.push(
          <a
            key={match.index}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-400 hover:text-amber-300 underline underline-offset-2 font-medium transition-colors cursor-pointer relative z-20 inline-flex items-center gap-0.5"
            onClick={(e) => e.stopPropagation()}
          >
            <span>{label}</span>
            <svg className="w-3 h-3 inline-block opacity-70" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        );
      } else if (match[3]) {
        const url = match[3];
        elements.push(
          <a
            key={match.index}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-400 hover:text-amber-300 underline underline-offset-2 font-medium transition-colors cursor-pointer relative z-20"
            onClick={(e) => e.stopPropagation()}
          >
            {url}
          </a>
        );
      }

      lastIndex = regex.lastIndex;
    }

    if (lastIndex < cleanText.length) {
      elements.push(cleanText.slice(lastIndex));
    }

    return elements;
  };



  return (
    <section id="projects" className="py-32 bg-black relative overflow-hidden min-h-screen">
      {/* Vibrant Background Blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-400/5 blur-[120px] rounded-full -z-10 translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-600/5 blur-[150px] rounded-full -z-10 -translate-x-1/2 translate-y-1/2"></div>
      <div className="absolute top-1/2 left-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-from)_0%,_transparent_100%)] from-amber-400/[0.02] -z-10 -translate-x-1/2 -translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center mb-24 text-center mt-20">
          <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-none uppercase">
            My <span className="gold-gradient italic">Projects</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {(() => {
            const SORT_ORDER = ['unigrid', 'premium', 'satprp', 'aipe', 'butexdc', 'smart', 'notebot'];
            const sortedProjects = [...projectsList].sort((a, b) => {
              const getIndex = (name: string) => {
                const lower = name.toLowerCase();
                const idx = SORT_ORDER.findIndex(key => lower.includes(key));
                return idx !== -1 ? idx : 99;
              };
              return getIndex(a.name) - getIndex(b.name);
            });

            return sortedProjects.map((project, index) => {
              const style = getProjectStyle(project.name, index);
              const demoUrl = getProjectDemoUrl(project.name, project.demoUrl);
              const playStoreUrl = getProjectPlayStoreUrl(project.name, project.playStoreUrl);
              const adminUrl = getProjectAdminUrl(project.name, project.adminUrl);
              const credentials = getProjectCredentials(project.name, project.credentials, project.description);
              const description = getProjectDescription(project.name, project.description);
            
            // Clean up languages: Only show those with >= 1.0% usage and cap to maximum of 4 items
            const filteredLanguages = project.languages
              .filter(lang => {
                const match = lang.match(/([\d.]+)/);
                if (match) {
                  const percentage = parseFloat(match[1]);
                  return percentage >= 1.0;
                }
                return true;
              })
              .slice(0, 4);

            return (
              <div 
                key={index} 
                className={`group relative flex flex-col justify-between p-8 rounded-[2rem] bg-gradient-to-br from-neutral-900/80 to-black border border-white/5 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 ${style.glow} ${style.accent} overflow-hidden`}
              >
                {/* Glowing Color Bleed inside the card */}
                <div className={`absolute -right-16 -top-16 w-48 h-48 bg-gradient-to-br ${style.glowColor} blur-[60px] rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none -z-10`}></div>

                {/* Action Buttons Top Right */}
                <div className="absolute top-8 right-8 flex items-center gap-2 z-10">
                  {playStoreUrl ? (
                    <a 
                      href={playStoreUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      title="Get it on Google Play"
                      className="group/btn p-2 rounded-xl bg-white/5 border border-white/10 group-hover:border-white/20 hover:bg-white/20 hover:-translate-y-1 hover:scale-110 hover:shadow-[0_0_15px_rgba(66,133,244,0.3)] transition-all duration-300 flex items-center justify-center"
                    >
                      <svg className="w-4 h-4 transition-transform duration-300 group-hover/btn:scale-110" viewBox="0 0 28.99 31.99" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.54 15.28.12 29.34a3.66 3.66 0 0 0 5.33 2.16l15.1-8.6Z" fill="#EA4335" />
                        <path d="m27.11 12.89-6.53-3.74-7.35 6.45 7.38 7.28 6.48-3.7a3.54 3.54 0 0 0 1.5-4.79 3.62 3.62 0 0 0-1.5-1.5z" fill="#FBBC04" />
                        <path d="M.12 2.66a3.57 3.57 0 0 0-.12.92v24.84a3.57 3.57 0 0 0 .12.92L14 15.64Z" fill="#4285F4" />
                        <path d="m13.64 16 6.94-6.85L5.5.51A3.73 3.73 0 0 0 3.63 0 3.64 3.64 0 0 0 .12 2.65Z" fill="#34A853" />
                      </svg>
                    </a>
                  ) : project.isPrivate ? (
                    <div 
                      title="Private Repository — Source code protected" 
                      className="p-2 rounded-xl bg-white/5 border border-white/10 text-neutral-500 cursor-not-allowed opacity-60 flex items-center justify-center"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                      </svg>
                    </div>
                  ) : project.url ? (
                    <a 
                      href={project.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      title="View GitHub Repository"
                      className="group/btn p-2 rounded-xl bg-white/5 border border-white/10 group-hover:border-white/20 hover:bg-white/20 hover:-translate-y-1 hover:scale-110 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-all duration-300"
                    >
                      <svg className="w-4 h-4 text-neutral-400 group-hover:text-neutral-200 group-hover/btn:text-white transition-colors" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                      </svg>
                    </a>
                  ) : null}

                  {adminUrl && adminUrl !== demoUrl && (
                    <a 
                      href={adminUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      title="Staff Portal (Admin Demo)"
                      className="group/btn p-2 rounded-xl bg-amber-400/10 border border-amber-400/20 group-hover:border-amber-400/40 hover:bg-amber-400/20 hover:-translate-y-1 hover:scale-110 hover:shadow-[0_0_15px_rgba(251,191,36,0.3)] transition-all duration-300 flex items-center justify-center text-amber-400"
                    >
                      <svg className="w-4 h-4 transition-transform duration-300 group-hover/btn:scale-110" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                      </svg>
                    </a>
                  )}
                  
                  {demoUrl && (
                    <a 
                      href={demoUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      title="Live Demo"
                      className="group/btn p-2 rounded-xl bg-white/5 border border-white/10 group-hover:border-white/20 hover:bg-white/20 hover:-translate-y-1 hover:scale-110 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-all duration-300"
                    >
                      <svg className="w-4 h-4 text-neutral-400 group-hover:text-neutral-200 group-hover/btn:text-white transition-colors" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                    </a>
                  )}
                </div>

                <div>
                  <div className="w-12 h-12 rounded-xl bg-neutral-800 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-neutral-800 transition-all duration-500">
                    {getProjectIcon(project.name)}
                  </div>
                  
                  <div className="flex items-center flex-wrap gap-2 mb-3">
                    <h3 className={`text-2xl font-black text-white tracking-tight transition-colors duration-300 ${style.textHover}`}>
                      {project.name}
                    </h3>
                    {project.isPrivate && (
                      <span className="px-2 py-0.5 bg-white/5 border border-white/10 text-white/60 text-[8px] font-bold uppercase tracking-wider rounded-md inline-flex items-center gap-1 backdrop-blur-md">
                        <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                        </svg>
                        Private
                      </span>
                    )}
                  </div>
                  
                  <div className="text-neutral-400 text-sm leading-relaxed mb-4 min-h-[56px]">
                    {renderFormattedDescription(description)}
                  </div>

                  {(() => {
                    const portalUrl = adminUrl || demoUrl;
                    const credTheme = getCredentialTheme(project.name);
                    
                    if (!portalUrl || !credentials) return null;

                    return (
                      <div className={`mb-6 p-3.5 rounded-2xl bg-gradient-to-br ${credTheme.cardBg} border ${credTheme.border} backdrop-blur-md flex flex-col gap-3 shadow-xl shadow-black/40 relative z-20 transition-all duration-300`}>
                        {/* Portal Header */}
                        <div className="flex items-center justify-between gap-2 border-b border-white/10 pb-2.5">
                          <div className="flex items-center gap-2">
                            <span className="relative flex h-2 w-2">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                            </span>
                            <span className="text-[11px] font-bold text-neutral-200 tracking-wide flex items-center gap-1.5">
                              <svg className={`w-3.5 h-3.5 ${credTheme.iconColor}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                              </svg>
                              {credentials.label || 'Demo Access'}
                            </span>
                          </div>
                          <a
                            href={portalUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`px-2.5 py-1 text-[10px] font-bold rounded-lg transition-all duration-300 inline-flex items-center gap-1.5 shadow-sm cursor-pointer border ${credTheme.btn}`}
                            onClick={(e) => e.stopPropagation()}
                            title="Open Portal in new tab"
                          >
                            <span>{credTheme.launchLabel}</span>
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          </a>
                        </div>

                        {/* Credentials Copy Pills */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {credentials.username && (
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                handleCopy(credentials.username!, `user-${project.name}`);
                              }}
                              className={`group/cred flex items-center justify-between gap-2 px-3 py-2 rounded-xl bg-black/70 hover:bg-black border ${credTheme.pillBorder} transition-all text-left cursor-pointer`}
                              title="Click to copy username"
                            >
                              <div className="flex flex-col min-w-0">
                                <span className="text-[8px] uppercase tracking-wider font-bold text-neutral-400">User</span>
                                <span className={`text-[11px] font-mono text-neutral-200 ${credTheme.valueHover} transition-colors truncate font-semibold`}>
                                  {credentials.username}
                                </span>
                              </div>
                              <div className={`shrink-0 text-neutral-400 ${credTheme.copyIconHover} transition-colors`}>
                                {copiedField === `user-${project.name}` ? (
                                  <span className="text-[9px] font-bold text-emerald-400 flex items-center gap-0.5">
                                    <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                    </svg>
                                    Copied
                                  </span>
                                ) : (
                                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                                  </svg>
                                )}
                              </div>
                            </button>
                          )}

                          {credentials.password && (
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                handleCopy(credentials.password!, `pass-${project.name}`);
                              }}
                              className={`group/cred flex items-center justify-between gap-2 px-3 py-2 rounded-xl bg-black/70 hover:bg-black border ${credTheme.pillBorder} transition-all text-left cursor-pointer`}
                              title="Click to copy password"
                            >
                              <div className="flex flex-col min-w-0">
                                <span className="text-[8px] uppercase tracking-wider font-bold text-neutral-400">Pass</span>
                                <span className={`text-[11px] font-mono text-neutral-200 ${credTheme.valueHover} transition-colors truncate font-semibold`}>
                                  {credentials.password}
                                </span>
                              </div>
                              <div className={`shrink-0 text-neutral-400 ${credTheme.copyIconHover} transition-colors`}>
                                {copiedField === `pass-${project.name}` ? (
                                  <span className="text-[9px] font-bold text-emerald-400 flex items-center gap-0.5">
                                    <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                    </svg>
                                    Copied
                                  </span>
                                ) : (
                                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                                  </svg>
                                )}
                              </div>
                            </button>
                          )}
                        </div>

                        {/* Footer Hint */}
                        <div className="text-[9px] text-neutral-400 font-sans flex items-center justify-between pt-0.5">
                          <span className="flex items-center gap-1">
                            <svg className="w-2.5 h-2.5 text-neutral-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                              <circle cx="12" cy="12" r="10" />
                              <line x1="12" y1="16" x2="12" y2="12" />
                              <line x1="12" y1="8" x2="12.01" y2="8" />
                            </svg>
                            Click credential to copy
                          </span>
                          <span className={`${credTheme.tagColor} font-semibold tracking-wide`}>{credTheme.footerBadge}</span>
                        </div>
                      </div>
                    );
                  })()}
                </div>

                <div className="flex items-center justify-between mt-auto">
                  <div className="flex flex-wrap gap-1.5 mt-1">
                    {filteredLanguages.map((lang, i) => (
                      <span key={i} className={`px-2 py-1 border text-[8px] font-bold uppercase tracking-wider rounded-lg transition-colors duration-300 ${style.badge}`}>
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          });
        })()}
        </div>
      </div>
    </section>
  );
};

export default Projects;
