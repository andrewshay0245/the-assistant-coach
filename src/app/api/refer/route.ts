import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { referrerEmail, friendEmail, friendName, timestamp } = data;

    // Log referral (replace with Supabase insert when ready)
    console.log('New referral:', {
      referrerEmail,
      friendEmail,
      friendName,
      timestamp,
    });

    // TODO: Store in Supabase
    // const { error } = await supabase.from('referrals').insert({
    //   referrer_email: referrerEmail,
    //   friend_email: friendEmail,
    //   friend_name: friendName,
    //   created_at: timestamp,
    //   status: 'pending',
    // });

    // For now, we could also send an email notification
    // or store in a simple way

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Referral error:', error);
    return NextResponse.json({ error: 'Failed to submit referral' }, { status: 500 });
  }
}
