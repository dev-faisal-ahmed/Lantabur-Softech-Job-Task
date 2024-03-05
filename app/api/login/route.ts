import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { UserModel, UserType } from '@/libs/model/user-model';
import { ErrorResponse, SuccessResponse } from '@/utils/server-response';
import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';
import { JWT_SECRET } from '@/config/config';

// request type
type LoginRequestType = Omit<UserType, 'name'>;

export async function POST(request: NextRequest) {
  try {
    const loginInfo = (await request.json()) as LoginRequestType;
    // checking if user exist?
    const { email, password } = loginInfo;
    const userInfo = await UserModel.findOne({ email });

    if (!userInfo) throw new Error('User not found');

    // now checking the password
    const { password: hashedPassword, ...restUserInfo } = userInfo.toObject();
    const passwordMatched = await bcrypt.compare(password, hashedPassword);

    // cookies().set('email', body.email);
    if (!passwordMatched) throw new Error('Password does not match');

    const token = jwt.sign(restUserInfo, JWT_SECRET!, { expiresIn: '60d' });
    cookies().set('user', token);

    return NextResponse.json(
      SuccessResponse({
        data: restUserInfo,
        message: `Logged in as ${userInfo.name}`,
        status: 200,
      }),
    );
  } catch (error: any) {
    return NextResponse.json(
      ErrorResponse({
        error: error,
        message: error.message || JSON.stringify(error),
        status: 400,
      }),
    );
  }
}
