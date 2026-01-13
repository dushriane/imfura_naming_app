import { NextRequest, NextResponse } from 'next/server';
import saintsData from '@/lib/saints-data.json';

// GET /api/saints?name=...
// Saint lookup logic
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

    // Search saints database for matching name (case-insensitive)
    const normalized = name.toLowerCase().trim();
    const saint = saintsData.saints.find(
      s => s.name.toLowerCase() === normalized || s.name.toLowerCase().includes(normalized)
    );

    if (saint) {
      return NextResponse.json(saint);
    }

    // Return null if no saint found
    return NextResponse.json(null);
  } catch (error) {
    console.error('Error looking up saint:', error);
    return NextResponse.json(
      { error: 'Failed to look up saint' },
      { status: 500 }
    );
  }
}
