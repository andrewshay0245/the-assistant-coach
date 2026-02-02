import { NextResponse } from 'next/server';

interface WaitlistEntry {
  name: string;
  email: string;
  coachingLevel: string;
  teamSize: string;
  interests: string[];
}

export async function POST(request: Request) {
  try {
    const body: WaitlistEntry = await request.json();

    // Validate required fields
    if (!body.email || !body.name) {
      return NextResponse.json(
        { error: 'Name and email are required' },
        { status: 400 }
      );
    }

    // For now, just log the entry
    // TODO: Connect to Supabase to store waitlist entries
    console.log('New waitlist entry:', {
      name: body.name,
      email: body.email,
      coachingLevel: body.coachingLevel,
      teamSize: body.teamSize,
      interests: body.interests,
      timestamp: new Date().toISOString(),
    });

    // In production, this would save to Supabase:
    // const { data, error } = await supabase
    //   .from('waitlist')
    //   .insert([{
    //     name: body.name,
    //     email: body.email,
    //     coaching_level: body.coachingLevel,
    //     team_size: body.teamSize,
    //     interests: body.interests,
    //   }]);

    return NextResponse.json(
      { success: true, message: 'Successfully added to waitlist' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Waitlist error:', error);
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    );
  }
}
