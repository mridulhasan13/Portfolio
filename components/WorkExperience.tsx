import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import NooreLogo from '../Logo/Noore.webp';
import SHKSCScienceClubLogo from '../Logo/SHKSC Science Club.webp';
import NDSCLogo from '../Logo/Notre Dame Science Club.webp';
import NDPCLogo from '../Logo/Notre Dame Photography Club.webp';
import SHKSCNutritionClubLogo from '../Logo/SHKSC Nutrition Club.webp';
import PenmaniacsLogo from '../Logo/Penmaniacs.webp';
import TrimasLogo from '../Logo/Trimas.webp';
import HavenOfHandwritersLogo from '../Logo/Haven Of Handwriters.webp';
import MahmudulsPhotographsLogo from '../Logo/Mahmuduls photographs.webp';

/**
 * Work Experience — Architectural Infographic Ascent
 * Pure dark luxury theme (bg-black, amber-gold accents).
 * ALL 11 DISTINCT EXPERIENCES PRESERVED SEPARATELY (NO MERGING).
 * - Fixed navbar overlap: generous pt-32 sm:pt-36 md:pt-40 top padding so the floating navbar never obscures content.
 * - Added LIVE pulse indicators on active ventures (including Mahmudul's Photographs & Fashion Startup).
 * - Interactive Popup Card Modal on tap with glowing details.
 * - Exact vector model with 6 continuous ribbon flights (11 steps).
 * - Watcher with telescope on Step 11 summit platform gazing into the future.
 */

type WorkItem = {
  n: string;
  role: string;
  organization: string;
  period: string;
  shortPeriod: string;
  body: string;
  bullets: string[];
  side: 'left' | 'right';
  top: number; // y-coordinate in 1200 x 1780 canvas
  logo: string;
  isLive?: boolean;
  liveTag?: string;
  awards?: string[];
  links?: { type: string; url: string }[];
};

