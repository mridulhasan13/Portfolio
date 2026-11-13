import React, { useState } from 'react';

export interface ResearchProjectConfig {
  title: string;
  type: string;
  status: 'Started' | 'Submitted' | 'Under Review' | 'Accepted' | 'Published';
  statusText?: string;
  started: string;
  role: string;
  significance: string;
  synopsis: string;
  contributions: {
    stat: string;
    label: string;
    details: string;
  }[];
  tools: string[];
  scope: {
    question: string;
    methodology: string;
    comparisons: string;
    topics: string;
    mitigation: string;
    horizons: string;
  };
  skills: string[];
  doi?: string | null;
}

export const researchProjectData: ResearchProjectConfig = {
  title: 'Social Hotspot in Textile and Apparel Supply Chain',
  type: 'Springer Book Chapter',
  status: 'Under Review',
  statusText: 'Currently under review',
  started: 'June 2026',
  role: 'Contributor (Figures, Tables, Editing, References, Formatting)',
  significance:
    'Pinpoints where garment workers face the highest human risks across life-cycle stages and provides evidence-based assessment and due-diligence mechanisms.',
  synopsis:
    'Textile and apparel supply chains span many countries, and the people in them often face unsafe conditions, low pay, long hours, and child or forced labor. This chapter reviews where these "social hotspots" arise at every stage of a garment\'s life, from raw materials to end-of-life, who is affected, how they are measured, and what can reduce them.',
  contributions: [
    {
      stat: '09',
      label: 'Scientific Figures',
      details:
        'Designed life-cycle supply-chain map, S-LCA workflow, stakeholder framework, drivers diagram, and strategic roadmap, converting dense research into scannable visual models.'
    },
    {
      stat: '05',
      label: 'Comparative Tables',
      details:
        'Built comprehensive comparison tables covering assessment tools, methodological frameworks, mitigation strategies, certification schemes, and vulnerability hotspots by stage.'
    },
    {
      stat: 'Draft',
      label: 'Manuscript Editing',
      details:
        'Edited the full manuscript draft for clarity, academic structure, consistency, and narrative flow across all chapter sections.'
    },
    {
      stat: '~130',
      label: 'Citations Managed',
      details:
        'Structured and formatted the extensive ~130-entry bibliographic reference list to exact publisher guidelines and citation standards.'
    }
  ],
  tools: ['Adobe Illustrator', 'Canva', 'Reference Manager'],
  scope: {
    question:
      'Where do social risks arise across the textile and apparel life cycle, and how can they be assessed and reduced?',
    methodology:
      'Literature review applying Social Life Cycle Assessment (S-LCA) and the UNEP/SETAC guidelines across seven distinct life-cycle stages.',
    comparisons:
      'Social Hotspots Database (SHDB), PSILCA, OpenLCA, input-output modeling, and multi-criteria methods.',
    topics:
      'Labour rights, occupational health and safety, child and forced labour, wages, gender equality, informal work, and climate pressures.',
    mitigation:
      'Corporate social responsibility, human rights due diligence, certification, supply-chain traceability, circular economy, and multi-stakeholder collaboration.',
    horizons:
      'AI risk detection, blockchain traceability, digital product passports (DPP), dynamic S-LCA, and emerging EU due-diligence regulations.'
  },
  skills: [
    'Scientific Figure Design',
    'Technical Editing',
    'Citation Management',
    'S-LCA',
    'Supply Chain Sustainability'
  ],
  doi: null
};

const stages = [
  { id: 'Started', label: 'Started', time: 'Jun 2026' },
  { id: 'Submitted', label: 'Submitted', time: '2026' },
  { id: 'Under Review', label: 'Under Review', time: 'Active' },
  { id: 'Accepted', label: 'Accepted', time: 'Upcoming' },
  { id: 'Published', label: 'Published', time: 'Final' }
];

