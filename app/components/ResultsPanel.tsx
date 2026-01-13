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
      <div className="bg-white rounded-lg shadow p-4">
        <p className="text-gray-600 text-sm">No suggestions yet. Add a prompt and generate.</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow p-4">
      <h3 className="text-lg font-semibold mb-3">Suggested Names</h3>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {suggestions.map((s) => (
          <li key={s.name}>
            <button
              className="w-full text-left p-3 border border-gray-200 rounded-md hover:border-blue-500 hover:bg-blue-50"
              onClick={() => onSelectName(s.name)}
            >
              <div className="flex items-center justify-between">
                <span className="font-semibold text-gray-800">{s.name}</span>
                {typeof s.score === "number" && (
                  <span className="text-xs text-gray-500">Match {Math.round(s.score * 100)}%</span>
                )}
              </div>
              {s.meaning && (
                <p className="text-sm text-gray-600 mt-1 truncate">{s.meaning}</p>
              )}
              {s.origin && (
                <p className="text-xs text-gray-500 mt-1">Origin: {s.origin}</p>
              )}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
