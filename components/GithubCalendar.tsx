import React, { useState, useRef, useEffect } from 'react';
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
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [hoveredCell, setHoveredCell] = useState<{ count: number; date: string; x: number; y: number } | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };
    if (dropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownOpen]);

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
        <a
          href={`https://github.com/${username}`}
          target="_blank"
          rel="noopener noreferrer"
          title={`View @${username} on GitHub`}
          className="flex items-center gap-2 group hover:opacity-90 transition-opacity"
        >
          <svg
            className="w-4 h-4 sm:w-5 sm:h-5 fill-current text-[#e6edf3] group-hover:text-[#58a6ff] transition-colors shrink-0"
            viewBox="0 0 16 16"
            aria-hidden="true"
          >
            <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" />
          </svg>
          <h3 className="text-sm sm:text-base font-normal text-[#e6edf3] group-hover:text-[#58a6ff] transition-colors">
            <span className="font-semibold">{totalDisplay} contributions</span> in the{' '}
            {range === '6m' ? 'last 6 months' : 'last year'}
          </h3>
        </a>

        <div className="flex items-center gap-3">
          {/* Subtle Invisible-style Dropdown matching GitHub settings */}
          <div className="relative" ref={dropdownRef}>
            <button
              type="button"
              onClick={() => setDropdownOpen((prev) => !prev)}
              className="inline-flex items-center gap-1.5 text-xs text-[#7d8590] hover:text-[#58a6ff] transition-colors bg-transparent border-0 p-0 font-normal focus:outline-none cursor-pointer select-none"
            >
              <span>{range === '6m' ? 'Last 6 months' : '2026 (Full year)'}</span>
              <svg
                className={`w-3 h-3 transition-transform duration-150 ${dropdownOpen ? 'rotate-180' : ''}`}
                viewBox="0 0 12 12"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M2.5 4.5l3.5 3.5 3.5-3.5" />
              </svg>
            </button>

            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-40 rounded-md bg-[#161b22] border border-[#30363d] shadow-xl py-1 z-30 text-xs">
                <div className="px-3 py-1.5 text-[10px] font-semibold text-[#7d8590] uppercase tracking-wider border-b border-[#21262d]">
                  Timeframe
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setRange('6m');
                    setDropdownOpen(false);
                  }}
                  className={`w-full text-left px-3 py-1.5 flex items-center justify-between hover:bg-[#1f242c] transition-colors ${
                    range === '6m' ? 'text-[#e6edf3] font-medium' : 'text-[#7d8590]'
                  }`}
                >
                  <span>Last 6 months</span>
                  {range === '6m' && (
                    <svg className="w-3.5 h-3.5 text-[#3fb950]" viewBox="0 0 16 16" fill="currentColor">
                      <path d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z" />
                    </svg>
                  )}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setRange('1y');
                    setDropdownOpen(false);
                  }}
                  className={`w-full text-left px-3 py-1.5 flex items-center justify-between hover:bg-[#1f242c] transition-colors ${
                    range === '1y' ? 'text-[#e6edf3] font-medium' : 'text-[#7d8590]'
                  }`}
                >
                  <span>2026 (Full year)</span>
                  {range === '1y' && (
                    <svg className="w-3.5 h-3.5 text-[#3fb950]" viewBox="0 0 16 16" fill="currentColor">
                      <path d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z" />
                    </svg>
                  )}
                </button>
              </div>
            )}
          </div>

          <a
            href={`https://github.com/${username}`}
            target="_blank"
            rel="noopener noreferrer"
            title={`View @${username} on GitHub`}
            className="inline-flex items-center gap-1 text-xs text-[#7d8590] hover:text-[#58a6ff] transition-colors font-mono"
          >
            <span>@{username}</span>
            <svg className="w-3 h-3 opacity-70" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.75">
              <path d="M6 3h7v7M13 3L6 10" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
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
        <div className="flex flex-wrap items-center justify-between gap-2 text-[11px] sm:text-xs text-[#7d8590] mt-3 pt-2.5 border-t border-[#21262d]">
          <div className="flex items-center gap-3">
            <a
              href="https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-github-profile/managing-contribution-settings-on-your-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#58a6ff] transition-colors"
            >
              Learn how we count contributions
            </a>
            <span className="text-[#30363d]">•</span>
            <a
              href={`https://github.com/${username}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#58a6ff] transition-colors inline-flex items-center gap-1 font-mono"
            >
              <span>github.com/{username}</span>
            </a>
          </div>

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
