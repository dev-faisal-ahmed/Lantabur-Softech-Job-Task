'use client';

import Link from 'next/link';
import { Contrail_One } from 'next/font/google';
import { NavLink } from './nav-link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/button';

const font = Contrail_One({ subsets: ['latin'], weight: ['400'] });

export function Navbar({ token }: { token: string }) {
  const activeUrl = usePathname();

  return (
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
          <Button className='bg-red-500'>LogOut</Button>
        ) : (
          <Link href={'/login'}>
            <Button>Login</Button>
          </Link>
        )}
      </div>
    </nav>
  );
}
