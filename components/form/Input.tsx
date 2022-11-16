import type { FormElementProps } from '@/types/interfaces';

export default function Input({ input , register}: FormElementProps) {

  return (
    <input
      className="my-2 w-full rounded-md border border-gray-300 p-2 focus:border-gray-500 focus:ring-gray-500 sm:text-sm"
      placeholder={input.placeholder}
      {...register(input.name)}
    />
  );
}
