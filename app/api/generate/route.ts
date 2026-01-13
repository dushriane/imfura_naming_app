import { NextRequest, NextResponse } from 'next/server';
import { commonNames } from '@/lib/kinyarwanda';

// POST /api/generate
// AI Logic for generating names using OpenAI/LangChain
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { siblings = [], preferences = { christian: 0.33, traditional: 0.33, modern: 0.34 }, prompt = '' } = body;

    // TODO: Implement AI name generation logic with LLM
    // For now, return a curated list based on common names with simulated scoring
    
    const suggestions = [
      { name: 'Imena', meaning: 'A blessing from above', origin: 'Kinyarwanda', score: 0.95 },
      { name: 'Ishimwe', meaning: 'Gratitude, thanksgiving', origin: 'Kinyarwanda', score: 0.92 },
      { name: 'Amahoro', meaning: 'Peace', origin: 'Kinyarwanda', score: 0.88 },
      { name: 'Mugisha', meaning: 'Blessing', origin: 'Kinyarwanda', score: 0.85 },
      { name: 'Uwase', meaning: 'Be healed/saved', origin: 'Kinyarwanda', score: 0.82 },
      { name: 'Shema', meaning: 'Be prosperous', origin: 'Kinyarwanda', score: 0.80 },
      { name: 'Ukuri', meaning: 'Truth', origin: 'Kinyarwanda', score: 0.78 },
      { name: 'Izuba', meaning: 'Sun', origin: 'Kinyarwanda', score: 0.75 },
      { name: 'Maria', meaning: 'Bitter sea / beloved', origin: 'Hebrew/Christian', score: 0.90 },
      { name: 'Yohani', meaning: 'God is gracious', origin: 'Hebrew/Christian', score: 0.87 },
    ];

    // Simple filtering based on preferences
    // Higher traditional weight favors Kinyarwanda names
    // Higher christian weight favors Hebrew/Christian names
    const scored = suggestions.map(s => {
      let weight = 0.5;
      if (s.origin.includes('Kinyarwanda')) weight += preferences.traditional * 0.5;
      if (s.origin.includes('Christian')) weight += preferences.christian * 0.5;
      return { ...s, score: s.score * weight };
    });

    scored.sort((a, b) => b.score - a.score);

    return NextResponse.json({ suggestions: scored.slice(0, 10) });
  } catch (error) {
    console.error('Error generating name:', error);
    return NextResponse.json(
      { error: 'Failed to generate name' },
      { status: 500 }
    );
  }
}
