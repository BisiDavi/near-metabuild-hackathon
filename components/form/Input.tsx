interface Props {
  input: {
    name: string;
    placeholder: string;
  };
}

export default function Input({ input }: Props) {
  return (
    <div> 
      <input
        name={input.name}
        className="block w-full rounded-md border-gray-300 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        placeholder={input.placeholder}
      />
    </div>
  );
}
