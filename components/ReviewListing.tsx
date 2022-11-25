/* eslint-disable @next/next/no-img-element */
export default function ReviewListing({ item }: any) {
  return (
    <li
      key={item.name}
      className="my-3 flex items-center rounded-lg border px-4 py-1 shadow hover:bg-gray-200"
    >
      <img
        src={item.image}
        alt={item.name}
        className="mr-4 w-20 rounded-full"
      />
      <div className="content">
        <h4 className="font-medium">{item.fullName}</h4>
        <h4>{item.email}</h4>
        <h4>{item.intro}</h4>
        <h4>{item.price} NEAR</h4>
        <ul className="my-2 flex items-center">
          <li className="mr-1 font-medium">Niche:</li>
          {item.niche.map((nicheItem: { value: string; label: string }) => (
            <li
              key={nicheItem.value}
              className="mr-2 rounded-lg border px-2 py-0"
            >
              {nicheItem.label}
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
}
