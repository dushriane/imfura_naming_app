"use client";

import { useState } from "react";
import HeroScene from "./components/HeroScene";
import FilterControls from "./components/FilterControls";
import AIQueryBox from "./components/AIQueryBox";
import ResultsPanel from "./components/ResultsPanel";
import LegacyCard from "./components/LegacyCard";

export default function Home() {
  const [siblings, setSiblings] = useState<string[]>([]);
  const [weights, setWeights] = useState({ christian: 0.33, traditional: 0.33, modern: 0.34 });
  const [prompt, setPrompt] = useState("");
  const [suggestions, setSuggestions] = useState<Array<{ name: string; meaning?: string; origin?: string; score?: number }>>([]);
  const [selectedName, setSelectedName] = useState<string | null>(null);
  const [details, setDetails] = useState<any | null>(null);
  const [loading, setLoading] = useState(false);

  const addSibling = (s: string) => setSiblings(prev => [...prev, s]);
  const removeSibling = (s: string) => setSiblings(prev => prev.filter(x => x !== s));

  const generateNames = async () => {
    setLoading(true);
    setSelectedName(null);
    setDetails(null);
    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ siblings, preferences: weights, prompt }),
      });
      const data = await res.json();
      setSuggestions(data?.suggestions || []);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  const handleNameClick = async (name: string) => {
    setSelectedName(name);
    setDetails(null);
    try {
      // Fetch saint and notable figures in parallel
      const [saintsRes, notablesRes] = await Promise.all([
        fetch(`/api/saints?name=${encodeURIComponent(name)}`),
        fetch(`/api/notables?name=${encodeURIComponent(name)}`),
      ]);
      const [saint, notables] = await Promise.all([saintsRes.json(), notablesRes.json()]);

      // Basic meaning: if suggestion had meaning, use it; else ask server for a lightweight explanation
      const suggestion = suggestions.find(s => s.name === name);
      let meaning = suggestion?.meaning;
      if (!meaning) {
        const meaningRes = await fetch(`/api/meaning?name=${encodeURIComponent(name)}&prompt=${encodeURIComponent(prompt)}`);
        const meaningData = await meaningRes.json();
        meaning = meaningData?.meaning || undefined;
      }

      setDetails({ name, meaning, saint, notables });
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <main className="min-h-screen w-full flex flex-col pb-12">
      <section className="p-4 md:p-8">
        <HeroScene />
      </section>

      <section className="px-4 md:px-8 mt-4 grid grid-cols-1 lg:grid-cols-3 gap-6 w-full max-w-7xl mx-auto">
        <div className="lg:col-span-2 space-y-4">
          <AIQueryBox
            prompt={prompt}
            onPromptChange={setPrompt}
            siblings={siblings}
            onAddSibling={addSibling}
            onRemoveSibling={removeSibling}
            onGenerate={generateNames}
            loading={loading}
          />
          <FilterControls weights={weights} onChange={setWeights} />
          <ResultsPanel suggestions={suggestions} onSelectName={handleNameClick} />
        </div>
        <div className="lg:col-span-1">
          {selectedName && details && (
            <LegacyCard
              name={details.name}
              meaning={details.meaning}
              saint={details.saint}
              notables={details.notables}
            />
          )}
        </div>
      </section>
    </main>
  );
}
