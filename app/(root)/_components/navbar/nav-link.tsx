import Link from 'next/link';
import { ReactNode } from 'react';

type NavLinkProps = {
  children: ReactNode;
  url: string;
  activeUrl: string;
};

export function NavLink({ children, url, activeUrl }: NavLinkProps) {
  console.log(url === activeUrl);
  return (
    <Link
      href={url}
      className={`px-5 py-2 text-gray-600 ${activeUrl === url ? 'font-bold text-blue-600' : ''}`}
    >
      {children}
    </Link>
  );
}