// Social media SVG icons
const socialIcons: Record<string, React.ReactNode> = {
  facebook: (
    <svg className="w-4 h-4 sm:w-[1.2cqw] sm:h-[1.2cqw]" fill="currentColor" viewBox="0 0 24 24">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  ),
  instagram: (
    <svg className="w-4 h-4 sm:w-[1.2cqw] sm:h-[1.2cqw]" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.668-.072-4.948-.197-4.359-2.62-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4.162 4.162 0 110-8.324A4.162 4.162 0 0112 16zM18.406 4.165a1.44 1.44 0 100 2.879 1.44 1.44 0 000-2.879z" />
    </svg>
  ),
  youtube: (
    <svg className="w-4 h-4 sm:w-[1.2cqw] sm:h-[1.2cqw]" fill="currentColor" viewBox="0 0 24 24">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  ),
  website: (
    <svg className="w-4 h-4 sm:w-[1.2cqw] sm:h-[1.2cqw]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  )
};

// --- ALL 11 DISTINCT EXPERIENCES (STARTING FROM THE RIGHT PORTION AT THE BOTTOM) ---
const WORK_ITEMS_11: WorkItem[] = [
  // 11: Top Summit on the RIGHT (Fashion Startup - LIVE)
  {
    n: '11',
    role: 'Founder',
    organization: 'Fashion Startup (Recently Started)',
    period: '2025 – Present',
    shortPeriod: '2025 – Present',
    isLive: true,
    liveTag: 'INCEPTION',
    body: 'Incepted a luxury fashion label focusing on the intersection of heritage textiles and contemporary silhouettes. Leading brand strategy, visual direction, and debut collections.',
    bullets: [
      'Incepted a luxury fashion label focusing on heritage textiles & contemporary silhouettes.',
      'Leading overall brand strategy, visual direction, and supply chain logistics.'
    ],
    side: 'right',
    top: 390,
    logo: NooreLogo
  },
  // 10: LEFT (Mahmudul's Photographs - LIVE)
  {
    n: '10',
    role: 'Founder',
    organization: "Mahmudul's Photographs",
    period: '2025 – Present',
    shortPeriod: '2025 – Present',
    isLive: true,
    liveTag: 'ACTIVE STUDIO',
    body: 'A professional portfolio house capturing macro life, urban narratives, and architectural stills. Focusing on high-fidelity visual storytelling through refined photographic lenses.',
    bullets: [
      'Professional photography house capturing macro life, urban narratives & stills.',
      'Focusing on high-fidelity visual storytelling and curated visual archives.'
    ],
    side: 'left',
    top: 498,
    logo: MahmudulsPhotographsLogo,
    links: [
      { type: 'facebook', url: 'https://www.facebook.com/MAHMUDUL.PHOTOGRAPHS' },
      { type: 'instagram', url: 'https://www.instagram.com/mahmuduls_photographs/' }
    ]
  },
  // 09: RIGHT
  {
    n: '09',
    role: 'Secretary (Creative Squad)',
    organization: 'Notre Dame Photography Club (NDPC)',
    period: '2024 – 2025',
    shortPeriod: '2024 – 2025',
    body: 'Recognized for exceptional dedication and opening new frontiers for the organization. Led the Creative Squad in visual direction, curation, and social aesthetics.',
    bullets: [
      'Led the Creative Squad in visual direction and event photography curation.',
      'Managed creative assets and official social media aesthetics for 2024–25 session.'
    ],
    side: 'right',
    top: 605,
    logo: NDPCLogo,
    links: [
      { type: 'facebook', url: 'https://www.facebook.com/ndpc17.official' },
      { type: 'instagram', url: 'https://www.instagram.com/ndpc.official/' }
    ]
  },
  // 08: LEFT
  {
    n: '08',
    role: 'President (Publication)',
    organization: 'Notre Dame Science Club (NDSC)',
    period: '2023 – 2024',
    shortPeriod: '2023 – 2024',
    body: 'Editor-in-Chief & Chief Designer for AUDRI 24 (Annual flagship publication). Directed publication logistics for the Annual Science Festival 2023. Awarded Honorable Mention.',
    bullets: [
      'Served as Editor-in-Chief & Chief Designer for flagship annual publication AUDRI 24.',
      'Organized the Annual Science Festival 2023, managing publication logistics.',
      'Awarded Honorable Mention for valor and determination (Lifetime Member).'
    ],
    side: 'left',
    top: 713,
    logo: NDSCLogo,
    awards: ['Honorable Mention', 'Lifetime Member'],
    links: [
      { type: 'facebook', url: 'https://www.facebook.com/NDSCOfficial' },
      { type: 'website', url: 'https://www.ndscbd.net/' }
    ]
  },
  // 07: RIGHT
  {
    n: '07',
    role: 'Organizer',
    organization: 'Notre Dame Science Club (NDSC)',
    period: '2023 – 2024',
    shortPeriod: '2023 – 2024',
    body: 'Actively organized club events and supported publication logistics. Collaborated with teams to ensure successful execution of various science festivals.',
    bullets: [
      'Actively organized club events and supported publication logistics.',
      'Collaborated across teams to ensure successful execution of science festivals.'
    ],
    side: 'right',
    top: 820,
    logo: NDSCLogo,
    links: [
      { type: 'facebook', url: 'https://www.facebook.com/NDSCOfficial' },
      { type: 'website', url: 'https://www.ndscbd.net/' }
    ]
  },
  // 06: LEFT
  {
    n: '06',
    role: 'Founder',
    organization: 'Penmaniacs',
    period: '2022 – Present',
    shortPeriod: '2022 – Present',
    isLive: true,
    body: 'Building a specialized platform for high-fidelity calligraphy and writing art. Curating professional artistic tools and educational resources for script enthusiasts.',
    bullets: [
      'Building a specialized platform for high-fidelity calligraphy and writing art.',
      'Curating professional artistic tools and educational resources for script enthusiasts.'
    ],
    side: 'left',
    top: 928,
    logo: PenmaniacsLogo,
    links: [
      { type: 'facebook', url: 'https://www.facebook.com/penmaniacs.creation' },
      { type: 'youtube', url: 'https://www.youtube.com/@penmaniacs.creation' }
    ]
  },
  // 05: RIGHT
  {
    n: '05',
    role: 'Co-Founder & Director',
    organization: 'TrimA’s',
    period: '2022 – Present',
    shortPeriod: '2022 – Present',
    isLive: true,
    body: 'Driving a community-led initiative for environmental consciousness and sustainable action. Successfully organized the Green Globe Festival and climate projects.',
    bullets: [
      'Driving a community-led initiative for environmental consciousness and sustainable action.',
      'Successfully organized the Green Globe Festival and grassroots climate projects.'
    ],
    side: 'right',
    top: 1035,
    logo: TrimasLogo,
    links: [{ type: 'facebook', url: 'https://www.facebook.com/trimas.org' }]
  },
  // 04: LEFT
  {
    n: '04',
    role: 'Founder & President',
    organization: 'Haven Of Handwriters',
    period: '2021 – Present',
    shortPeriod: '2021 – Present',
    isLive: true,
    body: 'Leading a niche movement to celebrate the art of manual script with 4,000+ members. Growing a vibrant community focused on calligraphic excellence.',
    bullets: [
      'Leading a national movement to celebrate the art of manual script with 4,000+ members.',
      'Growing a vibrant community focused on calligraphic excellence and hand-inked arts.'
    ],
    side: 'left',
    top: 1143,
    logo: HavenOfHandwritersLogo,
    links: [{ type: 'facebook', url: 'https://www.facebook.com/haven.of.handwriters' }]
  },
  // 03: RIGHT
  {
    n: '03',
    role: 'Assistant General Secretary (Olympiad)',
    organization: 'SHKSC Science Club',
    period: '2022 – 2023',
    shortPeriod: '2022 – 2023',
    body: 'Organized SHKSC Science Workshop 2022. Coordinated Education Week and Club Festival 2023. Spearheaded Olympiad initiatives and resource curation.',
    bullets: [
      'Served from March 2022 – August 2023 leading Olympiad initiatives.',
      'Organized SHKSC Science Workshop 2022 (April 14-15, 2022).',
      'Coordinated Education Week and Club Festival 2023 (Jan 22-27, 2023).',
      'Spearheaded Olympiad initiatives and resource curation for student competitors.'
    ],
    side: 'right',
    top: 1250,
    logo: SHKSCScienceClubLogo,
    links: [
      { type: 'facebook', url: 'https://www.facebook.com/shkscsc' },
      { type: 'instagram', url: 'https://www.instagram.com/shkscsc_official/' }
    ]
  },
  // 02: LEFT
  {
    n: '02',
    role: 'Vice-President',
    organization: 'SHKSC Nutrition Club',
    period: '2022 – 2023',
    shortPeriod: '2022 – 2023',
    body: 'Spearheaded nutrition awareness campaigns reaching thousands of students. Directed club participation in International Nutrition Olympiad 2022.',
    bullets: [
      'Spearheaded nutrition awareness campaigns reaching thousands of students.',
      'Directed the club\'s participation in the International Nutrition Olympiad 2022.',
      'Managed organizational growth and membership expansion.'
    ],
    side: 'left',
    top: 1358,
    logo: SHKSCNutritionClubLogo,
    links: [
      { type: 'facebook', url: 'https://www.facebook.com/shkscnc' },
      { type: 'instagram', url: 'https://www.instagram.com/shksc_nutrition_club/' }
    ]
  },
  // 01: Bottom landing on the RIGHT (Starting point)
  {
    n: '01',
    role: 'Office Secretary',
    organization: 'SHKSC Nutrition Club',
    period: '2021 – 2022',
    shortPeriod: '2021 – 2022',
    body: 'Managed club documentation and administrative records. Assisted in coordinating club meetings and nutrition awareness sessions.',
    bullets: [
      'Managed club documentation and administrative records.',
      'Assisted in coordinating club meetings and nutrition awareness sessions.'
    ],
    side: 'right',
    top: 1465,
    logo: SHKSCNutritionClubLogo,
    links: [
      { type: 'facebook', url: 'https://www.facebook.com/shkscnc' },
      { type: 'instagram', url: 'https://www.instagram.com/shksc_nutrition_club/' }
    ]
  }
];

const RIBBON_TOPS = [345, 560, 775, 990, 1205, 1420];

const ribbonPath = (y: number) =>
  [
    `M363 ${y}`,
    `H507`,
    `L683 ${y + 107}`,
    `H827`,
    `V${y + 210}`,
    `H683`,
    `L507 ${y + 102}`,
    `H363`,
    `Z`
  ].join(' ');

// Celestial Background Stars (Coordinates inside 1200 x 1780 canvas)
const BG_STARS = [
  { cx: 120, cy: 150, r: 1.5, dur: '3.2s', delay: '0s' },
  { cx: 280, cy: 220, r: 2.2, dur: '4.1s', delay: '1.2s' },
  { cx: 950, cy: 180, r: 1.8, dur: '3.7s', delay: '0.5s' },
  { cx: 1080, cy: 260, r: 2.5, dur: '4.8s', delay: '2.1s' },
  { cx: 180, cy: 420, r: 1.4, dur: '3.5s', delay: '1.8s' },
  { cx: 80, cy: 620, r: 2.0, dur: '4.3s', delay: '0.8s' },
  { cx: 240, cy: 780, r: 1.6, dur: '3.9s', delay: '2.5s' },
  { cx: 1020, cy: 520, r: 2.2, dur: '4.5s', delay: '1.4s' },
  { cx: 1120, cy: 690, r: 1.5, dur: '3.3s', delay: '0.3s' },
  { cx: 980, cy: 880, r: 2.4, dur: '4.7s', delay: '2.7s' },
  { cx: 150, cy: 1020, r: 1.8, dur: '3.8s', delay: '1.1s' },
  { cx: 260, cy: 1180, r: 2.2, dur: '4.2s', delay: '0.6s' },
  { cx: 90, cy: 1350, r: 1.5, dur: '3.4s', delay: '2.3s' },
  { cx: 1040, cy: 1080, r: 2.5, dur: '4.9s', delay: '1.9s' },
  { cx: 1130, cy: 1250, r: 1.7, dur: '3.6s', delay: '0.9s' },
  { cx: 960, cy: 1420, r: 2.1, dur: '4.4s', delay: '2.0s' },
  { cx: 210, cy: 1560, r: 1.6, dur: '3.7s', delay: '1.5s' },
  { cx: 110, cy: 1680, r: 2.3, dur: '4.6s', delay: '0.4s' },
  { cx: 1020, cy: 1620, r: 1.8, dur: '3.9s', delay: '2.4s' },
  { cx: 1110, cy: 1720, r: 2.2, dur: '4.1s', delay: '1.7s' },
  // Faceted Diamond Stars
  { cx: 310, cy: 360, r: 3.0, dur: '5.2s', delay: '1.0s', isDiamond: true },
  { cx: 920, cy: 410, r: 3.2, dur: '5.5s', delay: '2.8s', isDiamond: true },
  { cx: 200, cy: 890, r: 2.8, dur: '4.9s', delay: '0.7s', isDiamond: true },
  { cx: 1060, cy: 960, r: 3.0, dur: '5.1s', delay: '1.6s', isDiamond: true },
  { cx: 250, cy: 1450, r: 3.2, dur: '5.4s', delay: '2.2s', isDiamond: true },
  { cx: 930, cy: 1540, r: 2.9, dur: '4.8s', delay: '0.5s', isDiamond: true },
];

// Upward Rising Stardust Particles
const DRIFT_DUST = [
  { cx: 160, cy: 300, r: 2, dur: '7.5s', delay: '0s' },
  { cx: 320, cy: 620, r: 1.8, dur: '8.5s', delay: '2s' },
  { cx: 220, cy: 1120, r: 2.2, dur: '9.2s', delay: '4s' },
  { cx: 140, cy: 1520, r: 1.6, dur: '7.8s', delay: '1s' },
  { cx: 990, cy: 360, r: 2.4, dur: '8.2s', delay: '3s' },
  { cx: 1080, cy: 760, r: 1.7, dur: '9.5s', delay: '1.5s' },
  { cx: 940, cy: 1220, r: 2.1, dur: '8.4s', delay: '4.5s' },
  { cx: 1050, cy: 1590, r: 2.0, dur: '7.9s', delay: '2.5s' },
];

export default function WorkExperience() {
  const [popupItem, setPopupItem] = useState<WorkItem | null>(null);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  // Lock body & document scroll and handle Escape key when popup modal is open
  useEffect(() => {
    if (!popupItem) return;

    const originalBodyOverflow = document.body.style.overflow;
    const originalDocOverflow = document.documentElement.style.overflow;
    const originalPaddingRight = document.body.style.paddingRight;

    // Compensate for scrollbar disappearance to prevent layout shift
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setPopupItem(null);
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalBodyOverflow;
      document.documentElement.style.overflow = originalDocOverflow;
      document.body.style.paddingRight = originalPaddingRight;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [popupItem]);

  return (
    <section id="work-experience" className="scroll-mt-28 md:scroll-mt-32 pt-36 pb-20 sm:pt-40 sm:pb-24 md:pt-44 md:pb-28 bg-black min-h-screen relative overflow-hidden select-text">
      {/* Background Animated Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-rose-600/10 via-amber-500/10 to-transparent blur-[160px] rounded-full pointer-events-none -z-10 animate-pulse" style={{ animationDuration: '6s' }} />
      <div className="absolute bottom-10 right-10 w-[550px] h-[550px] bg-red-600/10 blur-[150px] rounded-full pointer-events-none -z-10 animate-pulse" style={{ animationDuration: '8s' }} />

      <style>{`
        .bo-root {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          font-family: 'Plus Jakarta Sans', sans-serif;
          overflow-x: hidden;
        }
        .bo-wrap {
          width: 100%;
          max-width: 1240px;
          margin: 0 auto;
        }
        .bo-canvas {
          position: relative;
          width: 100%;
          aspect-ratio: 1200 / 1780;
          container-type: inline-size;
          overflow: hidden;
          background: radial-gradient(circle at 50% 20%, rgba(26, 12, 16, 0.85), rgba(8, 8, 10, 0.95) 75%);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 32px;
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.9), inset 0 0 30px rgba(225, 29, 72, 0.05);
        }
        .bo-svg {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          display: block;
        }

        /* Top Heading inside Canvas */
        .bo-head {
          position: absolute;
          left: 8.5%;
          top: 5.5%;
          z-index: 20;
        }
        .bo-head h1 {
          margin: 0;
          font-family: 'Outfit', sans-serif;
          font-weight: 900;
          letter-spacing: -0.02em;
          font-size: 2.8cqw;
          line-height: 1.1;
          text-transform: uppercase;
          background: linear-gradient(135deg, #ffffff 40%, #fbbf24 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .bo-head p {
          margin: 0.3cqw 0 0;
          font-size: 1.05cqw;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #fbbf24;
          text-shadow: 0 0 15px rgba(251, 191, 36, 0.4);
        }

        /* Desktop Canvas Text Blocks */
        .bo-item {
          position: absolute;
          z-index: 20;
          box-sizing: border-box;
          cursor: pointer;
          padding: 0.6cqw 0.8cqw;
          border-radius: 1cqw;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .bo-item:hover {
          background: rgba(255, 255, 255, 0.035);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.5), inset 0 0 15px rgba(251, 191, 36, 0.06);
          transform: translateY(-3px) scale(1.02);
        }
        .bo-item.left {
          left: 3%;
          width: 27cqw;
          max-width: 27cqw;
          text-align: right;
        }
        .bo-item.right {
          left: 70.5%;
          width: 27.5cqw;
          max-width: 27.5cqw;
          text-align: left;
        }

        /* Clean Organization Logo with Hover Halo */
        .bo-logo-clean {
          width: 3.6cqw;
          height: 3.6cqw;
          min-width: 34px;
          min-height: 34px;
          max-width: 58px;
          max-height: 58px;
          display: flex;
          align-items: center;
          background: transparent !important;
          border: none !important;
          box-shadow: none !important;
          transition: all 0.3s ease;
          position: relative;
        }
        .bo-item.left .bo-logo-clean {
          margin-left: auto;
          margin-right: 0;
          justify-content: flex-end;
        }
        .bo-item.right .bo-logo-clean {
          margin-left: 0;
          margin-right: auto;
          justify-content: flex-start;
        }
        .bo-item:hover .bo-logo-clean {
          transform: scale(1.14);
          filter: drop-shadow(0 0 14px rgba(251, 191, 36, 0.65));
        }

        .bo-role {
          margin-top: 0.3cqw;
          font-family: 'Outfit', sans-serif;
          font-size: 1.05cqw;
          font-weight: 800;
          line-height: 1.25;
          color: #ffffff;
          transition: color 0.2s ease;
        }
        .bo-item:hover .bo-role {
          color: #fde047;
          text-shadow: 0 0 12px rgba(253, 224, 71, 0.3);
        }
        .bo-org {
          margin-top: 0.15cqw;
          font-size: 0.76cqw;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          color: #a3a3a3;
          transition: color 0.2s ease;
        }
        .bo-item:hover .bo-org {
          color: #e5e5e5;
        }
        .bo-period {
          font-size: 0.7cqw;
          font-family: monospace;
          font-weight: 700;
          color: #fbbf24;
          margin-top: 0.1cqw;
          text-shadow: 0 0 10px rgba(251, 191, 36, 0.3);
        }
        .bo-body {
          margin-top: 0.35cqw;
          font-size: 0.63cqw;
          line-height: 1.45;
          font-weight: 300;
          color: #d4d4d4;
          overflow-wrap: break-word;
        }

        /* Clean Social Icons Strip */
        .bo-meta {
          margin-top: 0.4cqw;
          display: flex;
          align-items: center;
          gap: 0.5cqw;
          justify-content: flex-start;
        }
        .bo-item.left .bo-meta {
          justify-content: flex-end;
        }
        .bo-item.right .bo-meta {
          justify-content: flex-start;
        }
        .bo-social-link-clean {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: transparent !important;
          border: none !important;
          box-shadow: none !important;
          color: #9ca3af;
          transition: all 0.2s ease;
        }
        .bo-social-link-clean:hover {
          color: #fbbf24;
          transform: scale(1.2);
          filter: drop-shadow(0 0 8px rgba(251, 191, 36, 0.6));
        }

        /* Glowing Platform Hover Highlight */
        .ribbon-platform {
          transition: filter 0.35s ease, opacity 0.35s ease;
        }
        .ribbon-platform.active {
          filter: drop-shadow(0 0 25px rgba(251, 191, 36, 0.95)) brightness(1.25);
        }

        /* Beautiful Continuous Ascending Trajectory Animations */
        @keyframes travelAscent {
          from {
            stroke-dashoffset: 4000;
          }
          to {
            stroke-dashoffset: 0;
          }
        }

        @keyframes laserSpineFlow {
          0%, 100% {
            opacity: 0.6;
            stroke-dashoffset: 0;
          }
          50% {
            opacity: 0.95;
            stroke-dashoffset: -20;
          }
        }

        @keyframes pulseStarNode {
          0%, 100% {
            transform: scale(0.85);
            opacity: 0.45;
            filter: drop-shadow(0 0 4px rgba(251, 191, 36, 0.5));
          }
          50% {
            transform: scale(1.35);
            opacity: 1;
            filter: drop-shadow(0 0 14px rgba(251, 191, 36, 1)) drop-shadow(0 0 22px rgba(255, 255, 255, 0.9));
          }
        }

        @keyframes ribbonAmbientShimmer {
          0%, 100% {
            filter: drop-shadow(0 6px 14px rgba(0, 0, 0, 0.6));
          }
          50% {
            filter: drop-shadow(0 8px 22px rgba(225, 29, 72, 0.35));
          }
        }

        .ribbon-stream-glow {
          animation: travelAscent 14s linear infinite;
        }

        .central-laser-spine {
          animation: laserSpineFlow 4s ease-in-out infinite;
        }

        .star-node-1 {
          animation: pulseStarNode 2.6s ease-in-out infinite;
          transform-origin: center;
        }
        .star-node-2 {
          animation: pulseStarNode 3.2s ease-in-out infinite -1s;
          transform-origin: center;
        }
        .star-node-3 {
          animation: pulseStarNode 2.8s ease-in-out infinite -1.8s;
          transform-origin: center;
        }

        /* Animated Cosmic Background Inside Canvas */
        @keyframes nebulaDriftA {
          0%, 100% {
            transform: translate(0px, 0px) scale(1);
            opacity: 0.45;
          }
          50% {
            transform: translate(30px, -40px) scale(1.15);
            opacity: 0.75;
          }
        }

        @keyframes nebulaDriftB {
          0%, 100% {
            transform: translate(0px, 0px) scale(1);
            opacity: 0.35;
          }
          50% {
            transform: translate(-35px, 30px) scale(1.2);
            opacity: 0.65;
          }
        }

        @keyframes twinkleStar {
          0%, 100% {
            opacity: 0.15;
            transform: scale(0.75);
          }
          50% {
            opacity: 1;
            transform: scale(1.4);
            filter: drop-shadow(0 0 6px rgba(254, 240, 138, 0.95));
          }
        }

        @keyframes stardustRise {
          0% {
            transform: translateY(0px) translateX(0px);
            opacity: 0.15;
          }
          50% {
            transform: translateY(-80px) translateX(20px);
            opacity: 0.85;
          }
          100% {
            transform: translateY(-160px) translateX(0px);
            opacity: 0.15;
          }
        }

        .nebula-glow-1 {
          animation: nebulaDriftA 16s ease-in-out infinite;
          transform-origin: 600px 500px;
          will-change: transform;
        }

        .nebula-glow-2 {
          animation: nebulaDriftB 20s ease-in-out infinite;
          transform-origin: 350px 1100px;
          will-change: transform;
        }

        .nebula-glow-3 {
          animation: nebulaDriftA 18s ease-in-out infinite -9s;
          transform-origin: 850px 1400px;
          will-change: transform;
        }

        /* Mobile Responsive Adjustments (< 768px) */
        @media (max-width: 767px) {
          .bo-canvas {
            border-radius: 22px;
          }
          .bo-head {
            left: 5%;
            top: 3.5%;
          }
          .bo-head h1 {
            font-size: 3.8cqw;
          }
          .bo-head p {
            font-size: 1.8cqw;
            margin-top: 0.3cqw;
          }

          .bo-item {
            cursor: pointer;
            -webkit-tap-highlight-color: transparent;
            padding: 0.2cqw 0.3cqw;
          }
          .bo-item:active {
            transform: scale(0.96);
          }
          .bo-item.left {
            left: 1.5%;
            width: 28.5cqw;
            text-align: right;
            display: flex;
            flex-direction: column;
            align-items: flex-end;
          }
          .bo-item.left .bo-logo-clean {
            margin-left: auto;
            margin-right: 0;
            justify-content: flex-end;
          }
          .bo-item.right {
            left: 70%;
            width: 28.5cqw;
            text-align: left;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
          }
          .bo-item.right .bo-logo-clean {
            margin-left: 0;
            margin-right: auto;
            justify-content: flex-start;
          }
          .bo-logo-clean {
            width: 5cqw;
            height: 5cqw;
            min-width: 18px;
            min-height: 18px;
            max-width: 24px;
            max-height: 24px;
          }
          .bo-role {
            font-size: clamp(8px, 1.8cqw, 13px);
            font-weight: 700;
            line-height: 1.25;
            margin-top: 0.2cqw;
            white-space: normal;
            word-break: normal;
            overflow-wrap: break-word;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
            max-width: 100%;
          }
          .bo-period {
            font-size: clamp(7.5px, 1.45cqw, 11px);
            font-weight: 600;
            margin-top: 0.15cqw;
            letter-spacing: 0.02em;
            max-width: 100%;
          }
          .bo-org, .bo-body, .bo-meta {
            display: none !important;
          }
        }
      `}</style>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full bo-root">
        {/* Section Header: Aligned with generous top clearance below floating navbar */}
        <div className="text-center mb-8 sm:mb-12">
          <h3 className="text-amber-400 font-bold uppercase tracking-[0.3em] text-[10px] sm:text-xs mb-2 sm:mb-3">
            Career Trajectory
          </h3>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Work <span className="gold-gradient italic">Experience</span>
          </h2>
          <p className="mt-3 text-neutral-400 max-w-xl mx-auto text-xs sm:text-sm font-light">
            An architectural ascent connecting foundational leadership, prestigious publications, and contemporary ventures.
          </p>
        </div>

        <div className="bo-wrap">
          {/* =========================================================================
              EXACT 1200 x 1780 VECTOR CANVAS (SCALES FLUIDLY ON ALL SCREENS)
              Starts on the RIGHT at the bottom, ascending to the summit on the RIGHT.
              ========================================================================= */}
          <div className="bo-canvas">
            <svg
              className="bo-svg"
              viewBox="0 0 1200 1780"
              preserveAspectRatio="xMidYMin slice"
              role="img"
              aria-label="Stepped crimson ribbon career trajectory infographic with eleven milestones"
            >
              <defs>
                {/* Central Pillar 3D Metallic Gradient */}
                <linearGradient
                  id="bo-pillar"
                  gradientUnits="userSpaceOnUse"
                  x1="539"
                  y1="0"
                  x2="651"
                  y2="0"
                >
                  <stop offset="0" stopColor="#ff4438" />
                  <stop offset="0.25" stopColor="#dc2626" />
                  <stop offset="0.75" stopColor="#991b1b" />
                  <stop offset="1" stopColor="#550912" />
                </linearGradient>

                {/* Central Laser Spine Light Stream (Flows upward) */}
                <linearGradient
                  id="bo-laser-spine"
                  gradientUnits="userSpaceOnUse"
                  x1="595"
                  y1="1750"
                  x2="595"
                  y2="294"
                >
                  <stop offset="0" stopColor="#ef4444" stopOpacity="0.1" />
                  <stop offset="0.3" stopColor="#fbbf24" stopOpacity="0.85" />
                  <stop offset="0.7" stopColor="#ffffff" stopOpacity="1" />
                  <stop offset="1" stopColor="#fef08a" stopOpacity="0.9" />
                </linearGradient>

                {/* Ribbon 3D Bevel Gradients */}
                {RIBBON_TOPS.map((y, i) => (
                  <linearGradient
                    key={i}
                    id={`bo-rib-${i}`}
                    gradientUnits="userSpaceOnUse"
                    x1="363"
                    y1={y}
                    x2="827"
                    y2={y + 210}
                  >
                    <stop offset="0%" stopColor="#ff3333" />
                    <stop offset="35%" stopColor="#dc2626" />
                    <stop offset="70%" stopColor="#b91c1c" />
                    <stop offset="100%" stopColor="#7a121d" />
                  </linearGradient>
                ))}

                {/* Drop shadow filter for 3D depth */}
                <filter id="ribbon-glow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="8" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>

                {/* Ambient Cosmic Background Nebula Gradients (Pure Vector Radial Fade without Heavy Rasterizer Blur) */}
                <radialGradient id="nebula-amber" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.2" />
                  <stop offset="30%" stopColor="#f59e0b" stopOpacity="0.12" />
                  <stop offset="65%" stopColor="#b45309" stopOpacity="0.04" />
                  <stop offset="100%" stopColor="#000000" stopOpacity="0" />
                </radialGradient>

                <radialGradient id="nebula-crimson" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#e11d48" stopOpacity="0.25" />
                  <stop offset="35%" stopColor="#9f1239" stopOpacity="0.12" />
                  <stop offset="70%" stopColor="#4c0519" stopOpacity="0.04" />
                  <stop offset="100%" stopColor="#000000" stopOpacity="0" />
                </radialGradient>

                <radialGradient id="nebula-rose" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#f43f5e" stopOpacity="0.2" />
                  <stop offset="40%" stopColor="#881337" stopOpacity="0.08" />
                  <stop offset="100%" stopColor="#000000" stopOpacity="0" />
                </radialGradient>

                {/* Architectural Blueprint Grid Pattern */}
                <pattern id="bo-cosmic-grid" width="80" height="80" patternUnits="userSpaceOnUse">
                  <path d="M 80 0 L 0 0 0 80" fill="none" stroke="rgba(255, 255, 255, 0.025)" strokeWidth="1" />
                  <circle cx="80" cy="80" r="1.5" fill="rgba(251, 191, 36, 0.12)" />
                </pattern>
              </defs>

              {/* =========================================================================
                  ANIMATED COSMIC BACKGROUND LAYER (LIVING NEBULA, GRID & STARFIELD)
                  ========================================================================= */}
              {/* Architectural Matrix Grid */}
              <rect width="1200" height="1780" fill="url(#bo-cosmic-grid)" />

              {/* Drifting Luminous Nebula Clouds (Instant GPU-rendered without SVG filter lag) */}
              <g className="nebula-glow-1 pointer-events-none">
                <circle cx="680" cy="480" r="480" fill="url(#nebula-amber)" />
              </g>
              <g className="nebula-glow-2 pointer-events-none">
                <circle cx="360" cy="1050" r="450" fill="url(#nebula-crimson)" />
              </g>
              <g className="nebula-glow-3 pointer-events-none">
                <circle cx="840" cy="1420" r="460" fill="url(#nebula-rose)" />
              </g>

              {/* Animated Rising Stardust Motes */}
              <g opacity="0.8" className="pointer-events-none">
                {DRIFT_DUST.map((dust, dIdx) => (
                  <circle
                    key={`dust-${dIdx}`}
                    cx={dust.cx}
                    cy={dust.cy}
                    r={dust.r}
                    fill="#fef08a"
                    style={{
                      animation: `stardustRise ${dust.dur} ease-in-out infinite ${dust.delay}`,
                      transformOrigin: `${dust.cx}px ${dust.cy}px`
                    }}
                  />
                ))}
              </g>

              {/* Twinkling Starfield with Diamond Stars */}
              <g className="pointer-events-none">
                {BG_STARS.map((star, sIdx) =>
                  star.isDiamond ? (
                    <g
                      key={`star-${sIdx}`}
                      style={{
                        animation: `twinkleStar ${star.dur} ease-in-out infinite ${star.delay}`,
                        transformOrigin: `${star.cx}px ${star.cy}px`
                      }}
                    >
                      <path
                        d={`M${star.cx} ${star.cy - star.r * 2.5} Q${star.cx} ${star.cy} ${star.cx - star.r * 2.5} ${star.cy} Q${star.cx} ${star.cy} ${star.cx} ${star.cy + star.r * 2.5} Q${star.cx} ${star.cy} ${star.cx + star.r * 2.5} ${star.cy} Z`}
                        fill="#fef08a"
                      />
                      <circle cx={star.cx} cy={star.cy} r={star.r * 0.7} fill="#ffffff" />
                    </g>
                  ) : (
                    <circle
                      key={`star-${sIdx}`}
                      cx={star.cx}
                      cy={star.cy}
                      r={star.r}
                      fill="#fde047"
                      style={{
                        animation: `twinkleStar ${star.dur} ease-in-out infinite ${star.delay}`,
                        transformOrigin: `${star.cx}px ${star.cy}px`
                      }}
                    />
                  )
                )}
              </g>

              {/* Central Pillar Vertical Column with 3D edge */}
              <rect x="539" y="294" width="112" height="1420" fill="url(#bo-pillar)" rx="3" />

              {/* Luminous Core Light Seam inside the Pillar */}
              <line
                x1="595"
                y1="300"
                x2="595"
                y2="1710"
                stroke="url(#bo-laser-spine)"
                strokeWidth="2.5"
                strokeDasharray="8 6"
                className="animate-pulse"
                opacity="0.75"
              />

              {/* 6 Continuous Stepped Ribbons Crossing the Pillar */}
              {RIBBON_TOPS.map((y, i) => {
                const isRibbonActive = hoveredIdx !== null && (Math.floor((10 - hoveredIdx) / 2) === (5 - i));

                return (
                  <path
                    key={i}
                    d={ribbonPath(y)}
                    fill={`url(#bo-rib-${i})`}
                    className={`ribbon-platform ${isRibbonActive ? 'active' : ''}`}
                    filter={isRibbonActive ? 'url(#ribbon-glow)' : 'drop-shadow(0 6px 14px rgba(0,0,0,0.6))'}
                  />
                );
              })}

              {/* 3D Fold Shadows where Ribbons Wrap Behind the Pillar (Left Side) */}
              {[1, 2, 3, 4, 5].map((k) => {
                const y = 345 + 215 * k;
                return (
                  <polygon
                    key={`l${k}`}
                    points={`507,${y} 539,${y - 20} 539,${y + 19}`}
                    fill="#3b040c"
                    opacity="0.88"
                  />
                );
              })}

              {/* 3D Fold Shadows where Ribbons Wrap Behind the Pillar (Right Side) */}
              {[0, 1, 2, 3, 4].map((k) => {
                const y = 555 + 215 * k;
                return (
                  <polygon
                    key={`r${k}`}
                    points={`651,${y - 20} 683,${y} 651,${y + 20}`}
                    fill="#2a0208"
                    opacity="0.88"
                  />
                );
              })}

              {/* Continuous Ascending Career Trajectory Light Stream */}
              <path
                d="M790 1578 L683 1578 L507 1471 L400 1471 M400 1256 L507 1256 L683 1363 L790 1363 M790 1148 L683 1148 L507 1041 L400 1041 M400 826 L507 826 L683 933 L790 933 M790 718 L683 718 L507 611 L400 611 M400 396 L507 396 L683 503 L790 503"
                fill="none"
                stroke="url(#bo-laser-spine)"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeDasharray="28 200"
                className="ribbon-stream-glow"
                opacity="0.9"
              />

              {/* Pulsing Constellation Waypoint Nodes at Central Ribbon Junctions */}
              <g className="ascent-nodes" opacity="0.95">
                {[1525, 1310, 1095, 880, 665, 450].map((yVal, i) => (
                  <g key={i} transform={`translate(595, ${yVal})`}>
                    <circle cx="0" cy="0" r="14" fill="#fbbf24" opacity="0.14" filter="blur(6px)" />
                    <circle cx="0" cy="0" r="3.2" fill="#fef08a" className={`star-node-${(i % 3) + 1}`} />
                    <circle cx="0" cy="0" r="1.4" fill="#ffffff" />
                  </g>
                ))}
              </g>
            </svg>

            {/* Poster Header */}
            <div className="bo-head">
              <h1>Career Trajectory</h1>
              <p>Chronological Ascent</p>
            </div>

            {/* 11 Work Items: Tapping ANY item triggers the popup card modal */}
            {WORK_ITEMS_11.map((item, idx) => (
              <div
                key={idx}
                onClick={() => setPopupItem(item)}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                className={`bo-item ${item.side}`}
                style={{ top: `${(item.top / 1780) * 100}%` }}
              >
                {/* Clean Organization Logo */}
                <div className={`flex items-center ${item.side === 'left' ? 'justify-end' : 'justify-start'} mb-1`}>
                  <div className="bo-logo-clean">
                    <img
                      src={item.logo}
                      alt={item.organization}
                      loading="eager"
                      decoding="async"
                      className="w-full h-full object-contain filter drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]"
                    />
                  </div>
                </div>

                <div className="bo-role">{item.role}</div>
                <div className="bo-org">{item.organization}</div>
                <div className="bo-period">
                  <span className="hidden md:inline">{item.period}</span>
                  <span className="md:hidden font-bold">{item.shortPeriod}</span>
                </div>
                <div className="bo-body">{item.body}</div>

                {/* Desktop Bare Social Icons */}
                <div className="bo-meta">
                  {item.links && item.links.map((link, lIdx) => (
                    <a
                      key={lIdx}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="bo-social-link-clean"
                      aria-label={link.type}
                    >
                      {socialIcons[link.type]}
                    </a>
                  ))}
                  {item.awards && item.awards.map((award, aIdx) => (
                    <span
                      key={aIdx}
                      className="px-1.5 py-0.5 rounded text-[0.6cqw] font-bold tracking-wider uppercase bg-amber-400/10 text-amber-300 border border-amber-400/25 shadow-[0_0_8px_rgba(251,191,36,0.2)]"
                    >
                      {award}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* =========================================================================
            POPUP CARD MODAL: Pops up when ANY experience is tapped on mobile or desktop
            Rendered via createPortal with zero-scroll overflow-hidden and executive typography
            ========================================================================= */}
        {popupItem && typeof document !== 'undefined' && createPortal(
          <div
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-xl animate-fadeIn select-none overflow-hidden"
            onClick={() => setPopupItem(null)}
            onWheel={(e) => e.stopPropagation()}
            onTouchMove={(e) => e.preventDefault()}
          >
            <div
              className="relative w-full max-w-[480px] p-5 sm:p-6 md:p-7 rounded-2xl sm:rounded-3xl bg-neutral-950/98 border border-amber-400/30 shadow-[0_20px_60px_rgba(0,0,0,0.9),0_0_40px_rgba(251,191,36,0.12)] text-left transform transition-all animate-scaleUp select-text overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Dynamic ambient gold/crimson aura */}
              <div className="absolute -top-12 -right-12 w-40 h-40 bg-gradient-to-br from-amber-400/20 to-rose-600/15 blur-[45px] rounded-full pointer-events-none" />
              <div className="absolute -bottom-12 -left-12 w-40 h-40 bg-amber-500/10 blur-[45px] rounded-full pointer-events-none" />

              {/* Close Button (✕) */}
              <button
                onClick={() => setPopupItem(null)}
                className="absolute top-4 right-4 sm:top-5 sm:right-5 w-8 h-8 rounded-full bg-white/5 border border-white/10 text-neutral-400 hover:text-white hover:border-amber-400/50 hover:bg-amber-400/10 flex items-center justify-center transition-all z-20 cursor-pointer"
                aria-label="Close details"
              >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Header with Logo, Role & Period */}
              <div className="flex items-center gap-3.5 sm:gap-4 mb-3.5 pr-8">
                <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center shrink-0 p-1.5 rounded-xl sm:rounded-2xl bg-white/[0.04] border border-white/10 shadow-md">
                  <img
                    src={popupItem.logo}
                    alt={popupItem.organization}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-contain filter drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <span className="text-amber-400 font-mono text-[10px] sm:text-xs font-semibold uppercase tracking-wider block">
                    {popupItem.period}
                  </span>
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-white tracking-tight leading-snug mt-0.5">
                    {popupItem.role}
                  </h3>
                  <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-neutral-400 mt-0.5 truncate">
                    {popupItem.organization}
                  </p>
                </div>
              </div>

              <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent w-full my-3 sm:my-3.5"></div>

              {/* Bullet Points with Professional Grade Typography */}
              <ul className="space-y-2 sm:space-y-2.5 text-[11.5px] sm:text-[13px] text-neutral-300/90 font-normal leading-relaxed">
                {popupItem.bullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0 mt-1.5 shadow-[0_0_6px_rgba(251,191,36,0.6)]"></span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              {/* Awards & Social Links Footer */}
              {(popupItem.links || popupItem.awards) && (
                <div className="flex flex-wrap items-center justify-between gap-3 mt-4 pt-3 border-t border-white/10">
                  {popupItem.links && popupItem.links.length > 0 ? (
                    <div className="flex items-center gap-2.5">
                      {popupItem.links.map((link, lIdx) => (
                        <a
                          key={lIdx}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-neutral-400 hover:text-amber-400 transition-all hover:scale-110 p-1"
                          aria-label={link.type}
                        >
                          {socialIcons[link.type]}
                        </a>
                      ))}
                    </div>
                  ) : (
                    <div></div>
                  )}

                  {popupItem.awards && (
                    <div className="flex flex-wrap gap-1.5">
                      {popupItem.awards.map((award, aIdx) => (
                        <span
                          key={aIdx}
                          className="px-2 py-0.5 rounded-md text-[10px] font-semibold uppercase tracking-wider bg-amber-400/10 text-amber-300 border border-amber-400/25"
                        >
                          {award}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>,
          document.body
        )}
      </div>
    </section>
  );
}
