import heroContent from '@/json/hero.json';

export default function HeroCards() {
  return (
    <ul className="mx-auto -mt-80 flex w-1/2 list-none flex-col">
      {heroContent.cards.map((card) => (
        <li
          key={card.icon}
          className="cards my-2.5 rounded-lg  border bg-white py-4 px-6 shadow-lg"
        >
          <h4 className="my-0 font-bold">{card.title}</h4>
          <p className="my-0">{card.text}</p>
        </li>
      ))}
    </ul>
  );
}
