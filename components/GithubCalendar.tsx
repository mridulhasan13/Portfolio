import React, { useEffect, useState } from 'react';

interface ContributionDay {
  date: string;
  count: number;
  level: number;
}

interface ApiResponse {
  total: {
    lastYear?: number;
    [year: string]: number | undefined;
  };
  contributions: ContributionDay[];
}

interface GithubCalendarProps {
  username?: string;
  className?: string;
}

const LEVEL_COLORS: { [key: number]: string } = {
  0: '#161b22', // GitHub dark empty cell
  1: '#0e4429', // Level 1 green
  2: '#006d32', // Level 2 green
  3: '#26a641', // Level 3 green
  4: '#39d353'  // Level 4 bright green
};

const GithubCalendar: React.FC<GithubCalendarProps> = ({
  username = 'mridulhasan13',
  className = ''
}) => {
  const [data, setData] = useState<ApiResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [hoveredDay, setHoveredDay] = useState<{ date: string; count: number; x: number; y: number } | null>(null);

  useEffect(() => {
    let isMounted = true;
    const fetchContributions = async () => {
      try {
        const res = await fetch(`https://github-contributions-api.jogruber.de/v4/${username}?y=last`);
        if (!res.ok) throw new Error('Failed to fetch contributions');
        const json = await res.json();
        if (isMounted) {
          setData(json);
          setLoading(false);
        }
      } catch {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchContributions();
    return () => {
      isMounted = false;
    };
  }, [username]);

  // Total count formatted
  const totalCount = data?.total?.lastYear ?? 495;

  // Group contributions into 52/53 columns of 7 days
  const weeks: ContributionDay[][] = [];
  if (data?.contributions && data.contributions.length > 0) {
    let currentWeek: ContributionDay[] = [];
    data.contributions.forEach((day, index) => {
      currentWeek.push(day);
      if (currentWeek.length === 7 || index === data.contributions.length - 1) {
        weeks.push(currentWeek);
        currentWeek = [];
      }
    });
  }

  // Months label helper
  const months = ['Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov'];

  return (
    <div
      className={`relative rounded-2xl bg-neutral-950/80 border border-neutral-800/80 p-5 sm:p-6 transition-all duration-300 hover:border-neutral-700 shadow-xl ${className}`}
    >
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-5 pb-3.5 border-b border-neutral-800/80">
        <div className="flex items-center gap-2.5">
          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            />
          </svg>
          <span className="text-sm sm:text-base font-bold text-white tracking-tight">
            {totalCount} contributions in the last year
          </span>
        </div>

        <a
          href={`https://github.com/${username}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-mono text-amber-400 hover:text-amber-300 flex items-center gap-1 transition-colors group"
        >
          <span>@{username}</span>
          <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>

      {/* Heatmap Area */}
      <div className="overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-neutral-800">
        {data && weeks.length > 0 ? (
          <div className="min-w-[680px]">
            {/* Month labels */}
            <div className="flex justify-between pl-8 pr-2 mb-1.5 text-[10px] font-mono text-neutral-400">
              {months.map((m, idx) => (
                <span key={idx}>{m}</span>
              ))}
            </div>

            {/* Grid */}
            <div className="flex gap-1 items-start">
              {/* Day labels (Mon, Wed, Fri) */}
              <div className="flex flex-col gap-1 text-[9px] font-mono text-neutral-500 pr-2 pt-0.5 select-none shrink-0 w-6">
                <span className="h-2.5 leading-none"></span>
                <span className="h-2.5 leading-none">Mon</span>
                <span className="h-2.5 leading-none"></span>
                <span className="h-2.5 leading-none">Wed</span>
                <span className="h-2.5 leading-none"></span>
                <span className="h-2.5 leading-none">Fri</span>
                <span className="h-2.5 leading-none"></span>
              </div>

              {/* Weeks of SVG rects */}
              <div className="flex gap-1 flex-1">
                {weeks.map((week, wIdx) => (
                  <div key={wIdx} className="flex flex-col gap-1">
                    {week.map((day, dIdx) => (
                      <div
                        key={dIdx}
                        className="w-2.5 h-2.5 rounded-[2px] transition-transform duration-100 hover:scale-125 cursor-pointer"
                        style={{
                          backgroundColor: LEVEL_COLORS[day.level] || LEVEL_COLORS[0]
                        }}
                        onMouseEnter={(e) => {
                          const rect = e.currentTarget.getBoundingClientRect();
                          setHoveredDay({
                            date: day.date,
                            count: day.count,
                            x: rect.left + rect.width / 2,
                            y: rect.top
                          });
                        }}
                        onMouseLeave={() => setHoveredDay(null)}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          /* Live SVG Fallback */
          <div className="min-w-[650px] py-2">
            <img
              src={`https://ghchart.rshah.org/40c463/${username}`}
              alt={`${username}'s GitHub Contribution Chart`}
              className="w-full opacity-90 hover:opacity-100 transition-opacity"
              loading="lazy"
            />
          </div>
        )}
      </div>

      {/* Floating tooltip */}
      {hoveredDay && (
        <div
          className="fixed z-50 pointer-events-none -translate-x-1/2 -translate-y-full mb-2 px-2.5 py-1 rounded bg-neutral-900 border border-neutral-700 text-white text-[11px] font-mono whitespace-nowrap shadow-xl"
          style={{ left: hoveredDay.x, top: hoveredDay.y - 6 }}
        >
          <span className="font-semibold text-emerald-400">{hoveredDay.count}</span> contribution{hoveredDay.count === 1 ? '' : 's'} on {hoveredDay.date}
        </div>
      )}

      {/* Footer / Legend */}
      <div className="flex flex-wrap items-center justify-between gap-3 mt-4 pt-3 border-t border-neutral-800/60 text-xs font-mono text-neutral-500">
        <a
          href="https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-github-profile/managing-contribution-settings-on-your-profile"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-neutral-300 transition-colors text-[11px]"
        >
          Learn how we count contributions
        </a>

        {/* Less to More scale */}
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
  );
};

export default GithubCalendar;
