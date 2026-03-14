interface BrowserMockupProps {
  children: React.ReactNode;
  url?: string;
}

export function BrowserMockup({ children, url = "theassistantcoach.co" }: BrowserMockupProps) {
  return (
    <div className="rounded-xl overflow-hidden shadow-2xl border border-gray-700 bg-gray-900">
      {/* Browser Chrome */}
      <div className="bg-gray-800 px-4 py-3 flex items-center gap-3">
        {/* Traffic lights */}
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>
        {/* URL bar */}
        <div className="flex-1 bg-gray-700 rounded-md px-3 py-1.5 text-sm text-gray-400 truncate">
          {url}
        </div>
      </div>
      {/* Content */}
      <div className="bg-gray-950">
        {children}
      </div>
    </div>
  );
}

// Practice Planner Mockup Content
export function PracticePlannerMockup() {
  return (
    <div className="p-6 min-h-[300px]">
      <div className="flex items-center justify-between mb-6">
        <div>
          <div className="h-4 w-32 bg-blue-600 rounded mb-2" />
          <div className="h-3 w-48 bg-gray-700 rounded" />
        </div>
        <div className="h-10 w-32 bg-blue-600 rounded-lg flex items-center justify-center text-white text-sm font-medium">
          Generate Drill
        </div>
      </div>

      {/* Field visualization */}
      <div className="bg-emerald-900/30 rounded-xl p-4 mb-4 border border-emerald-700/30">
        <div className="aspect-[4/3] relative">
          {/* Field lines */}
          <div className="absolute inset-0 border-2 border-white/20 rounded" />
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-white/20" />
          {/* Goal */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-12 h-8 border-2 border-white/40 rounded-t" />
          {/* Player dots */}
          <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-blue-500 rounded-full" />
          <div className="absolute top-1/3 right-1/3 w-4 h-4 bg-blue-500 rounded-full" />
          <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-red-500 rounded-full" />
          <div className="absolute bottom-1/3 right-1/4 w-4 h-4 bg-red-500 rounded-full" />
        </div>
      </div>

      {/* Drill info */}
      <div className="grid grid-cols-3 gap-3">
        <div className="bg-gray-800 rounded-lg p-3">
          <div className="text-xs text-gray-500 mb-1">Field</div>
          <div className="text-sm text-white">Half Field</div>
        </div>
        <div className="bg-gray-800 rounded-lg p-3">
          <div className="text-xs text-gray-500 mb-1">Players</div>
          <div className="text-sm text-white">4v4 + G</div>
        </div>
        <div className="bg-gray-800 rounded-lg p-3">
          <div className="text-xs text-gray-500 mb-1">Constraint</div>
          <div className="text-sm text-white">3-touch max</div>
        </div>
      </div>
    </div>
  );
}

// Shot Tracker Mockup Content
export function ShotTrackerMockup() {
  return (
    <div className="p-6 min-h-[300px]">
      <div className="flex items-center justify-between mb-4">
        <div className="text-white font-semibold">Shot Analysis</div>
        <div className="flex gap-2">
          <div className="px-3 py-1 bg-emerald-600 rounded text-xs text-white">Our Offense</div>
          <div className="px-3 py-1 bg-gray-700 rounded text-xs text-gray-400">Defense</div>
        </div>
      </div>

      {/* Field with shots */}
      <div className="bg-emerald-900/30 rounded-xl p-4 mb-4 border border-emerald-700/30 relative">
        <div className="aspect-[4/3] relative">
          {/* Goal */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-16 h-10 border-2 border-white/40 rounded-t" />
          {/* Crease */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-24 h-12 border border-white/20 rounded-t-full" />

          {/* Shot dots - goals (green) */}
          <div className="absolute bottom-16 left-1/3 w-3 h-3 bg-emerald-500 rounded-full shadow-lg shadow-emerald-500/50" />
          <div className="absolute bottom-20 right-1/3 w-3 h-3 bg-emerald-500 rounded-full shadow-lg shadow-emerald-500/50" />
          <div className="absolute bottom-24 left-1/2 w-3 h-3 bg-emerald-500 rounded-full shadow-lg shadow-emerald-500/50" />

          {/* Shot dots - saves (red) */}
          <div className="absolute bottom-14 right-1/4 w-3 h-3 bg-red-500 rounded-full" />
          <div className="absolute bottom-28 left-1/4 w-3 h-3 bg-red-500 rounded-full" />
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-4 gap-2">
        <div className="bg-gray-800 rounded-lg p-2 text-center">
          <div className="text-lg font-bold text-white">5</div>
          <div className="text-xs text-gray-500">Shots</div>
        </div>
        <div className="bg-gray-800 rounded-lg p-2 text-center">
          <div className="text-lg font-bold text-emerald-400">3</div>
          <div className="text-xs text-gray-500">Goals</div>
        </div>
        <div className="bg-gray-800 rounded-lg p-2 text-center">
          <div className="text-lg font-bold text-white">60%</div>
          <div className="text-xs text-gray-500">Accuracy</div>
        </div>
        <div className="bg-gray-800 rounded-lg p-2 text-center">
          <div className="text-lg font-bold text-blue-400">2.4</div>
          <div className="text-xs text-gray-500">xG</div>
        </div>
      </div>
    </div>
  );
}

// GameStat Mockup Content
export function GameStatMockup() {
  return (
    <div className="p-6 min-h-[300px]">
      <div className="flex items-center justify-between mb-4">
        <div>
          <div className="text-white font-semibold">Home vs Away</div>
          <div className="text-xs text-gray-500">Q2 • 8:42</div>
        </div>
        <div className="flex items-center gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-white">7</div>
            <div className="text-xs text-gray-500">HOME</div>
          </div>
          <div className="text-gray-600">-</div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white">5</div>
            <div className="text-xs text-gray-500">AWAY</div>
          </div>
        </div>
      </div>

      {/* Stat rows */}
      <div className="space-y-2 mb-4">
        {[
          { label: 'Shots', home: 18, away: 14 },
          { label: 'Rebounds', home: 12, away: 9 },
          { label: 'Possessions', home: '6/10', away: '4/10' },
          { label: 'Turnovers', home: 4, away: 7 },
        ].map((stat) => (
          <div key={stat.label} className="flex items-center bg-gray-800 rounded-lg px-4 py-2">
            <div className="w-12 text-sm text-white font-medium">{stat.home}</div>
            <div className="flex-1 text-center text-xs text-gray-500">{stat.label}</div>
            <div className="w-12 text-sm text-white font-medium text-right">{stat.away}</div>
          </div>
        ))}
      </div>

      {/* Quick action buttons */}
      <div className="grid grid-cols-4 gap-2">
        {['Goal', 'Shot', 'Save', 'Turnover'].map((action) => (
          <button key={action} className="bg-blue-600 hover:bg-blue-700 text-white text-xs py-2 rounded-lg transition-colors">
            + {action}
          </button>
        ))}
      </div>
    </div>
  );
}
