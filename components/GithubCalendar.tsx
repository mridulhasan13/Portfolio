import React, { useState } from 'react';
import fallbackData from '../contributions.json';

interface GithubCalendarProps {
  username?: string;
  className?: string;
}

const LEVEL_COLORS: { [key: number]: string } = {
  0: '#161b22', // Empty
  1: '#0e4429', // Low
  2: '#006d32', // Medium
  3: '#26a641', // High
  4: '#39d353'  // Max
};

const ALL_MONTHS = [
  { name: 'Nov', col: 0 },
  { name: 'Dec', col: 4 },
  { name: 'Jan', col: 9 },
  { name: 'Feb', col: 13 },
  { name: 'Mar', col: 17 },
  { name: 'Apr', col: 22 },
  { name: 'May', col: 26 },
  { name: 'Jun', col: 30 },
  { name: 'Jul', col: 35 },
  { name: 'Aug', col: 39 },
  { name: 'Sep', col: 44 },
  { name: 'Oct', col: 48 },
  { name: 'Nov', col: 52 }
];

const SIX_MONTHS = [
  { name: 'Jun', col: 0 },
  { name: 'Jul', col: 5 },
  { name: 'Aug', col: 9 },
  { name: 'Sep', col: 14 },
  { name: 'Oct', col: 18 },
  { name: 'Nov', col: 22 }
];

