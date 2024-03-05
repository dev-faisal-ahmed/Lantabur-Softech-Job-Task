'use client';

import Link from 'next/link';
import { Button } from '@/components/button';
import { Input } from '@/components/input';
import { FormEvent, useState } from 'react';
import { toast } from 'sonner';
import { serverAddress } from '@/utils/server-address';
import { serverRequest } from '@/utils/server-request';
import { useRouter } from 'next/navigation';
import { Loader } from '@/components/loader';

export function RegisterForm() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleRegister = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = event.target as HTMLFormElement & {
      name: { value: string };
      email: { value: string };
      password: { value: string };
    };

    const name = formData.name.value.trim();
    const email = formData.email.value;
    const password = formData.password.value;

    try {
      setLoading(true);
      const url = `${serverAddress}/api/register`;
      const response = await fetch(
        url,
        serverRequest('POST', { name, email, password }),
      );
      const data = await response.json();

      if (!data.ok) return toast.error(data.message);

      toast.success(data.message);
      router.push('/login');
    } catch (err) {
      toast.error(JSON.stringify(err));
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {loading && <Loader />}
      <form
        onSubmit={handleRegister}
        className='flex w-full max-w-[450px] flex-col gap-3 rounded-lg bg-white p-8 shadow-md'
      >
        <h1 className='text-center text-xl font-semibold text-blue-950'>
          Welcome, Register Here
        </h1>
        <hr />
        <div />
        <Input
          title='Name'
          type='text'
          name='name'
          placeholder='Input Your Name'
          required
        />
        <Input
          title='Email'
          type='email'
          name='email'
          placeholder='Input Your Email'
          required
        />
        <Input
          title='Password'
          type='password'
          name='password'
          placeholder='Input A Strong Password'
          required
        />

        <Button disabled={loading} className='mt-3'>
          Register
        </Button>
        <p className='mt-3 text-center text-sm'>
          Already have an account?{' '}
          <Link className='text-blue-700 underline' href={'/login'}>
            Login
          </Link>
        </p>
      </form>
    </>
  );
}
