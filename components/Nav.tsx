import Link from 'next/link';
import { usePathname } from 'next/navigation';
import useFirebase from '@/hooks/useFirebase';

import navcontent from '@/json/nav.json';

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
            <li className="rounded-full border px-4 py-2  font-bold">
              👋 Hello, {name}
            </li>
            <li>
              
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}
