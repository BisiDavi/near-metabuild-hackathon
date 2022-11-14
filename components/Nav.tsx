import navcontent from '@/json/nav.json';

export default function Nav() {
  return (
    <nav className="flex w-3/4 justify-end">
      <ul className="list-style-none flex items-center space-x-4">
        {navcontent.map((item) => (
          <li key={item} className="hover:text-red-500">
            {item}
          </li>
        ))}
      </ul>
    </nav>
  );
}
