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
    <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-lg border-2 border-pink-200 dark:border-gray-700 p-6 sticky top-4 space-y-5">
      <div className="text-center pb-4 border-b-2 border-pink-200 dark:border-gray-700">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent mb-2 font-display">{name}</h2>
        <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">Legacy Card</p>
      </div>

      {meaning && (
        <div className="bg-gradient-to-br from-yellow-50 to-pink-50 dark:from-yellow-900/20 dark:to-pink-900/20 p-4 rounded-2xl border-2 border-yellow-200 dark:border-yellow-700/50">
          <h3 className="text-sm font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wide mb-2 flex items-center gap-2">
            <svg className="w-4 h-4 text-yellow-600 dark:text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            Meaning
          </h3>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{meaning}</p>
        </div>
      )}

      {saint && (
        <div className="bg-gradient-to-br from-pink-50 to-blue-50 dark:from-pink-900/20 dark:to-blue-900/20 p-4 rounded-2xl border-2 border-pink-200 dark:border-pink-700/50">
          <h3 className="text-sm font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wide mb-3 flex items-center gap-2">
            <svg className="w-4 h-4 text-pink-600 dark:text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
            Patron Saint
          </h3>
          <div className="space-y-2">
            <p className="font-bold text-gray-800 dark:text-gray-100 text-lg font-display">{saint.name}</p>
            {saint.feastDay && (
              <p className="text-sm text-gray-700 dark:text-gray-300 flex items-center gap-2">
                <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                </svg>
                <span><span className="font-semibold">Feast Day:</span> {saint.feastDay}</span>
              </p>
            )}
            {saint.patronage && (
              <p className="text-sm text-gray-700 dark:text-gray-300 flex items-center gap-2">
                <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                </svg>
                <span><span className="font-semibold">Patronage:</span> {saint.patronage}</span>
              </p>
            )}
            {saint.description && (
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">{saint.description}</p>
            )}
          </div>
        </div>
      )}

      {notables && notables.length > 0 && (
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-4 rounded-2xl border-2 border-blue-200 dark:border-blue-700/50">
          <h3 className="text-sm font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wide mb-3 flex items-center gap-2">
            <svg className="w-4 h-4 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
            </svg>
            Notable Figures
          </h3>
          <div className="space-y-3">
            {notables.map((n, idx) => (
              <div key={idx} className="bg-white/60 dark:bg-gray-700/50 p-3 rounded-2xl border border-blue-100 dark:border-blue-800">
                <p className="font-bold text-gray-800 dark:text-gray-100 font-display">{n.name}</p>
                {n.description && (
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{n.description}</p>
                )}
                {n.link && (
                  <a
                    href={n.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold mt-2 inline-flex items-center gap-1 hover:underline"
                  >
                    Learn more
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
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
