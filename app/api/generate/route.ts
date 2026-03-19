import { NextRequest, NextResponse } from 'next/server';
import { commonNames } from '@/lib/kinyarwanda';

// POST /api/generate
// AI Logic for generating names using OpenRouter
type NameSuggestion = {
  name: string;
  meaning: string;
  origin: string;
  score: number;
  gender: 'male' | 'female' | 'unisex';
};

type GenerationPreferences = {
  christian: number;
  traditional: number;
  modern: number;
};

const DEFAULT_PREFERENCES: GenerationPreferences = {
  christian: 0.33,
  traditional: 0.33,
  modern: 0.34,
};

function fallbackSuggestions(preferences: GenerationPreferences): NameSuggestion[] {
  const seeded = commonNames.map((entry, index) => {
    const traditionalBoost = preferences.traditional * 0.4;
    const christianBoost = ['Maria', 'Yohani', 'Bizimana'].includes(entry.name)
      ? preferences.christian * 0.3
      : 0;
    const modernBoost = preferences.modern * 0.2;
    const baseScore = 0.65 + (commonNames.length - index) * 0.02;

    return {
      name: entry.name,
      meaning: entry.meaning,
      origin: 'Kinyarwanda',
      gender: entry.gender ?? 'unisex',
      score: Number((baseScore + traditionalBoost + christianBoost + modernBoost).toFixed(3)),
    };
  });

  const christianExtras: NameSuggestion[] = [
    {
      name: 'Maria',
      meaning: 'Beloved and chosen by God',
      origin: 'Christian',
      gender: 'female',
      score: Number((0.8 + preferences.christian * 0.35).toFixed(3)),
    },
    {
      name: 'Yohani',
      meaning: 'God is gracious',
      origin: 'Christian',
      gender: 'male',
      score: Number((0.78 + preferences.christian * 0.35).toFixed(3)),
    },
  ];

  return [...seeded, ...christianExtras]
    .sort((a, b) => b.score - a.score)
    .slice(0, 10);
}

function parseJsonSuggestions(content: string): NameSuggestion[] {
  const jsonMatch = content.match(/\[[\s\S]*\]/);
  if (!jsonMatch) {
    return [];
  }

  const parsed = JSON.parse(jsonMatch[0]);
  if (!Array.isArray(parsed)) {
    return [];
  }

  return parsed
    .map((item) => {
      const name = String(item?.name ?? '').trim();
      if (!name) {
        return null;
      }

      const gender = item?.gender === 'male' || item?.gender === 'female' || item?.gender === 'unisex'
        ? item.gender
        : 'unisex';

      const score = typeof item?.score === 'number' ? item.score : 0.7;

      return {
        name,
        meaning: String(item?.meaning ?? 'Meaning unavailable').trim(),
        origin: String(item?.origin ?? 'Rwandan').trim(),
        gender,
        score: Number(Math.min(1, Math.max(0, score)).toFixed(3)),
      } satisfies NameSuggestion;
    })
    .filter((item): item is NameSuggestion => Boolean(item))
    .slice(0, 10);
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      siblings = [],
      preferences = DEFAULT_PREFERENCES,
      prompt = '',
    } = body as {
      siblings?: string[];
      preferences?: GenerationPreferences;
      prompt?: string;
    };

    const apiKey = process.env.OPENROUTER_API_KEY;
    const model = process.env.OPENROUTER_MODEL ?? 'meta-llama/llama-3.3-70b-instruct';

    if (!apiKey) {
      return NextResponse.json(
        {
          suggestions: fallbackSuggestions(preferences),
          warning: 'OPENROUTER_API_KEY is not set. Returning local fallback suggestions.',
        },
        { status: 200 }
      );
    }

    const systemPrompt = [
      'You are an expert Rwandan naming consultant.',
      'Generate exactly 10 baby name suggestions as a JSON array only.',
      'Each item must include: name, meaning, origin, gender, score.',
      "gender must be one of: 'male', 'female', 'unisex'.",
      'score must be a number between 0 and 1.',
      'Balance Christian, Traditional Rwandan, and Modern style using provided weights.',
      'Favor harmony with sibling names when siblings are provided.',
      'Do not include any extra keys and do not wrap output in markdown.',
    ].join(' ');

    const userPrompt = JSON.stringify({
      request: prompt || 'Suggest meaningful Rwandan names.',
      siblings,
      preferences,
      namePool: commonNames,
    });

    const openRouterResponse = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
        'HTTP-Referer': process.env.OPENROUTER_SITE_URL ?? 'http://localhost:3000',
        'X-Title': process.env.OPENROUTER_APP_NAME ?? 'Imfura Naming App',
      },
      body: JSON.stringify({
        model,
        temperature: 0.7,
        max_tokens: 900,
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: userPrompt },
        ],
      }),
    });

    if (!openRouterResponse.ok) {
      const details = await openRouterResponse.text();
      console.error('OpenRouter API error:', details);

      return NextResponse.json(
        {
          suggestions: fallbackSuggestions(preferences),
          warning: 'OpenRouter request failed. Returning local fallback suggestions.',
        },
        { status: 200 }
      );
    }

    const completion = await openRouterResponse.json();
    const content = completion?.choices?.[0]?.message?.content;
    const generatedSuggestions = typeof content === 'string' ? parseJsonSuggestions(content) : [];

    if (!generatedSuggestions.length) {
      return NextResponse.json(
        {
          suggestions: fallbackSuggestions(preferences),
          warning: 'OpenRouter response was not parseable JSON. Returning local fallback suggestions.',
        },
        { status: 200 }
      );
    }

    return NextResponse.json({ suggestions: generatedSuggestions });
  } catch (error) {
    console.error('Error generating name:', error);
    return NextResponse.json(
      { error: 'Failed to generate name suggestions' },
      { status: 500 }
    );
  }
}
