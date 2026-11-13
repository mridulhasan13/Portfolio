import React, { useState } from 'react';

export interface ResearchData {
  title: string;
  type: string;
  status: 'Under Review' | 'Accepted' | 'Published';
  statusText?: string;
  started: string;
  role: string;
  abstract: string;
  contributions: {
    title: string;
    description: string;
  }[];
  keywords: string[];
  doi?: string | null;
}

export const researchProjectData: ResearchData = {
  title: 'Social Hotspot in Textile and Apparel Supply Chain',
  type: 'Springer Book Chapter',
  status: 'Under Review',
  statusText: 'Currently under review',
  started: 'June 2026',
  role: 'Contributor · Scientific Figures, Comparative Tables, Editing & Citations',
  abstract:
    'Textile and apparel supply chains span many countries, where workers frequently face unsafe conditions, low pay, long hours, and labor violations. This chapter provides a comprehensive review of where social hotspots arise across every stage of a garment\'s life cycle, from raw materials to end-of-life, evaluating assessment methodologies (S-LCA, SHDB, PSILCA, OpenLCA) and multi-stakeholder due-diligence frameworks that can mitigate these systemic risks.',
  contributions: [
    {
      title: 'Visual Synthesis & Data Architecture',
      description:
        'Designed 9 publication figures (supply chain map, S-LCA workflow, stakeholder framework, roadmap) and built 5 comparative tables evaluating assessment tools, mitigation strategies, and certification standards.'
    },
    {
      title: 'Manuscript Editing & Citations',
      description:
        'Conducted technical and structural manuscript editing for academic consistency and managed the 130+ reference entries formatted to publisher specification.'
    }
  ],
  keywords: [
    'Social LCA (S-LCA)',
    'Supply Chain Sustainability',
    'Textile Life Cycle',
    'UNEP/SETAC Guidelines',
    'Adobe Illustrator'
  ],
  doi: null // Set to DOI string (e.g. "10.1007/...") once published
};

export interface ResearchCardProps {
  data?: ResearchData;
  className?: string;
  isOverview?: boolean;
  onExplore?: () => void;
}

