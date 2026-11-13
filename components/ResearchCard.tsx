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
        'Designed 9 publication figures (life-cycle supply map, S-LCA workflows, stakeholder frameworks, roadmap) and built 5 comparative tables evaluating assessment tools, mitigation strategies, and certification standards.'
    },
    {
      title: 'Manuscript Editing & Citation Indexing',
      description:
        'Conducted complete technical and structural manuscript editing for academic consistency and managed the ~130-entry reference list formatted to publisher specification.'
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

export const ResearchCard: React.FC<{ data?: ResearchData; className?: string }> = ({
  data = researchProjectData,
  className = ''
}) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <article
      className={`relative rounded-2xl sm:rounded-3xl bg-neutral-950/70 border border-neutral-800/80 p-5 sm:p-8 transition-all duration-300 hover:border-neutral-700 shadow-xl ${className}`}
    >
      {/* Top Meta Line: Venue on left, Status on right */}
      <div className="flex items-center justify-between gap-3 pb-4 border-b border-neutral-800/80 text-xs font-mono">
        <span className="font-semibold text-neutral-300 uppercase tracking-wider text-[11px]">
          {data.type}
        </span>
        <span className="text-amber-400 font-mono text-xs tracking-wider">
          {data.status}
        </span>
      </div>

      {/* Title & Contributor Role */}
      <div className="mt-4 mb-3.5">
        <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white tracking-tight leading-snug">
          {data.title}
        </h3>
        <p className="mt-1.5 text-xs sm:text-sm text-neutral-300 font-normal">
          {data.role}
        </p>
      </div>

      {/* Abstract */}
      <div className="mb-5 sm:mb-6">
        <p className="text-xs sm:text-sm md:text-base text-neutral-400 leading-relaxed font-light">
          {data.abstract}
        </p>
      </div>

      {/* Key Contributions: Elevated 2-Column Academic Grid */}
      <div className="pt-6 border-t border-neutral-800/80">
        <div className="flex items-center justify-between mb-4">
          <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-neutral-400">
            Direct Contributions
          </span>
          <span className="font-mono text-[10px] text-neutral-500 uppercase tracking-widest">
            Core Scope
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Contribution 1: Figures & Tables */}
          <div className="group relative p-5 rounded-2xl bg-neutral-900/30 border border-neutral-800/80 hover:border-amber-400/30 hover:bg-neutral-900/50 transition-all duration-300">
            <div className="flex items-center gap-3 mb-3.5">
              <div className="w-8 h-8 rounded-lg bg-neutral-800/60 border border-neutral-700/60 flex items-center justify-center text-amber-400 group-hover:scale-105 transition-transform">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                </svg>
              </div>
              <div>
                <h5 className="text-sm font-bold text-white tracking-tight group-hover:text-amber-400 transition-colors">
                  Visual Synthesis & Data Architecture
                </h5>
                <p className="text-[11px] font-mono text-neutral-500">
                  9 Scientific Figures · 5 Comparative Tables
                </p>
              </div>
            </div>

            <p className="text-xs text-neutral-400 leading-relaxed font-light mb-3">
              Turned dense life-cycle research into publication-ready visual models and structured analytical frameworks.
            </p>

            <div className="space-y-1.5 text-[11px] text-neutral-300 font-light border-t border-neutral-800/60 pt-3">
              <div className="flex items-start gap-2">
                <span className="text-amber-400 text-xs leading-none mt-0.5">•</span>
                <span>
                  <strong className="text-white font-medium">9 Figures:</strong> Life-cycle supply chain map, S-LCA workflow, stakeholder framework, drivers diagram, and strategic roadmap.
                </span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-amber-400 text-xs leading-none mt-0.5">•</span>
                <span>
                  <strong className="text-white font-medium">5 Tables:</strong> Assessment tools, methodologies, mitigation strategies, certification schemes, and stage-by-stage risks.
                </span>
              </div>
            </div>
          </div>

          {/* Contribution 2: Manuscript & Citations */}
          <div className="group relative p-5 rounded-2xl bg-neutral-900/30 border border-neutral-800/80 hover:border-amber-400/30 hover:bg-neutral-900/50 transition-all duration-300">
            <div className="flex items-center gap-3 mb-3.5">
              <div className="w-8 h-8 rounded-lg bg-neutral-800/60 border border-neutral-700/60 flex items-center justify-center text-amber-400 group-hover:scale-105 transition-transform">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div>
                <h5 className="text-sm font-bold text-white tracking-tight group-hover:text-amber-400 transition-colors">
                  Manuscript Editing & Citation Indexing
                </h5>
                <p className="text-[11px] font-mono text-neutral-500">
                  Full Manuscript · 130+ Citations Indexed
                </p>
              </div>
            </div>

            <p className="text-xs text-neutral-400 leading-relaxed font-light mb-3">
              Conducted comprehensive technical review for academic rigor, structural clarity, and consistency.
            </p>

            <div className="space-y-1.5 text-[11px] text-neutral-300 font-light border-t border-neutral-800/60 pt-3">
              <div className="flex items-start gap-2">
                <span className="text-amber-400 text-xs leading-none mt-0.5">•</span>
                <span>
                  <strong className="text-white font-medium">Technical Editing:</strong> Refined prose, terminology, and logical narrative for academic publication standards.
                </span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-amber-400 text-xs leading-none mt-0.5">•</span>
                <span>
                  <strong className="text-white font-medium">130+ References:</strong> Cross-verified citations and formatted reference entries to strict publisher guidelines.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Expandable Methodology / Scope Note */}
      <div className="mt-6 pt-4 border-t border-neutral-800/60">
        <button
          onClick={() => setShowDetails(!showDetails)}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-neutral-900/60 border border-neutral-800 hover:border-neutral-700 text-xs font-mono text-neutral-400 hover:text-white transition-all group"
        >
          <span>{showDetails ? 'Hide methodology & scope' : 'View methodology & scope'}</span>
          <svg
            className={`w-3.5 h-3.5 text-neutral-500 group-hover:text-amber-400 transition-transform duration-200 ${showDetails ? 'rotate-180' : ''}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {showDetails && (
          <div className="mt-3.5 grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="p-4 rounded-xl bg-neutral-900/40 border border-neutral-800/80">
              <span className="font-mono text-[10px] uppercase font-bold text-amber-400 tracking-wider block mb-1.5">
                Assessment Framework
              </span>
              <p className="text-xs text-neutral-300 font-light leading-relaxed">
                Literature review using Social Life Cycle Assessment (S-LCA) and the UNEP/SETAC guidelines evaluated across seven garment life-cycle stages.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-neutral-900/40 border border-neutral-800/80">
              <span className="font-mono text-[10px] uppercase font-bold text-amber-400 tracking-wider block mb-1.5">
                Tools & Governance Scope
              </span>
              <p className="text-xs text-neutral-300 font-light leading-relaxed">
                Evaluated SHDB, PSILCA, OpenLCA, corporate due-diligence frameworks, digital product passports (DPP), and circular economy mitigation models.
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Keywords & Confidentiality Footer */}
      <div className="mt-6 pt-5 border-t border-neutral-800/80 flex flex-wrap items-center justify-between gap-3 text-xs">
        <div className="flex flex-wrap items-center gap-1.5">
          {data.keywords.map((kw, idx) => (
            <span
              key={idx}
              className="px-2.5 py-0.5 rounded-md bg-neutral-900 border border-neutral-800 text-neutral-400 font-mono text-[10px]"
            >
              {kw}
            </span>
          ))}
        </div>

        <div className="font-mono text-[11px] text-neutral-500">
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
            <span>Confidential · Under Peer Review</span>
          )}
        </div>
      </div>
    </article>
  );
};

export default ResearchCard;
