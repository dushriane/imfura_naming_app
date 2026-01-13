"use client";

interface FilterControlsProps {
  weights: { christian: number; traditional: number; modern: number };
  onChange: (w: { christian: number; traditional: number; modern: number }) => void;
}

export default function FilterControls({ weights, onChange }: FilterControlsProps) {
  const set = (key: keyof typeof weights, value: number) => {
    const v = Math.max(0, Math.min(1, value));
    const remain = 1 - v;
    const otherKeys = (Object.keys(weights) as (keyof typeof weights)[]).filter(k => k !== key);
    const even = remain / otherKeys.length;
    const next = { ...weights };
    next[key] = v;
    otherKeys.forEach(k => (next[k] = even));
    onChange(next);
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-pink-200 p-6">
      <h3 className="text-lg font-bold mb-4 text-gray-800 flex items-center gap-2">
        <span className="text-2xl">🎨</span>
        Name Style Weights
      </h3>
      <div className="space-y-5">
        <div>
          <div className="flex justify-between items-center mb-2">
            <label className="text-sm font-semibold text-gray-700">✝️ Christian</label>
            <span className="text-sm font-bold text-[#ffafcc] bg-[#ffc8dd]/20 px-3 py-1 rounded-full">{Math.round(weights.christian * 100)}%</span>
          </div>
          <input
            type="range"
            min={0}
            max={1}
            step={0.01}
            value={weights.christian}
            onChange={e => set("christian", parseFloat(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#ffafcc]"
          />
        </div>
        <div>
          <div className="flex justify-between items-center mb-2">
            <label className="text-sm font-semibold text-gray-700">🏛️ Traditional / Kinyarwanda</label>
            <span className="text-sm font-bold text-[#a2d2ff] bg-[#bde0fe]/20 px-3 py-1 rounded-full">{Math.round(weights.traditional * 100)}%</span>
          </div>
          <input
            type="range"
            min={0}
            max={1}
            step={0.01}
            value={weights.traditional}
            onChange={e => set("traditional", parseFloat(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#a2d2ff]"
          />
        </div>
        <div>
          <div className="flex justify-between items-center mb-2">
            <label className="text-sm font-semibold text-gray-700">⭐ Modern</label>
            <span className="text-sm font-bold text-[#ffd60a] bg-[#fff4a3]/30 px-3 py-1 rounded-full">{Math.round(weights.modern * 100)}%</span>
          </div>
          <input
            type="range"
            min={0}
            max={1}
            step={0.01}
            value={weights.modern}
            onChange={e => set("modern", parseFloat(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#ffd60a]"
          />
        </div>
      </div>
    </div>
  );
}
