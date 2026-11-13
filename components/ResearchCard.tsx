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
    'Textile and apparel supply chains span many countries, where workers frequently face unsafe conditions, low pay, long hours, and labor violations. This chapter provides a comprehensive review of where social hotspots arise across every stage of a garment\'s life cycle—from raw materials to end-of-life—evaluating assessment methodologies (S-LCA, SHDB, PSILCA, OpenLCA) and multi-stakeholder due-diligence frameworks that can mitigate these systemic risks.',
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
      className={`relative rounded-2xl sm:rounded-3xl bg-neutral-950/70 border border-neutral-800/80 p-6 sm:p-10 transition-all duration-300 hover:border-neutral-700 shadow-xl ${className}`}
    >
      {/* Top Meta Line: Venue on left, Status on right */}
      <div className="flex items-center justify-between gap-3 pb-5 border-b border-neutral-800/80 text-xs font-mono">
        <span className="font-semibold text-neutral-300 uppercase tracking-wider text-[11px]">
          {data.type}
        </span>
        <span className="text-amber-400 font-mono text-xs tracking-wider">
          {data.status}
        </span>
      </div>

      {/* Title & Contributor Role */}
      <div className="mt-6 mb-5">
        <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white tracking-tight leading-snug">
          {data.title}
        </h3>
        <p className="mt-2.5 text-xs sm:text-sm text-neutral-400 font-mono">
          <span className="text-amber-400 font-semibold">{data.role}</span>
        </p>
      </div>

      {/* Abstract */}
      <div className="mb-8">
        <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-light">
          {data.abstract}
        </p>
      </div>

      {/* Key Contributions: Clean 2-Column Academic Grid */}
      <div className="pt-6 border-t border-neutral-800/80">
        <h4 className="font-mono text-[11px] font-bold uppercase tracking-wider text-neutral-400 mb-4">
          Direct Contributions
        </h4>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {data.contributions.map((c, i) => (
            <div
              key={i}
              className="p-4 rounded-xl bg-neutral-900/40 border border-neutral-800/60"
            >
              <h5 className="text-sm font-semibold text-white mb-1.5 flex items-center gap-2">
                <span className="w-1 h-3 rounded-full bg-amber-400" />
                {c.title}
              </h5>
              <p className="text-xs text-neutral-400 leading-relaxed font-light">
                {c.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Expandable Methodology / Scope Note */}
      <div className="mt-6 pt-4 border-t border-neutral-800/60">
        <button
          onClick={() => setShowDetails(!showDetails)}
          className="text-xs font-mono text-neutral-400 hover:text-white flex items-center gap-1.5 transition-colors"
        >
          <span>{showDetails ? '− Hide methodology scope' : '+ View methodology & scope'}</span>
        </button>

        {showDetails && (
          <div className="mt-3 p-4 rounded-xl bg-neutral-900/30 border border-neutral-800/60 text-xs text-neutral-300 leading-relaxed font-light space-y-2">
            <p>
              <strong className="text-neutral-200 font-semibold font-mono text-[11px]">Assessment Framework:</strong>{' '}
              Literature review using Social Life Cycle Assessment (S-LCA) and the UNEP/SETAC guidelines across seven garment life-cycle stages.
            </p>
            <p>
              <strong className="text-neutral-200 font-semibold font-mono text-[11px]">Tools & Governance:</strong>{' '}
              Evaluated SHDB, PSILCA, OpenLCA, corporate due-diligence schemes, digital product passports (DPP), and circular economy mitigation models.
            </p>
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
