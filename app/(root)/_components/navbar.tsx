'use client';

import Link from 'next/link';
import { Contrail_One } from 'next/font/google';
import { NavLink } from './nav-link';
import { usePathname, useRouter } from 'next/navigation';
import { Button } from '@/components/button';
import { serverAddress } from '@/utils/server-address';
import { useState } from 'react';
import { Loader } from '@/components/loader';

const font = Contrail_One({ subsets: ['latin'], weight: ['400'] });

export function Navbar({ token }: { token: string }) {
  const activeUrl = usePathname();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleLogout = async () => {
    try {
      setLoading(true);
      const url = `${serverAddress}/api/logout`;
      const response = await fetch(url);
      const data = await response.json();

      if (data.ok) {
        router.push('/login');
        router.refresh();
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {loading && <Loader />}
      <nav className='bg-white py-5'>
        <div className='container flex items-center justify-between'>
          <Link
            href={'/'}
            className={`${font.className} text-3xl font-bold text-blue-950`}
          >
            EduAcademy
          </Link>
          <div>
            <NavLink url='/' activeUrl={activeUrl}>
              Home
            </NavLink>
            <NavLink url='/profile' activeUrl={activeUrl}>
              Profile
            </NavLink>
          </div>
          {token ? (
            <Button onClick={handleLogout} className='bg-red-500'>
              LogOut
            </Button>
          ) : (
            <Link href={'/login'}>
              <Button>Login</Button>
            </Link>
          )}
        </div>
      </nav>
    </>
  );
}
