import { SuccessResponse } from '@/utils/server-response';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function GET() {
  cookies().delete('user');

  return NextResponse.json(
    SuccessResponse({
      message: 'Successfully Logout',
      data: null,
      status: 200,
    }),
  );
}
