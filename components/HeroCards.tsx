'use client';

import { usePathname } from 'next/navigation';

import heroContent from '@/json/hero.json';

export default function HeroCards() {
  const pathname = usePathname();
  const cardArray = heroContent.cards.filter((card) =>
    pathname?.includes(card.icon),
  );
  const cards = cardArray.length === 0 ? heroContent.cards : cardArray;
  return (
    <ul className="mx-auto -mt-80 flex w-1/2 list-none flex-col">
      {cards.map((card) => (
        <li
          key={card.icon}
          className="cards my-2.5 flex items-center rounded-lg border bg-white py-4 px-6 shadow-lg"
        >
          <span className="w-10 text-3xl">❂</span>
          <div className="w-11/12">
            <h4 className="my-0 font-bold">{card.title}</h4>
            <p className="my-0">{card.text}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
