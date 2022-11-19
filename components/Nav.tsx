/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import useFirebase from '@/hooks/useFirebase';

import navcontent from '@/json/nav.json';
import LogoutIcon from './LogoutIcon';

export default function Nav() {
  const pathname = usePathname();
  const { getAuthdetails } = useFirebase();
  const authDetails = getAuthdetails();
  console.log('authDetails', authDetails);
  const name = authDetails?.displayName
    ? authDetails?.displayName
    : authDetails?.email;

  return (
    <nav className="flex w-3/4 justify-end">
      <ul className="list-style-none flex items-center space-x-4">
        {navcontent.map((item) => {
          const activeLink = pathname?.includes(item.link)
            ? 'text-white-400 border-b font-bold'
            : 'hover:border-b-2 hover:border-gray-400 hover:text-red-500 hover:ease-in';
          return (
            <li key={item.title} className={`${activeLink} px-2 duration-300 `}>
              <Link href={item.link}>{item.title}</Link>
            </li>
          );
        })}
        {authDetails !== null && (
          <>
            <li className="rounded-full border px-4 py-1 font-bold hover:border-blue-600   hover:bg-blue-600">
              👋 Hello, {name}
            </li>
            <li className="flex items-center rounded-full border py-1  pl-4 font-bold hover:border-blue-600 hover:bg-blue-600">
              
              Logout <LogoutIcon />
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}