export const GithubCalendar: React.FC<GithubCalendarProps> = ({
  username = 'mridulhasan13',
  className = ''
}) => {
  const [range, setRange] = useState<'6m' | '1y'>('6m');
  const [hoveredCell, setHoveredCell] = useState<{ count: number; date: string; x: number; y: number } | null>(null);

  const rawWeeks = fallbackData.weeks; // 53 weeks x 7 days
  const activeWeeks = range === '6m' ? rawWeeks.slice(rawWeeks.length - 26) : rawWeeks;
  const numWeeks = activeWeeks.length;

  // Calculate slice count
  let sliceCount = 0;
  activeWeeks.forEach((week) => {
    week.forEach((lvl) => {
      if (lvl > 0) sliceCount += lvl === 4 ? 14 : lvl * 3;
    });
  });

  const totalDisplay = range === '6m' ? Math.min(sliceCount, 412) : (fallbackData.totalContributions || 495);

  // Exact GitHub coordinate metrics
  const cellSize = 10;
  const cellGap = 3;
  const colPitch = cellSize + cellGap; // 13px
  const leftPadding = 32;
  const topPadding = 20;
  const totalSvgWidth = leftPadding + numWeeks * colPitch;
  const totalSvgHeight = topPadding + 7 * colPitch;

  const currentMonths = range === '6m' ? SIX_MONTHS : ALL_MONTHS;

  const getCellDate = (wIdx: number, dIdx: number) => {
    const today = new Date();
    const daysAgo = (numWeeks - 1 - wIdx) * 7 + (6 - dIdx);
    const d = new Date(today);
    d.setDate(today.getDate() - daysAgo);
    return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  return (
    <div className={`w-full font-[-apple-system,BlinkMacSystemFont,"Segoe_UI","Noto_Sans",Helvetica,Arial,sans-serif] ${className}`}>
      {/* Top Header Row matching GitHub */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-2.5">
        <h3 className="text-sm sm:text-base font-normal text-[#e6edf3]">
          <span className="font-semibold">{totalDisplay} contributions</span> in the{' '}
          {range === '6m' ? 'last 6 months' : 'last year'}
        </h3>

        <div className="flex items-center gap-2">
          {/* GitHub style segmented switcher */}
          <div className="inline-flex rounded-md p-0.5 bg-[#161b22] border border-[#30363d] text-xs">
            <button
              onClick={() => setRange('6m')}
              className={`px-2.5 py-1 rounded text-xs transition-colors ${
                range === '6m'
                  ? 'bg-[#1f6feb] text-white font-medium'
                  : 'text-[#7d8590] hover:text-[#e6edf3]'
              }`}
            >
              Last 6 Months
            </button>
            <button
              onClick={() => setRange('1y')}
              className={`px-2.5 py-1 rounded text-xs transition-colors ${
                range === '1y'
                  ? 'bg-[#1f6feb] text-white font-medium'
                  : 'text-[#7d8590] hover:text-[#e6edf3]'
              }`}
            >
              2026 (Full Year)
            </button>
          </div>

          <a
            href={`https://github.com/${username}`}
            target="_blank"
            rel="noopener noreferrer"
            title="View on GitHub"
            className="text-xs text-[#7d8590] hover:text-[#58a6ff] transition-colors font-mono hidden sm:inline"
          >
            @{username}
          </a>
        </div>
      </div>

      {/* GitHub Native Card Container */}
      <div className="rounded-md bg-[#0d1117] border border-[#30363d] p-3.5 sm:p-4 shadow-sm">
        <div className="w-full overflow-hidden">
          <svg
            viewBox={`0 0 ${totalSvgWidth} ${totalSvgHeight}`}
            className="w-full h-auto block select-none"
            preserveAspectRatio="xMidYMid meet"
          >
            {/* Month Header Labels */}
            {currentMonths.map((m, idx) => (
              <text
                key={idx}
                x={leftPadding + m.col * colPitch}
                y={12}
                fill="#7d8590"
                fontSize="10"
                fontFamily="-apple-system, BlinkMacSystemFont, Segoe UI, Noto Sans, Helvetica, Arial, sans-serif"
              >
                {m.name}
              </text>
            ))}

            {/* Weekday Row Labels (Mon, Wed, Fri) aligned exactly with rows 1, 3, 5 */}
            <text
              x={0}
              y={topPadding + 1 * colPitch + 9}
              fill="#7d8590"
              fontSize="9"
              fontFamily="-apple-system, BlinkMacSystemFont, Segoe UI, Noto Sans, Helvetica, Arial, sans-serif"
            >
              Mon
            </text>
            <text
              x={0}
              y={topPadding + 3 * colPitch + 9}
              fill="#7d8590"
              fontSize="9"
              fontFamily="-apple-system, BlinkMacSystemFont, Segoe UI, Noto Sans, Helvetica, Arial, sans-serif"
            >
              Wed
            </text>
            <text
              x={0}
              y={topPadding + 5 * colPitch + 9}
              fill="#7d8590"
              fontSize="9"
              fontFamily="-apple-system, BlinkMacSystemFont, Segoe UI, Noto Sans, Helvetica, Arial, sans-serif"
            >
              Fri
            </text>

            {/* Calendar Cells Matrix */}
            {activeWeeks.map((week, wIdx) => {
              const colX = leftPadding + wIdx * colPitch;
              return week.map((level, dIdx) => {
                const rowY = topPadding + dIdx * colPitch;
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
                    ry={2}
                    fill={color}
                    stroke={level === 0 ? 'rgba(255,255,255,0.04)' : 'rgba(255,255,255,0.08)'}
                    strokeWidth={level === 0 ? 1 : 0.5}
                    className="cursor-pointer transition-all hover:stroke-white/60 hover:stroke-[1.5px]"
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
            className="fixed z-50 pointer-events-none -translate-x-1/2 -translate-y-full mb-2 px-2.5 py-1 rounded bg-[#6e7681] text-white text-[11px] whitespace-nowrap shadow-lg font-medium"
            style={{ left: hoveredCell.x, top: hoveredCell.y - 6 }}
          >
            {hoveredCell.count > 0 ? `${hoveredCell.count} contributions` : 'No contributions'} on {hoveredCell.date}
          </div>
        )}

        {/* GitHub Native Footer Row */}
        <div className="flex items-center justify-between text-[11px] sm:text-xs text-[#7d8590] mt-3 pt-2.5 border-t border-[#21262d]">
          <a
            href="https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-github-profile/managing-contribution-settings-on-your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#58a6ff] transition-colors"
          >
            Learn how we count contributions
          </a>

          {/* GitHub Native Less to More Legend */}
          <div className="flex items-center gap-1.5 text-[11px] sm:text-xs text-[#7d8590]">
            <span>Less</span>
            <div className="flex items-center gap-[3px]">
              <span className="w-[10px] h-[10px] rounded-[2px] bg-[#161b22] border border-white/5" />
              <span className="w-[10px] h-[10px] rounded-[2px] bg-[#0e4429]" />
              <span className="w-[10px] h-[10px] rounded-[2px] bg-[#006d32]" />
              <span className="w-[10px] h-[10px] rounded-[2px] bg-[#26a641]" />
              <span className="w-[10px] h-[10px] rounded-[2px] bg-[#39d353]" />
            </div>
            <span>More</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GithubCalendar;
