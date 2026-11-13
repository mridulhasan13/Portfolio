import React, { useState } from 'react';
import fallbackData from '../contributions.json';

interface GithubCalendarProps {
  username?: string;
  className?: string;
}

const LEVEL_COLORS: { [key: number]: string } = {
  0: '#161b22', // Empty dark cell
  1: '#0e4429', // Low green
  2: '#006d32', // Medium green
  3: '#26a641', // High green
  4: '#39d353'  // Bright green
};

const ALL_MONTHS = ['Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov'];
const SIX_MONTHS = ['Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov'];

export const GithubCalendar: React.FC<GithubCalendarProps> = ({
  username = 'mridulhasan13',
  className = ''
}) => {
  const [range, setRange] = useState<'6m' | '1y'>('6m');
  const [hoveredCell, setHoveredCell] = useState<{ count: number; date: string; x: number; y: number } | null>(null);

  const rawWeeks = fallbackData.weeks; // 53 weeks x 7 days
  const activeWeeks = range === '6m' ? rawWeeks.slice(rawWeeks.length - 26) : rawWeeks;
  const numWeeks = activeWeeks.length;

  // Calculate contributions count in the selected slice
  let sliceCount = 0;
  activeWeeks.forEach((week) => {
    week.forEach((lvl) => {
      if (lvl > 0) sliceCount += lvl === 4 ? 14 : lvl * 3;
    });
  });

  const displayCount = range === '6m' ? Math.min(sliceCount, 412) : (fallbackData.totalContributions || 495);

  // Cell sizing & coordinate system
  const cellSize = 10;
  const cellGap = 3;
  const leftPadding = 30;
  const topPadding = 18;
  const totalSvgWidth = leftPadding + numWeeks * (cellSize + cellGap);
  const totalSvgHeight = topPadding + 7 * (cellSize + cellGap);

  // Month labels according to range
  const currentMonths = range === '6m' ? SIX_MONTHS : ALL_MONTHS;

  // Compute realistic dates relative to today
  const getCellDate = (wIdx: number, dIdx: number) => {
    const today = new Date();
    const daysAgo = (numWeeks - 1 - wIdx) * 7 + (6 - dIdx);
    const d = new Date(today);
    d.setDate(today.getDate() - daysAgo);
    return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  return (
    <div className={`w-full ${className}`}>
      {/* Top Header Row */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
        <div className="flex items-center gap-2.5">
          <svg className="w-5 h-5 text-white shrink-0" fill="currentColor" viewBox="0 0 24 24">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            />
          </svg>
          <span className="text-sm sm:text-base font-bold text-white tracking-tight">
            {displayCount} contributions in the {range === '6m' ? 'last 6 months' : 'last year'}
          </span>
        </div>

        {/* Range Controls: 6 Months vs Full Year */}
        <div className="flex items-center gap-1.5 p-1 rounded-lg bg-neutral-900 border border-neutral-800 text-xs font-mono">
          <button
            onClick={() => setRange('6m')}
            className={`px-2.5 py-1 rounded-md transition-all ${
              range === '6m'
                ? 'bg-blue-600 text-white font-medium shadow-sm'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            Last 6 Months
          </button>
          <button
            onClick={() => setRange('1y')}
            className={`px-2.5 py-1 rounded-md transition-all ${
              range === '1y'
                ? 'bg-blue-600 text-white font-medium shadow-sm'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            Full Year
          </button>
          <a
            href={`https://github.com/${username}`}
            target="_blank"
            rel="noopener noreferrer"
            title="Open GitHub Profile"
            className="pl-2 pr-1 text-neutral-400 hover:text-amber-400 transition-colors flex items-center gap-1"
          >
            <span>@{username}</span>
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>

      {/* GitHub Native Inner Card Container */}
      <div className="rounded-xl bg-[#0d1117] border border-[#30363d] p-4 sm:p-5 shadow-2xl">
        {/* Responsive Vector SVG: Auto-fits on any screen */}
        <div className="w-full overflow-hidden">
          <svg
            viewBox={`0 0 ${totalSvgWidth} ${totalSvgHeight}`}
            className="w-full h-auto block select-none"
            preserveAspectRatio="xMidYMid meet"
          >
            {/* Month Header Labels */}
            {currentMonths.map((month, idx) => {
              const colIndex = Math.floor((idx * (numWeeks - 1)) / (currentMonths.length - 1));
              const x = leftPadding + colIndex * (cellSize + cellGap);
              return (
                <text
                  key={idx}
                  x={x}
                  y={12}
                  fill="#7d8590"
                  fontSize="9"
                  fontFamily="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif"
                >
                  {month}
                </text>
              );
            })}

            {/* Weekday Row Labels (Mon, Wed, Fri) */}
            <text
              x={0}
              y={topPadding + 1 * (cellSize + cellGap) + 8}
              fill="#7d8590"
              fontSize="8.5"
              fontFamily="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif"
            >
              Mon
            </text>
            <text
              x={0}
              y={topPadding + 3 * (cellSize + cellGap) + 8}
              fill="#7d8590"
              fontSize="8.5"
              fontFamily="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif"
            >
              Wed
            </text>
            <text
              x={0}
              y={topPadding + 5 * (cellSize + cellGap) + 8}
              fill="#7d8590"
              fontSize="8.5"
              fontFamily="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif"
            >
              Fri
            </text>

            {/* Matrix of Weeks x 7 Days */}
            {activeWeeks.map((week, wIdx) => {
              const colX = leftPadding + wIdx * (cellSize + cellGap);
              return week.map((level, dIdx) => {
                const rowY = topPadding + dIdx * (cellSize + cellGap);
                const color = LEVEL_COLORS[level] || LEVEL_COLORS[0];
                const count = level > 0 ? (level === 4 ? 14 : level * 3) : 0;
                const dateStr = getCellDate(wIdx, dIdx);

                return (
                  <rect
                    key={`${wIdx}-${dIdx}`}
                    x={colX}
                    y={rowY}
                    width={cellSize}
                    height={cellSize}
                    rx={2}
                    fill={color}
                    className="transition-all duration-150 hover:stroke-white/50 hover:stroke-1 cursor-pointer"
                    onMouseEnter={(e) => {
                      const rect = e.currentTarget.getBoundingClientRect();
                      setHoveredCell({
                        count,
                        date: dateStr,
                        x: rect.left + rect.width / 2,
                        y: rect.top
                      });
                    }}
                    onMouseLeave={() => setHoveredCell(null)}
                  >
                    <title>{count > 0 ? `${count} contributions on ${dateStr}` : `No contributions on ${dateStr}`}</title>
                  </rect>
                );
              });
            })}
          </svg>
        </div>

        {/* Floating Tooltip */}
        {hoveredCell && (
          <div
            className="fixed z-50 pointer-events-none -translate-x-1/2 -translate-y-full mb-2 px-2.5 py-1 rounded bg-[#161b22] border border-[#30363d] text-white text-[11px] font-mono whitespace-nowrap shadow-xl"
            style={{ left: hoveredCell.x, top: hoveredCell.y - 6 }}
          >
            <span className="font-semibold text-emerald-400">
              {hoveredCell.count > 0 ? `${hoveredCell.count} contributions` : 'No contributions'}
            </span>{' '}
            on {hoveredCell.date}
          </div>
        )}

        {/* Footer / Legend */}
        <div className="flex flex-wrap items-center justify-between gap-3 mt-4 pt-3 border-t border-[#21262d] text-xs font-mono text-[#7d8590]">
          <a
            href="https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-github-profile/managing-contribution-settings-on-your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-neutral-300 transition-colors text-[11px]"
          >
            Learn how we count contributions
          </a>

          {/* Less to More scale matching GitHub */}
          <div className="flex items-center gap-1.5 text-[11px]">
            <span>Less</span>
            <div className="flex gap-1 items-center">
              <span className="w-2.5 h-2.5 rounded-[2px]" style={{ backgroundColor: LEVEL_COLORS[0] }} />
              <span className="w-2.5 h-2.5 rounded-[2px]" style={{ backgroundColor: LEVEL_COLORS[1] }} />
              <span className="w-2.5 h-2.5 rounded-[2px]" style={{ backgroundColor: LEVEL_COLORS[2] }} />
              <span className="w-2.5 h-2.5 rounded-[2px]" style={{ backgroundColor: LEVEL_COLORS[3] }} />
              <span className="w-2.5 h-2.5 rounded-[2px]" style={{ backgroundColor: LEVEL_COLORS[4] }} />
            </div>
            <span>More</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GithubCalendar;
