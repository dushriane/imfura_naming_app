"use client";

import SiblingInput from "./SiblingInput";

interface AIQueryBoxProps {
  prompt: string;
  onPromptChange: (p: string) => void;
  siblings: string[];
  onAddSibling: (s: string) => void;
  onRemoveSibling: (s: string) => void;
  onGenerate: () => void;
  loading?: boolean;
}

export default function AIQueryBox({ prompt, onPromptChange, siblings, onAddSibling, onRemoveSibling, onGenerate, loading }: AIQueryBoxProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-lg border-2 border-pink-200 dark:border-gray-700 p-6 space-y-4 max-w-4xl">
      <h3 className="text-lg font-bold text-gray-800 dark:text-gray-100 flex items-center gap-2 font-display">
        <svg className="w-4 h-4 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
        Ask the Naming Consultant
      </h3>
      <textarea
        value={prompt}
        onChange={e => onPromptChange(e.target.value)}
        placeholder="Describe the themes: gratitude, faith, nature; or add prefixes/suffixes..."
        className="w-full min-h-[100px] p-4 border-2 border-pink-100 dark:border-gray-600 rounded-2xl focus:outline-none focus:border-pink-300 dark:focus:border-pink-500 focus:ring-2 focus:ring-pink-200 dark:focus:ring-pink-800 transition-all bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-100"
      />

      <div>
        <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 flex items-center gap-2">
          <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          Siblings / Family Names
        </p>
        <SiblingInput onAdd={onAddSibling} />
        {siblings.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-2">
            {siblings.map(s => (
              <span key={s} className="inline-flex items-center px-3 py-1.5 text-sm font-medium bg-gradient-to-r from-pink-100 to-blue-100 dark:from-pink-900/30 dark:to-blue-900/30 text-gray-800 dark:text-gray-100 rounded-full shadow-sm border border-pink-200 dark:border-gray-600">
                {s}
                <button className="ml-2 text-gray-600 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400 font-bold text-lg" onClick={() => onRemoveSibling(s)} aria-label={`Remove ${s}`}>×</button>
              </span>
            ))}
          </div>
        )}
      </div>

      <div className="flex justify-end pt-2">
        <button
          className="px-6 py-3 rounded-2xl disabled:opacity-60 disabled:cursor-not-allowed flex items-center gap-2 text-gray-800 dark:text-white font-semibold transition-all shadow-md hover:shadow-lg font-display"
          style={{ background: loading ? '#e5e7eb' : 'linear-gradient(90deg, #ffafcc 0%, #bde0fe 100%)' }}
          onClick={onGenerate}
          disabled={loading}
        >
          {loading ? (
            <>
              <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Generating...
            </>
          ) : (
            <>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
              Generate Name Ideas
            </>
          )}
        </button>
      </div>
    </div>
  );
}
