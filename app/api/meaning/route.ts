import { NextRequest, NextResponse } from 'next/server';
import { commonNames } from '@/lib/kinyarwanda';

// GET /api/meaning?name=...&prompt=...
// Name meaning lookup - returns etymology and spiritual significance
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const name = searchParams.get('name');

    if (!name) {
      return NextResponse.json(
        { error: 'Name parameter is required' },
        { status: 400 }
      );
    }

    // Search in common names first
    const found = commonNames.find(n => n.name.toLowerCase() === name.toLowerCase());
    
    if (found) {
      return NextResponse.json({
        name: found.name,
        meaning: found.meaning,
        gender: found.gender,
        category: found.category
      });
    }

    // TODO: Use LLM to explain etymological and spiritual significance
    // For now, return a generic response
    return NextResponse.json({
      name,
      meaning: 'A beautiful name with deep cultural significance',
    });
  } catch (error) {
    console.error('Error looking up meaning:', error);
    return NextResponse.json(
      { error: 'Failed to look up meaning' },
      { status: 500 }
    );
  }
}
