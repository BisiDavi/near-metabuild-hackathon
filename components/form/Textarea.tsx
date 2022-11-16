import { FormElementProps } from '@/types/interfaces';

export default function Textarea({ input }: FormElementProps) {
  return (
    <textarea
      name={input.name}
      placeholder={input.placeholder}
      rows={4}
      className="my-2 w-full rounded-md border border-gray-300 p-2 focus:border-gray-500 focus:ring-gray-500 sm:text-sm"
    ></textarea>
  );
}
