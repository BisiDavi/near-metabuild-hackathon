import navcontent from '@/json/nav.json';

export default function Nav() {
  return (
    <nav className="w-2/4">
      <ul className="list-style-none flex items-center">
        {navcontent.map((item) => (
          <li key={item} className="">
            {item}
          </li>
        ))}
      </ul>
    </nav>
  );
}
