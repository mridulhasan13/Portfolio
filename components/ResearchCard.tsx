import React, { useState } from 'react';

export interface ResearchData {
  title: string;
  type: string;
  status: 'Started' | 'Submitted' | 'Under Review' | 'Accepted' | 'Published';
  statusLabel?: string;
  startedDate: string;
  submittedDate?: string;
  myPosition: string;
  whyItMatters: string;
  description: string;
  myContribution: {
    title: string;
    description: string;
    highlight?: string;
  }[];
  toolsUsed: string[];
  keyTakeaway: string;
  researchDetails: {
    question: string;
    approach: string;
    toolsCompared: string;
    issuesCovered: string;
    mitigationReviewed: string;
    futureOutlook: string;
  };
  skills: string[];
  doi?: string | null;
}

export const defaultResearchProject: ResearchData = {
  title: 'Social Hotspot in Textile and Apparel Supply Chain',
  type: 'Springer Book Chapter',
  status: 'Under Review',
  statusLabel: 'Currently under review',
  startedDate: 'June 2026',
  submittedDate: '2026',
  myPosition: 'Contributor (figures, tables, editing, references, formatting)',
  whyItMatters: 'Pinpoints where garment workers face the highest human risks across life-cycle stages and provides evidence-based assessment and due-diligence mechanisms.',
  description:
    'Textile and apparel supply chains span many countries, and the people in them often face unsafe conditions, low pay, long hours, and child or forced labor. This chapter reviews where these "social hotspots" arise at every stage of a garment\'s life, from raw materials to end-of-life, who is affected, how they are measured, and what can reduce them.',
  myContribution: [
    {
      title: 'Designed 9 Scientific Figures',
      highlight: '9 Figures',
      description:
        'Life-cycle supply-chain map, S-LCA workflow, stakeholder framework, drivers diagram, and strategic roadmap, converting dense research into scannable visual models.'
    },
    {
      title: 'Built 5 Comparative Synthesis Tables',
      highlight: '5 Tables',
      description:
        'Assessment tools, methodological frameworks, mitigation strategies, certification schemes, and vulnerability issues by life-cycle stage.'
    },
    {
      title: 'Comprehensive Technical Editing',
      highlight: 'Editing',
      description:
        'Edited the complete manuscript draft for narrative clarity, academic precision, and thematic consistency.'
    },
    {
      title: 'Citation Management & Verification',
      highlight: '~130 References',
      description:
        'Managed end-to-end bibliographic sources and structured the ~130-entry reference list to publisher standards.'
    }
  ],
  toolsUsed: ['Adobe Illustrator', 'Canva', 'Reference Management Software'],
  keyTakeaway:
    'Gained hands-on expertise in synthesizing complex life-cycle sustainability data into clear visual frameworks for researchers, brand auditors, and policymakers.',
  researchDetails: {
    question:
      'Where do social risks arise across the textile and apparel life cycle, and how can they be assessed and reduced?',
    approach:
      'Literature review using Social Life Cycle Assessment (S-LCA) and the UNEP/SETAC guidelines, evaluated across seven distinct life-cycle stages.',
    toolsCompared:
      'Social Hotspots Database (SHDB), PSILCA, OpenLCA, input-output modeling, and multi-criteria decision analysis methods.',
    issuesCovered:
      'Labour rights, occupational health and safety, child and forced labour, fair wages, gender equality, informal work, and climate pressures.',
    mitigationReviewed:
      'Corporate social responsibility, human rights due diligence, certification, supply-chain traceability, circular economy models, and multi-stakeholder collaboration.',
    futureOutlook:
      'AI-driven risk detection, blockchain traceability, digital product passports (DPP), dynamic S-LCA, and emerging EU corporate sustainability due-diligence regulations.'
  },
  skills: [
    'Scientific Figure Design',
    'Technical Editing',
    'Citation Management',
    'S-LCA',
    'Supply Chain Sustainability'
  ],
  doi: null // Set to string e.g. "10.1007/xxxxxx" once published
};

