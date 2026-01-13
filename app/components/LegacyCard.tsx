"use client";

interface SaintInfo {
  name?: string;
  feastDay?: string;
  patronage?: string;
  description?: string;
}

interface NotableInfo {
  name: string;
  description?: string;
  link?: string;
}

interface LegacyCardProps {
  name: string;
  meaning?: string;
  saint?: SaintInfo | null;
  notables?: NotableInfo[] | null;
}

export default function LegacyCard({ name, meaning, saint, notables }: LegacyCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-lg border border-pink-200 p-6 sticky top-4 space-y-5">
      <div className="text-center pb-4 border-b-2 border-[#ffc8dd]/30">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-[#ffafcc] to-[#a2d2ff] bg-clip-text text-transparent mb-2">{name}</h2>
        <p className="text-xs text-gray-500 font-medium">Legacy Card</p>
      </div>

      {meaning && (
        <div className="bg-gradient-to-br from-[#fff4a3]/20 to-[#ffc8dd]/10 p-4 rounded-xl border border-[#ffd60a]/20">
          <h3 className="text-sm font-bold text-gray-700 uppercase tracking-wide mb-2 flex items-center gap-2">
            <span>📖</span>
            Meaning
          </h3>
          <p className="text-gray-700 leading-relaxed">{meaning}</p>
        </div>
      )}

      {saint && (
        <div className="bg-gradient-to-br from-[#ffc8dd]/10 to-[#bde0fe]/20 p-4 rounded-xl border border-[#ffc8dd]/30">
          <h3 className="text-sm font-bold text-gray-700 uppercase tracking-wide mb-3 flex items-center gap-2">
            <span>✝️</span>
            Patron Saint
          </h3>
          <div className="space-y-2">
            <p className="font-bold text-gray-800 text-lg">{saint.name}</p>
            {saint.feastDay && (
              <p className="text-sm text-gray-700">
                <span className="font-semibold">🗓️ Feast Day:</span> {saint.feastDay}
              </p>
            )}
            {saint.patronage && (
              <p className="text-sm text-gray-700">
                <span className="font-semibold">🙏 Patronage:</span> {saint.patronage}
              </p>
            )}
            {saint.description && (
              <p className="text-sm text-gray-600 mt-2">{saint.description}</p>
            )}
          </div>
        </div>
      )}

      {notables && notables.length > 0 && (
        <div className="bg-gradient-to-br from-[#bde0fe]/10 to-[#fff4a3]/10 p-4 rounded-xl border border-[#bde0fe]/30">
          <h3 className="text-sm font-bold text-gray-700 uppercase tracking-wide mb-3 flex items-center gap-2">
            <span>⭐</span>
            Notable Figures
          </h3>
          <div className="space-y-3">
            {notables.map((n, idx) => (
              <div key={idx} className="bg-white/60 p-3 rounded-lg border border-[#bde0fe]/20">
                <p className="font-bold text-gray-800">{n.name}</p>
                {n.description && (
                  <p className="text-sm text-gray-600 mt-1">{n.description}</p>
                )}
                {n.link && (
                  <a
                    href={n.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-[#a2d2ff] hover:text-[#bde0fe] font-semibold mt-2 inline-flex items-center gap-1 hover:underline"
                  >
                    Learn more →
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {!saint && (!notables || notables.length === 0) && !meaning && (
        <p className="text-gray-500 text-sm">Loading details...</p>
      )}
    </div>
  );
}
