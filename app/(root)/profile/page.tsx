import { UserType } from '@/libs/model/user-model';
import { jwtDecode } from 'jwt-decode';
import { cookies } from 'next/headers';

export default function ProfilePage() {
  const token = cookies().get('user');
  const userInfo = jwtDecode(token?.value!) as UserType;

  return (
    <main className='container mt-10'>
      <h1 className='text-center text-2xl font-semibold'>Profile Info</h1>
      <div className='mx-auto mt-8 w-full max-w-[350px] rounded bg-white p-5'>
        <h3 className='text-xl'>Name : {userInfo.name}</h3>
        <h3 className='mt-2 text-xl'>Email : {userInfo.email}</h3>
      </div>
    </main>
  );
}
