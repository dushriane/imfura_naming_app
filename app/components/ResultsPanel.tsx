"use client";

interface ResultItem {
  name: string;
  meaning?: string;
  origin?: string;
  score?: number;
  gender?: 'male' | 'female' | 'unisex';
}

interface ResultsPanelProps {
  suggestions: ResultItem[];
  onSelectName: (name: string) => void;
}

const getGenderBg = (gender?: string) => {
  if (gender === 'female') return 'bg-gradient-to-br from-pink-50 to-pink-100 dark:from-pink-900/20 dark:to-pink-800/20 border-pink-300 dark:border-pink-700';
  if (gender === 'male') return 'bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 border-blue-300 dark:border-blue-700';
  if (gender === 'unisex') return 'bg-gradient-to-br from-yellow-50 to-yellow-100 dark:from-yellow-900/20 dark:to-yellow-800/20 border-yellow-300 dark:border-yellow-700';
  return 'bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600';
};

export default function ResultsPanel({ suggestions, onSelectName }: ResultsPanelProps) {
  if (!suggestions || suggestions.length === 0) {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-lg border-2 border-pink-200 dark:border-gray-700 p-6 max-w-4xl">
        <p className="text-gray-600 dark:text-gray-300 text-center flex items-center justify-center gap-2">
          <svg className="w-4 h-4 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
          </svg>
          <span>No suggestions yet. Add a prompt and generate.</span>
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-lg border-2 border-pink-200 dark:border-gray-700 p-6 max-w-4xl">
      <h3 className="text-lg font-bold mb-5 text-gray-800 dark:text-gray-100 flex items-center gap-2 font-display">
        <svg className="w-4 h-4 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
        Suggested Names
      </h3>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {suggestions.map((s) => (
          <li key={s.name}>
            <button
              className={`w-full text-left p-5 border-2 rounded-3xl hover:shadow-lg transition-all duration-300 ${getGenderBg(s.gender)}`}
              onClick={() => onSelectName(s.name)}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-bold text-gray-800 dark:text-gray-100 text-xl font-display">{s.name}</span>
                {typeof s.score === "number" && (
                  <span className="text-xs font-semibold text-yellow-700 dark:text-yellow-300 bg-yellow-200 dark:bg-yellow-900/50 px-2.5 py-1 rounded-full flex items-center gap-1">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    {Math.round(s.score * 100)}%
                  </span>
                )}
              </div>
              {s.meaning && (
                <p className="text-sm text-gray-700 dark:text-gray-300 mt-1 line-clamp-2">{s.meaning}</p>
              )}
              <div className="flex items-center justify-between mt-3">
                {s.origin && (
                  <p className="text-xs text-gray-600 dark:text-gray-400 font-medium flex items-center gap-1">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clipRule="evenodd" />
                    </svg>
                    {s.origin}
                  </p>
                )}
                {s.gender && (
                  <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-white/50 dark:bg-gray-700/50 text-gray-700 dark:text-gray-300">
                    {s.gender}
                  </span>
                )}
              </div>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
