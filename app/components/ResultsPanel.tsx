"use client";

interface ResultItem {
  name: string;
  meaning?: string;
  origin?: string;
  score?: number;
}

interface ResultsPanelProps {
  suggestions: ResultItem[];
  onSelectName: (name: string) => void;
}

export default function ResultsPanel({ suggestions, onSelectName }: ResultsPanelProps) {
  if (!suggestions || suggestions.length === 0) {
    return (
      <div className="bg-white rounded-2xl shadow-lg border border-pink-200 p-6">
        <p className="text-gray-600 text-center flex items-center justify-center gap-2">
          <span className="text-2xl">🌟</span>
          <span>No suggestions yet. Add a prompt and generate.</span>
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-pink-200 p-6">
      <h3 className="text-lg font-bold mb-4 text-gray-800 flex items-center gap-2">
        <span className="text-2xl">📋</span>
        Suggested Names
      </h3>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {suggestions.map((s) => (
          <li key={s.name}>
            <button
              className="w-full text-left p-4 border-2 border-[#ffc8dd]/20 bg-white/60 rounded-xl hover:border-[#bde0fe] hover:bg-gradient-to-br hover:from-[#ffc8dd]/10 hover:to-[#bde0fe]/10 transition-all duration-300 shadow-sm hover:shadow-md"
              onClick={() => onSelectName(s.name)}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="font-bold text-gray-800 text-lg">{s.name}</span>
                {typeof s.score === "number" && (
                  <span className="text-xs font-semibold text-[#ffd60a] bg-[#fff4a3]/50 px-2 py-1 rounded-full">✨ {Math.round(s.score * 100)}%</span>
                )}
              </div>
              {s.meaning && (
                <p className="text-sm text-gray-600 mt-1 line-clamp-2">{s.meaning}</p>
              )}
              {s.origin && (
                <p className="text-xs text-gray-500 mt-2 font-medium">🌍 {s.origin}</p>
              )}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
