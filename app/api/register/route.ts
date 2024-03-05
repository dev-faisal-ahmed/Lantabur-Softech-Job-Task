import { connectDB } from '@/libs/connect-db';
import { UserModel } from '@/libs/model/user-model';
import { ErrorResponse, SuccessResponse } from '@/utils/server-response';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    await connectDB();
    const body = await request.json();
    const newUser = await UserModel.create(body);
    return NextResponse.json(
      SuccessResponse({ data: newUser, message: 'User Created', status: 200 }),
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      ErrorResponse({ error, message: JSON.stringify(error), status: 400 }),
    );
  }
}
