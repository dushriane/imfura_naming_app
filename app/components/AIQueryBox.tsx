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
    <div className="bg-white rounded-2xl shadow-lg border border-pink-200 p-6 space-y-4">
      <h3 className="text-lg font-bold text-gray-800 flex items-center gap-2">
        <span className="text-2xl">💬</span>
        Ask the Naming Consultant
      </h3>
      <textarea
        value={prompt}
        onChange={e => onPromptChange(e.target.value)}
        placeholder="Describe the themes: gratitude, faith, nature; or add prefixes/suffixes..."
        className="w-full min-h-[100px] p-4 border-2 border-[#ffc8dd]/30 rounded-xl focus:outline-none focus:border-[#bde0fe] focus:ring-2 focus:ring-[#bde0fe]/30 transition-all bg-white/50"
      />

      <div>
        <p className="text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
          <span>👨‍👩‍👧‍👦</span>
          Siblings / Family Names
        </p>
        <SiblingInput onAdd={onAddSibling} />
        {siblings.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-2">
            {siblings.map(s => (
              <span key={s} className="inline-flex items-center px-3 py-1.5 text-sm font-medium bg-gradient-to-r from-[#ffc8dd] to-[#bde0fe] text-gray-800 rounded-full shadow-sm">
                {s}
                <button className="ml-2 text-gray-600 hover:text-gray-900 font-bold" onClick={() => onRemoveSibling(s)} aria-label={`Remove ${s}`}>×</button>
              </span>
            ))}
          </div>
        )}
      </div>

      <div className="flex justify-end pt-2">
        <button
          className="px-6 py-3 rounded-xl disabled:opacity-60 disabled:cursor-not-allowed flex items-center gap-2 text-gray-800 font-semibold transition-all shadow-md hover:shadow-lg"
          style={{ background: loading ? '#e5e7eb' : 'linear-gradient(90deg, #ffafcc 0%, #bde0fe 100%)' }}
          onClick={onGenerate}
          disabled={loading}
        >
          {loading ? (
            <>
              <span className="animate-spin">⏳</span>
              Generating...
            </>
          ) : (
            <>
              <span>✨</span>
              Generate Name Ideas
            </>
          )}
        </button>
      </div>
    </div>
  );
}
