import bcrypt from 'bcrypt';

import { connectDB } from '@/libs/connect-db';
import { UserModel, UserType } from '@/libs/model/user-model';
import { ErrorResponse, SuccessResponse } from '@/utils/server-response';
import { NextRequest, NextResponse } from 'next/server';
import { SALT } from '@/config/config';

export async function POST(request: NextRequest) {
  try {
    await connectDB();
    const userInfo = (await request.json()) as UserType;
    const { password } = userInfo;
    // hashing the password
    const hashedPassword = await bcrypt.hash(password, SALT);

    const newUser = await UserModel.create({
      ...userInfo,
      password: hashedPassword,
    });

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
