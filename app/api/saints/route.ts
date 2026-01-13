import { NextRequest, NextResponse } from 'next/server';

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

    // TODO: Implement saint lookup from saints-data.json
    // This would search through the saints database
    
    // Placeholder response
    const saint = {
      name: name,
      feastDay: 'January 1',
      patronage: 'Children and families',
      description: 'A blessed saint'
    };

    return NextResponse.json(saint);
  } catch (error) {
    console.error('Error looking up saint:', error);
    return NextResponse.json(
      { error: 'Failed to look up saint' },
      { status: 500 }
    );
  }
}
