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
    <div className="bg-white rounded-lg shadow p-4">
      <h3 className="text-lg font-semibold mb-3">Name Style Weights</h3>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Christian</label>
          <input
            type="range"
            min={0}
            max={1}
            step={0.01}
            value={weights.christian}
            onChange={e => set("christian", parseFloat(e.target.value))}
            className="w-full"
          />
          <p className="text-xs text-gray-500">{Math.round(weights.christian * 100)}%</p>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Traditional / Kinyarwanda</label>
          <input
            type="range"
            min={0}
            max={1}
            step={0.01}
            value={weights.traditional}
            onChange={e => set("traditional", parseFloat(e.target.value))}
            className="w-full"
          />
          <p className="text-xs text-gray-500">{Math.round(weights.traditional * 100)}%</p>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Modern</label>
          <input
            type="range"
            min={0}
            max={1}
            step={0.01}
            value={weights.modern}
            onChange={e => set("modern", parseFloat(e.target.value))}
            className="w-full"
          />
          <p className="text-xs text-gray-500">{Math.round(weights.modern * 100)}%</p>
        </div>
      </div>
    </div>
  );
}
