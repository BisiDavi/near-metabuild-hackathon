import { usePathname } from 'next/navigation';

import heroContent from '@/json/hero.json';

export default function HeroCards() {
  const pathname = usePathname();
  const cardArray = heroContent.cards.filter((card) =>
    pathname?.includes(card.icon),
  );
  const cards = cardArray.length === 0 ? heroContent.cards : cardArray;
  return (
    <ul className="lg:mx-auto lg:-mt-64 flex lg:w-1/2 mx-6 list-none flex-col">
      {cards.map((card) => (
        <li
          key={card.icon}
          className="cards lg:my-2.5 my-3 relative flex items-center rounded-lg border bg-white p-4 lg:px-6 shadow-lg"
        >
          <span className="w-10 text-3xl absolute top-2 right-0 lg:relative">❂</span>
          <div className="w-11/12">
            <h4 className="lg:my-0 my-1 font-bold">{card.title}</h4>
            <p className="my-0 lg:text-base text-sm">{card.text}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
