import { FormElementProps } from '@/types/interfaces';

export default function File({ input }: FormElementProps) {
  return (
    <>
      <p className="mb-0">Upload your profile picture</p>
      <input
        type="file"
        name={input.name}
        className="my-1 w-full rounded-md border border-gray-300 p-2 focus:border-gray-500 focus:ring-gray-500 sm:text-sm"
      />
    </>
  );
}
