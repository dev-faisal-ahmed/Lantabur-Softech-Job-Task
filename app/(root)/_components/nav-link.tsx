import Link from 'next/link';
import { ReactNode } from 'react';

type NavLinkProps = {
  children: ReactNode;
  url: string;
  activeUrl: string;
};

export function NavLink({ children, url, activeUrl }: NavLinkProps) {
  return (
    <Link
      href={url}
      className={`px-5 py-2  ${activeUrl === url ? 'font-bold text-blue-700' : 'text-gray-600'}`}
    >
      {children}
    </Link>
  );
}