export const ResearchCard: React.FC<ResearchCardProps> = ({
  data = researchProjectData,
  className = '',
  isOverview = false,
  onExplore
}) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <article
      onClick={isOverview && onExplore ? onExplore : undefined}
      className={`relative rounded-2xl sm:rounded-3xl bg-neutral-950/70 border border-neutral-800/80 p-4 sm:p-7 md:p-8 transition-all duration-300 hover:border-neutral-700 shadow-xl ${
        isOverview ? 'cursor-pointer group hover:border-amber-400/40 hover:bg-neutral-900/30' : ''
      } ${className}`}
    >
      {/* Top Meta Line: Venue on left, Date & Status on right */}
      <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2 pb-3.5 sm:pb-4 border-b border-neutral-800/80 font-mono text-xs">
        <span className="font-semibold text-neutral-300 uppercase tracking-wider text-[10px] sm:text-[11px] whitespace-nowrap">
          {data.type}
        </span>
        <div className="flex items-center gap-1.5 sm:gap-2 font-mono text-[11px] sm:text-xs tracking-wider whitespace-nowrap">
          <span className="text-neutral-400">{data.started}</span>
          <span className="text-neutral-600">·</span>
          <span className="text-amber-400 font-medium">{data.status}</span>
        </div>
      </div>

      {/* Title & Contributor Role */}
      <div className="mt-4 mb-3.5">
        <h3 className={`text-lg sm:text-2xl lg:text-3xl font-bold text-white tracking-tight leading-snug ${
          isOverview ? 'group-hover:text-amber-400 transition-colors' : ''
        }`}>
          {data.title}
        </h3>
        <p className="mt-1.5 text-xs sm:text-sm text-neutral-300 font-normal">
          {data.role}
        </p>
      </div>

      {/* Abstract / Overview */}
      <div className={isOverview ? 'mb-4' : 'mb-5 sm:mb-6'}>
        <p
          className={`text-xs sm:text-sm md:text-base text-neutral-400 leading-relaxed font-light ${
            isOverview ? 'line-clamp-3' : ''
          }`}
        >
          {data.abstract}
        </p>
      </div>

      {/* When in Overview mode on Home, show a concise preview bar */}
      {isOverview ? (
        <div className="pt-4 border-t border-neutral-800/80 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex flex-wrap items-center gap-1.5">
            {data.keywords.slice(0, 3).map((kw, idx) => (
              <span
                key={idx}
                className="px-2 sm:px-2.5 py-0.5 rounded-md bg-neutral-900 border border-neutral-800 text-neutral-400 font-mono text-[10px] whitespace-nowrap"
              >
                {kw}
              </span>
            ))}
          </div>

          <div className="inline-flex items-center gap-1.5 text-amber-400 text-xs font-mono font-medium group-hover:translate-x-1 transition-transform">
            <span>View Full Publication</span>
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>
      ) : (
        <>
          {/* Key Contributions: Simple & Clean Academic Cards */}
          <div className="pt-5 sm:pt-6 border-t border-neutral-800/80">
            <h4 className="font-mono text-[11px] font-medium uppercase tracking-wider text-neutral-500 mb-3 sm:mb-3.5">
              Direct Contributions
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-3.5">
              {data.contributions.map((c, i) => (
                <div
                  key={i}
                  className="p-3.5 sm:p-5 rounded-xl bg-neutral-900/40 border border-neutral-800/70"
                >
                  <h5 className="text-sm font-semibold text-white mb-1.5 sm:mb-2">
                    {c.title}
                  </h5>
                  <p className="text-xs sm:text-[13px] text-neutral-400 leading-relaxed font-light">
                    {c.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Methodology & Scope */}
          <div className="mt-5 pt-4 border-t border-neutral-800/60">
            <button
              onClick={() => setShowDetails(!showDetails)}
              className="text-xs font-mono text-neutral-400 hover:text-white flex items-center gap-1.5 transition-colors"
            >
              <span>{showDetails ? 'Hide methodology & scope' : 'View methodology & scope'}</span>
              <svg
                className={`w-3.5 h-3.5 transition-transform duration-200 ${showDetails ? 'rotate-180' : ''}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {showDetails && (
              <div className="mt-3 p-3.5 sm:p-4 rounded-xl bg-neutral-900/30 border border-neutral-800/60 text-xs text-neutral-400 leading-relaxed font-light space-y-2">
                <p>
                  <span className="text-neutral-200 font-medium font-mono text-[11px] uppercase tracking-wider mr-2">
                    Assessment Framework:
                  </span>
                  Literature review using Social Life Cycle Assessment (S-LCA) and the UNEP/SETAC guidelines across seven garment life-cycle stages.
                </p>
                <p>
                  <span className="text-neutral-200 font-medium font-mono text-[11px] uppercase tracking-wider mr-2">
                    Tools & Governance:
                  </span>
                  Evaluated SHDB, PSILCA, OpenLCA, corporate due-diligence schemes, digital product passports (DPP), and circular economy mitigation models.
                </p>
              </div>
            )}
          </div>

          {/* Keywords & Confidentiality Footer */}
          <div className="mt-5 sm:mt-6 pt-4 sm:pt-5 border-t border-neutral-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
            <div className="flex flex-wrap items-center gap-1.5">
              {data.keywords.map((kw, idx) => (
                <span
                  key={idx}
                  className="px-2 sm:px-2.5 py-0.5 rounded-md bg-neutral-900 border border-neutral-800 text-neutral-400 font-mono text-[10px] whitespace-nowrap"
                >
                  {kw}
                </span>
              ))}
            </div>

            <div className="font-mono text-[11px] text-neutral-500 sm:text-right shrink-0 pt-1 sm:pt-0">
              {data.doi ? (
                <a
                  href={`https://doi.org/${data.doi}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-400 hover:underline"
                >
                  DOI: {data.doi}
                </a>
              ) : (
                <span>Under Peer Review</span>
              )}
            </div>
          </div>
        </>
      )}
    </article>
  );
};

export default ResearchCard;
