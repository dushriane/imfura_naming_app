import { NextRequest, NextResponse } from 'next/server';

// GET /api/notables?name=...
// Notable figures lookup - integrates with Wikipedia/Wikidata
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

    // TODO: Integrate with Wikipedia/Wikidata API for real data
    // For now, return placeholder notable figures based on name patterns
    
    const notables = [];

    // Simple stub logic - in production, query Wikipedia API
    if (name.toLowerCase().includes('maria') || name.toLowerCase() === 'maria') {
      notables.push({
        name: 'Maria Yohana Mukankuranga',
        description: 'Rwandan educator and community leader',
        link: 'https://en.wikipedia.org'
      });
    }

    if (name.toLowerCase().includes('ishimwe')) {
      notables.push({
        name: 'Ishimwe Grace',
        description: 'Contemporary Rwandan artist and activist',
        link: 'https://en.wikipedia.org'
      });
    }

    // Return empty array if no notables found
    return NextResponse.json(notables);
  } catch (error) {
    console.error('Error looking up notables:', error);
    return NextResponse.json(
      { error: 'Failed to look up notables' },
      { status: 500 }
    );
  }
}
