import React, { useState } from 'react';
import fallbackData from '../contributions.json';

interface GithubCalendarProps {
  username?: string;
  className?: string;
}

const LEVEL_COLORS: { [key: number]: string } = {
  0: '#161b22', // Empty dark cell
  1: '#0e4429', // Low
  2: '#006d32', // Medium
  3: '#26a641', // High
  4: '#39d353'  // Max bright green
};

const MONTH_NAMES = ['Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov'];

export const GithubCalendar: React.FC<GithubCalendarProps> = ({
  username = 'mridulhasan13',
  className = ''
}) => {
  const [hoveredCell, setHoveredCell] = useState<{ week: number; day: number; count: number; x: number; y: number } | null>(null);

  const totalContributions = fallbackData.totalContributions || 495;
  const rawWeeks = fallbackData.weeks;

  // 53 columns x 7 rows
  const cellSize = 10;
  const cellGap = 3;
  const leftPadding = 32;
  const topPadding = 18;
  const totalSvgWidth = leftPadding + 53 * (cellSize + cellGap); // 721
  const totalSvgHeight = topPadding + 7 * (cellSize + cellGap); // 109

  return (
    <div className={`w-full ${className}`}>
      {/* Top Header Row matching GitHub */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
        <h3 className="text-base sm:text-lg font-semibold text-white tracking-tight">
          {totalContributions} contributions in the last year
        </h3>

        <div className="flex items-center gap-2 font-mono text-xs">
          <a
            href={`https://github.com/${username}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-400 hover:text-white transition-colors"
          >
            @{username}
          </a>
          <span className="px-2.5 py-0.5 rounded-md bg-blue-600 text-white font-medium text-xs">
            2026
          </span>
        </div>
      </div>

      {/* GitHub Native Inner Card Container */}
      <div className="rounded-xl bg-[#0d1117] border border-[#30363d] p-4 sm:p-5 shadow-2xl">
        {/* Responsive Vector SVG: Fits any screen width without horizontal scrollbars */}
        <div className="w-full overflow-hidden">
          <svg
            viewBox={`0 0 ${totalSvgWidth} ${totalSvgHeight}`}
            className="w-full h-auto block select-none"
            preserveAspectRatio="xMidYMid meet"
          >
            {/* Month Header Labels */}
            {MONTH_NAMES.map((month, idx) => {
              const colIndex = Math.floor((idx * 52) / 12);
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

            {/* Matrix of 53 Weeks x 7 Days */}
            {rawWeeks.map((week, wIdx) => {
              const colX = leftPadding + wIdx * (cellSize + cellGap);
              return week.map((level, dIdx) => {
                const rowY = topPadding + dIdx * (cellSize + cellGap);
                const color = LEVEL_COLORS[level] || LEVEL_COLORS[0];
                const count = level > 0 ? (level === 4 ? 14 : level * 3) : 0;

                return (
                  <rect
                    key={`${wIdx}-${dIdx}`}
                    x={colX}
                    y={rowY}
                    width={cellSize}
                    height={cellSize}
                    rx={2}
                    fill={color}
                    className="transition-all duration-150 hover:stroke-white/40 hover:stroke-1 cursor-pointer"
                    onMouseEnter={(e) => {
                      const rect = e.currentTarget.getBoundingClientRect();
                      setHoveredCell({
                        week: wIdx,
                        day: dIdx,
                        count,
                        x: rect.left + rect.width / 2,
                        y: rect.top
                      });
                    }}
                    onMouseLeave={() => setHoveredCell(null)}
                  >
                    <title>{count > 0 ? `${count} contributions` : 'No contributions'}</title>
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
            </span>
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
