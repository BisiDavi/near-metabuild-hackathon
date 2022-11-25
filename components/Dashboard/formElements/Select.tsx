import { useFormContext } from 'react-hook-form';

interface Props {
  input: {
    name: string;
    options: Array<{ value: string; text: string }>;
  };
}

export default function Select({ input }: Props) {
  const { name, options } = input;
  const {
    register,
    formState: { errors },
  }: any = useFormContext();
  return (
    <div>
      <select
        className="my-2 w-full rounded-md border border-gray-300 p-2 focus:border-gray-500 focus:ring-gray-500 sm:text-sm"
        {...register(name)}
      >
        {options.map((option) => (
          <option key={option.text} value={option.value}>
            {option.text}
          </option>
        ))}
      </select>
      {errors[name] && (
        <p className="p-0 text-xs  text-red-500">{errors[name]?.message}</p>
      )}
    </div>
  );
}
