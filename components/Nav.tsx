import Link from 'next/link';

import navcontent from '@/json/nav.json';

export default function Nav() {
  return (
    <nav className="flex w-3/4 justify-end">
      <ul className="list-style-none flex items-center space-x-4">
        {navcontent.map((item) => (
          <li
            key={item}
            className="px-2 duration-300 hover:border-b-2 hover:border-gray-400 hover:text-red-500 hover:ease-in"
          >
            <Link href={item}>{item}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
