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
    <div className="bg-white rounded-lg shadow p-4 space-y-4">
      <h3 className="text-lg font-semibold">Ask the Naming Consultant</h3>
      <textarea
        value={prompt}
        onChange={e => onPromptChange(e.target.value)}
        placeholder="Describe the themes: gratitude, faith, nature; or add prefixes/suffixes..."
        className="w-full min-h-[100px] p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <div>
        <p className="text-sm text-gray-700 mb-2">Siblings / Family Names</p>
        <SiblingInput onAdd={onAddSibling} />
        {siblings.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-2">
            {siblings.map(s => (
              <span key={s} className="inline-flex items-center px-2 py-1 text-sm bg-gray-100 rounded-md">
                {s}
                <button className="ml-2 text-gray-500 hover:text-red-600" onClick={() => onRemoveSibling(s)} aria-label={`Remove ${s}`}>×</button>
              </span>
            ))}
          </div>
        )}
      </div>

      <div className="flex justify-end">
        <button
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-60"
          onClick={onGenerate}
          disabled={loading}
        >
          {loading ? "Generating..." : "Generate Name Ideas"}
        </button>
      </div>
    </div>
  );
}