export const ResearchCard: React.FC<{ data?: ResearchProjectConfig; className?: string }> = ({
  data = researchProjectData,
  className = ''
}) => {
  const [showScope, setShowScope] = useState(false);

  const activeStageIdx = stages.findIndex((s) => s.id === data.status);

  return (
    <div
      className={`relative rounded-3xl bg-neutral-950/80 border border-neutral-800 hover:border-neutral-700 transition-all duration-500 overflow-hidden shadow-2xl backdrop-blur-xl ${className}`}
    >
      {/* Subtle architectural gradient overlay */}
      <div className="absolute top-0 right-0 w-[500px] h-[300px] bg-gradient-to-bl from-amber-500/[0.04] via-transparent to-transparent pointer-events-none" />

      <div className="p-6 sm:p-10 lg:p-12 space-y-8 sm:space-y-10">
        {/* Top Meta Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-neutral-800/80">
          <div className="flex flex-wrap items-center gap-3">
            <span className="font-mono text-[11px] font-semibold uppercase tracking-widest text-neutral-400">
              {data.type}
            </span>
            <span className="w-1 h-1 rounded-full bg-neutral-700" />
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/25">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
              <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-amber-300">
                {data.statusText || data.status}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 text-neutral-500 font-mono text-[11px]">
            <span>Started</span>
            <span className="text-neutral-400">{data.started}</span>
          </div>
        </div>

        {/* Title & Role */}
        <div className="space-y-3">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-tight">
            {data.title}
          </h3>
          <p className="font-mono text-xs sm:text-sm text-neutral-400 flex items-center gap-2">
            <span className="text-amber-400/90 font-semibold uppercase tracking-wider text-[11px]">Role:</span>
            <span>{data.role}</span>
          </p>
        </div>

        {/* Significance & Description */}
        <div className="space-y-4">
          <div className="p-4 sm:p-5 rounded-2xl bg-neutral-900/60 border border-neutral-800/80">
            <p className="text-xs sm:text-sm text-neutral-200 leading-relaxed font-normal">
              <span className="font-semibold text-amber-400/90 uppercase tracking-wider text-[10px] sm:text-[11px] block sm:inline sm:mr-2">
                Why It Matters —
              </span>
              {data.significance}
            </p>
          </div>

          <p className="text-sm sm:text-base text-neutral-400 leading-relaxed font-light">
            {data.synopsis}
          </p>
        </div>

        {/* Primary Impact: Contributions Grid (Clean executive metrics) */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="font-mono text-xs uppercase tracking-widest text-neutral-400 font-semibold">
              Key Contributions & Deliverables
            </h4>
            <div className="flex items-center gap-1.5 text-[11px] text-neutral-500 font-mono">
              <span>Tools:</span>
              <span className="text-neutral-400">{data.tools.join(' · ')}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {data.contributions.map((item, idx) => (
              <div
                key={idx}
                className="group/card p-4 sm:p-5 rounded-2xl bg-neutral-900/40 border border-neutral-800/80 hover:border-amber-400/30 hover:bg-neutral-900/70 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-baseline justify-between mb-2">
                    <span className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight group-hover/card:text-amber-400 transition-colors">
                      {item.stat}
                    </span>
                    <span className="font-mono text-[9px] uppercase tracking-wider text-neutral-500">
                      Deliverable
                    </span>
                  </div>
                  <h5 className="text-xs sm:text-sm font-semibold text-neutral-200 mb-2 leading-snug">
                    {item.label}
                  </h5>
                  <p className="text-[11px] sm:text-xs text-neutral-400 font-light leading-relaxed">
                    {item.details}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Collapsible Research Scope Panel */}
        <div className="border border-neutral-800/80 rounded-2xl overflow-hidden bg-neutral-900/20">
          <button
            onClick={() => setShowScope(!showScope)}
            className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-neutral-900/40 transition-colors"
            aria-expanded={showScope}
          >
            <div className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-neutral-600" />
              <span className="font-mono text-xs uppercase tracking-wider text-neutral-300 font-semibold">
                Chapter Scope & Analytical Framework
              </span>
            </div>
            <span className="font-mono text-[11px] text-neutral-500 flex items-center gap-1.5">
              <span>{showScope ? 'Hide details' : 'View scope'}</span>
              <svg
                className={`w-3.5 h-3.5 transition-transform duration-300 ${showScope ? 'rotate-180' : ''}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </span>
          </button>

          {showScope && (
            <div className="px-5 pb-6 pt-3 border-t border-neutral-800/80 grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="space-y-1">
                <span className="font-mono text-[10px] uppercase tracking-wider text-neutral-500 font-semibold">
                  Core Question
                </span>
                <p className="text-neutral-300 leading-relaxed font-light">{data.scope.question}</p>
              </div>

              <div className="space-y-1">
                <span className="font-mono text-[10px] uppercase tracking-wider text-neutral-500 font-semibold">
                  Methodology & Framework
                </span>
                <p className="text-neutral-300 leading-relaxed font-light">{data.scope.methodology}</p>
              </div>

              <div className="space-y-1">
                <span className="font-mono text-[10px] uppercase tracking-wider text-neutral-500 font-semibold">
                  Assessment Tools Evaluated
                </span>
                <p className="text-neutral-300 leading-relaxed font-light">{data.scope.comparisons}</p>
              </div>

              <div className="space-y-1">
                <span className="font-mono text-[10px] uppercase tracking-wider text-neutral-500 font-semibold">
                  Social Issues Addressed
                </span>
                <p className="text-neutral-300 leading-relaxed font-light">{data.scope.topics}</p>
              </div>

              <div className="space-y-1">
                <span className="font-mono text-[10px] uppercase tracking-wider text-neutral-500 font-semibold">
                  Mitigation & Governance
                </span>
                <p className="text-neutral-300 leading-relaxed font-light">{data.scope.mitigation}</p>
              </div>

              <div className="space-y-1">
                <span className="font-mono text-[10px] uppercase tracking-wider text-neutral-500 font-semibold">
                  Future Horizons
                </span>
                <p className="text-neutral-300 leading-relaxed font-light">{data.scope.horizons}</p>
              </div>
            </div>
          )}
        </div>

        {/* Minimal Progress Timeline */}
        <div className="space-y-3 pt-2">
          <div className="flex items-center justify-between text-neutral-500 font-mono text-[10px] uppercase tracking-wider">
            <span>Publication Progress</span>
            <span className="text-neutral-400">{stages[activeStageIdx]?.label}</span>
          </div>

          <div className="grid grid-cols-5 gap-2">
            {stages.map((st, i) => {
              const isDone = i < activeStageIdx;
              const isCurrent = i === activeStageIdx;

              return (
                <div key={st.id} className="space-y-1.5">
                  <div
                    className={`h-1 rounded-full transition-all duration-300 ${
                      isDone
                        ? 'bg-amber-400'
                        : isCurrent
                        ? 'bg-amber-400/80 shadow-[0_0_8px_rgba(251,191,36,0.4)]'
                        : 'bg-neutral-800'
                    }`}
                  />
                  <div className="flex items-center justify-between font-mono text-[9px] sm:text-[10px]">
                    <span
                      className={`${
                        isCurrent
                          ? 'text-amber-300 font-bold'
                          : isDone
                          ? 'text-neutral-300'
                          : 'text-neutral-600'
                      }`}
                    >
                      {st.label}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Footer: Skills Chips & Confidentiality Status */}
        <div className="pt-6 border-t border-neutral-800/80 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
            {data.skills.map((skill, sIdx) => (
              <span
                key={sIdx}
                className="font-mono text-[10px] sm:text-[11px] px-2.5 py-1 rounded-md bg-neutral-900 border border-neutral-800 text-neutral-300"
              >
                {skill}
              </span>
            ))}
          </div>

          <div className="font-mono text-[10px] text-neutral-500 flex items-center gap-1.5">
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
              <span>Confidential manuscript · In peer review</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResearchCard;