interface ResearchCardProps {
  data?: ResearchData;
  className?: string;
  isCompact?: boolean;
}

const timelineStages = [
  { key: 'Started', label: 'Started', date: 'Jun 2026' },
  { key: 'Submitted', label: 'Submitted', date: '2026' },
  { key: 'Under Review', label: 'Under Review', date: 'Current' },
  { key: 'Accepted', label: 'Accepted', date: 'Upcoming' },
  { key: 'Published', label: 'Published', date: 'Final' }
];

export const ResearchCard: React.FC<ResearchCardProps> = ({
  data = defaultResearchProject,
  className = '',
  isCompact = false
}) => {
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

  const currentStageIndex = timelineStages.findIndex((s) => s.key === data.status);

  return (
    <article
      aria-label={`Research Project: ${data.title}`}
      className={`group relative overflow-hidden rounded-[2rem] sm:rounded-[2.5rem] bg-gradient-to-b from-neutral-900/90 via-neutral-950/95 to-black border border-white/10 hover:border-amber-400/40 p-6 sm:p-8 md:p-12 transition-all duration-500 shadow-2xl hover:shadow-[0_0_50px_rgba(251,191,36,0.12)] ${className}`}
    >
      {/* Dynamic ambient background glow */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-amber-400/10 blur-[100px] rounded-full pointer-events-none group-hover:bg-amber-400/15 transition-all duration-700 -mr-20 -mt-20" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-500/5 blur-[100px] rounded-full pointer-events-none -ml-20 -mb-20" />

      {/* Decorative top badge line */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 mb-6 sm:mb-8 pb-5 border-b border-white/[0.08]">
        <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
          {/* Springer Book Chapter Badge (Text badge per instructions) */}
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.05] border border-white/15 text-neutral-300 text-[10px] sm:text-xs font-bold tracking-wider uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-neutral-400"></span>
            {data.type}
          </span>

          {/* Status Pill with Amber Pulse */}
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-[10px] sm:text-xs font-bold tracking-wider uppercase shadow-[0_0_12px_rgba(251,191,36,0.2)]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-400"></span>
            </span>
            {data.statusLabel || data.status}
          </span>
        </div>

        {/* Started Date */}
        <div className="flex items-center gap-1.5 text-neutral-400 font-mono text-[11px] sm:text-xs">
          <svg className="w-3.5 h-3.5 text-neutral-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span>Started {data.startedDate}</span>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 space-y-6">
        {/* Title */}
        <div>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight group-hover:text-amber-400/95 transition-colors">
            {data.title}
          </h3>

          {/* Position Banner */}
          <div className="mt-3.5 inline-flex items-center gap-2 px-3 py-1 rounded-xl bg-neutral-800/60 border border-neutral-700/60 text-neutral-300 text-xs sm:text-sm font-medium">
            <span className="text-amber-400 font-bold uppercase tracking-wider text-[10px] sm:text-xs">My Position:</span>
            <span>{data.myPosition}</span>
          </div>
        </div>

        {/* Why It Matters Callout */}
        <div className="relative pl-4 sm:pl-5 border-l-2 border-amber-400 bg-amber-400/[0.03] py-2.5 sm:py-3 pr-4 rounded-r-xl">
          <p className="text-xs sm:text-sm md:text-base text-amber-200/90 font-medium leading-relaxed">
            <strong className="text-amber-400 font-bold uppercase tracking-wider text-[11px] mr-2">Why It Matters:</strong>
            {data.whyItMatters}
          </p>
        </div>

        {/* Overview Description */}
        <p className="text-sm sm:text-base text-neutral-300 font-light leading-relaxed">
          {data.description}
        </p>

        {/* MOST PROMINENT PANEL: MY CONTRIBUTION (Admissions 10-second scan hero) */}
        <div className="mt-8 pt-6 pb-6 px-5 sm:px-7 rounded-2xl bg-gradient-to-br from-neutral-900/95 via-neutral-900/80 to-amber-950/20 border border-amber-400/25 shadow-lg">
          <div className="flex items-center justify-between mb-5 flex-wrap gap-2">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </div>
              <h4 className="text-sm sm:text-base font-extrabold uppercase tracking-wider text-white">
                My Direct Contributions
              </h4>
            </div>
            <span className="text-[10px] sm:text-xs font-mono font-semibold uppercase tracking-wider text-amber-400 bg-amber-400/10 px-2.5 py-0.5 rounded-full border border-amber-400/20">
              Core Scope
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {data.myContribution.map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-black/40 border border-white/5 hover:border-amber-400/30 transition-all"
              >
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <span className="text-xs sm:text-sm font-bold text-white leading-snug">
                    {item.title}
                  </span>
                  {item.highlight && (
                    <span className="shrink-0 text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-amber-400/15 text-amber-300 border border-amber-400/30">
                      {item.highlight}
                    </span>
                  )}
                </div>
                <p className="text-[11px] sm:text-xs text-neutral-400 leading-relaxed font-light">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Tools & Key Takeaway Footer inside contribution */}
          <div className="mt-5 pt-4 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-neutral-500 font-bold uppercase tracking-wider text-[10px]">Tools Used:</span>
              {data.toolsUsed.map((tool, tIdx) => (
                <span
                  key={tIdx}
                  className="px-2.5 py-0.5 rounded-md bg-white/5 border border-white/10 text-neutral-300 text-[11px] font-medium"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {data.keyTakeaway && (
            <div className="mt-3 pt-3 border-t border-white/5 flex items-start gap-2 text-neutral-400 text-[11px] sm:text-xs font-light italic">
              <svg className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{data.keyTakeaway}</span>
            </div>
          )}
        </div>

        {/* EXPANDABLE PANEL: RESEARCH DETAILS (Scope Only, Collapsed by default for 10-sec scan) */}
        <div className="rounded-2xl border border-white/10 bg-neutral-950/60 overflow-hidden transition-all duration-300">
          <button
            onClick={() => setIsDetailsOpen(!isDetailsOpen)}
            aria-expanded={isDetailsOpen}
            className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-white/[0.02] transition-colors cursor-pointer group/btn"
          >
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-md bg-white/5 border border-white/10 flex items-center justify-center text-neutral-400 group-hover/btn:text-amber-400 transition-colors">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <span className="text-xs sm:text-sm font-bold text-neutral-200 group-hover/btn:text-white transition-colors">
                Research Scope & Methodology Details
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] uppercase font-bold tracking-wider text-neutral-500">
                {isDetailsOpen ? 'Collapse' : 'Expand Scope'}
              </span>
              <svg
                className={`w-4 h-4 text-neutral-400 transition-transform duration-300 ${isDetailsOpen ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </button>

          {isDetailsOpen && (
            <div className="px-5 pb-6 pt-2 border-t border-white/5 space-y-3.5 text-xs sm:text-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 pt-2">
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                  <h5 className="text-[11px] font-bold uppercase tracking-wider text-amber-400 mb-1">
                    Central Research Question
                  </h5>
                  <p className="text-neutral-300 font-light leading-relaxed">
                    {data.researchDetails.question}
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                  <h5 className="text-[11px] font-bold uppercase tracking-wider text-amber-400 mb-1">
                    Methodological Approach
                  </h5>
                  <p className="text-neutral-300 font-light leading-relaxed">
                    {data.researchDetails.approach}
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                  <h5 className="text-[11px] font-bold uppercase tracking-wider text-amber-400 mb-1">
                    Assessment Tools Compared
                  </h5>
                  <p className="text-neutral-300 font-light leading-relaxed">
                    {data.researchDetails.toolsCompared}
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                  <h5 className="text-[11px] font-bold uppercase tracking-wider text-amber-400 mb-1">
                    Social Issues Covered
                  </h5>
                  <p className="text-neutral-300 font-light leading-relaxed">
                    {data.researchDetails.issuesCovered}
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                  <h5 className="text-[11px] font-bold uppercase tracking-wider text-amber-400 mb-1">
                    Mitigation Mechanisms Reviewed
                  </h5>
                  <p className="text-neutral-300 font-light leading-relaxed">
                    {data.researchDetails.mitigationReviewed}
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                  <h5 className="text-[11px] font-bold uppercase tracking-wider text-amber-400 mb-1">
                    Forward-Looking Horizons
                  </h5>
                  <p className="text-neutral-300 font-light leading-relaxed">
                    {data.researchDetails.futureOutlook}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* STATUS TRACKER: Milestone Timeline */}
        <div className="pt-4 pb-2">
          <div className="flex items-center justify-between mb-3">
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-neutral-400">
              Publication Progress Tracker
            </span>
            <span className="text-[10px] font-mono font-semibold text-amber-400">
              Stage {currentStageIndex + 1} of {timelineStages.length}
            </span>
          </div>

          <div className="grid grid-cols-5 gap-1.5 sm:gap-2">
            {timelineStages.map((stage, sIdx) => {
              const isPast = sIdx < currentStageIndex;
              const isCurrent = sIdx === currentStageIndex;
              const isFuture = sIdx > currentStageIndex;

              return (
                <div key={stage.key} className="flex flex-col items-center text-center">
                  {/* Progress Line & Indicator */}
                  <div className="w-full relative flex items-center justify-center mb-2">
                    <div
                      className={`h-1 w-full rounded-full transition-all duration-500 ${
                        isPast
                          ? 'bg-amber-400'
                          : isCurrent
                          ? 'bg-gradient-to-r from-amber-400 via-amber-400 to-neutral-700'
                          : 'bg-neutral-800'
                      }`}
                    />
                    <div
                      className={`absolute w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full border-2 flex items-center justify-center transition-all ${
                        isPast
                          ? 'bg-amber-400 border-amber-400 text-black'
                          : isCurrent
                          ? 'bg-black border-amber-400 ring-2 ring-amber-400/40'
                          : 'bg-neutral-900 border-neutral-700'
                      }`}
                    >
                      {isPast ? (
                        <svg className="w-2 h-2 text-black" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      ) : isCurrent ? (
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                      ) : null}
                    </div>
                  </div>

                  {/* Stage Label */}
                  <span
                    className={`text-[9px] sm:text-[11px] font-bold uppercase tracking-wider leading-tight ${
                      isCurrent
                        ? 'text-amber-400 font-extrabold'
                        : isPast
                        ? 'text-neutral-300'
                        : 'text-neutral-600'
                    }`}
                  >
                    {stage.label}
                  </span>
                  <span
                    className={`text-[8px] sm:text-[9px] font-mono mt-0.5 ${
                      isCurrent ? 'text-amber-300/80 font-bold' : 'text-neutral-600'
                    }`}
                  >
                    {stage.date}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* SKILLS CHIPS & CONFIDENTIALITY BADGE */}
        <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
            <span className="text-[10px] uppercase font-bold text-neutral-500 mr-1">Skills:</span>
            {data.skills.map((skill, skIdx) => (
              <span
                key={skIdx}
                className="px-2.5 py-1 rounded-lg text-[10px] sm:text-[11px] font-medium bg-white/[0.04] border border-white/10 text-neutral-300 hover:border-amber-400/40 hover:text-amber-300 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-2">
            {data.doi ? (
              <a
                href={`https://doi.org/${data.doi}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[11px] font-mono font-bold text-amber-400 hover:underline"
              >
                <span>DOI: {data.doi}</span>
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            ) : (
              <span className="inline-flex items-center gap-1.5 text-[10px] font-mono text-neutral-500 bg-neutral-900 px-2.5 py-1 rounded-md border border-neutral-800">
                <svg className="w-3 h-3 text-neutral-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                Under Review · Confidential
              </span>
            )}
          </div>
        </div>
      </div>
    </article>
  );
};

export default ResearchCard;
