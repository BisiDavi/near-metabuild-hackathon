interface Props {
  input: {
    name: string;
    placeholder: string;
  };
}

export default function Input({ input }: Props) {
  return (
    <input
      name={input.name}
      className="my-2 w-full rounded-md border border-gray-300 p-2 focus:border-gray-500 focus:ring-gray-500 sm:text-sm"
      placeholder={input.placeholder}
    />
  );
}
