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

export function LoginForm() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = event.target as HTMLFormElement & {
      email: { value: string };
      password: { value: string };
    };

    const email = formData.email.value;
    const password = formData.password.value;

    try {
      setLoading(true);
      const url = `${serverAddress}/api/login`;
      const response = await fetch(
        url,
        serverRequest('POST', { email, password }),
      );
      const data = await response.json();
      console.log(data);
      if (!data.ok) return toast.error(data.message);

      toast.success(data.message);
      router.push('/');
      router.refresh();
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
        onSubmit={handleLogin}
        className='mx-auto mt-20 flex w-full max-w-[450px] flex-col gap-3 rounded-lg bg-white p-8 shadow-md'
      >
        <h1 className='text-center text-xl font-semibold text-blue-950'>
          Welcome Again, Login Here
        </h1>
        <hr />
        <div />
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
          Login
        </Button>
        <p className='mt-3 text-center text-sm'>
          New here?{' '}
          <Link className='text-blue-700 underline' href={'/register'}>
            Register
          </Link>
        </p>
      </form>
    </>
  );
}
