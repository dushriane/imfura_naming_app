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
    <div className="bg-white rounded-lg shadow-lg p-6 sticky top-4">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">{name}</h2>

      {meaning && (
        <div className="mb-4">
          <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-1">Meaning</h3>
          <p className="text-gray-600">{meaning}</p>
        </div>
      )}

      {saint && (
        <div className="mb-4 pb-4 border-b border-gray-200">
          <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-2">Patron Saint</h3>
          <div className="bg-blue-50 p-3 rounded-md">
            <p className="font-semibold text-gray-800">{saint.name}</p>
            {saint.feastDay && (
              <p className="text-sm text-gray-600 mt-1">
                <span className="font-medium">Feast Day:</span> {saint.feastDay}
              </p>
            )}
            {saint.patronage && (
              <p className="text-sm text-gray-600 mt-1">
                <span className="font-medium">Patronage:</span> {saint.patronage}
              </p>
            )}
            {saint.description && (
              <p className="text-sm text-gray-600 mt-2">{saint.description}</p>
            )}
          </div>
        </div>
      )}

      {notables && notables.length > 0 && (
        <div className="mb-4">
          <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-2">Notable Figures</h3>
          <div className="space-y-2">
            {notables.map((n, idx) => (
              <div key={idx} className="bg-gray-50 p-3 rounded-md">
                <p className="font-semibold text-gray-800">{n.name}</p>
                {n.description && (
                  <p className="text-sm text-gray-600 mt-1">{n.description}</p>
                )}
                {n.link && (
                  <a
                    href={n.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-blue-600 hover:underline mt-1 inline-block"
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
