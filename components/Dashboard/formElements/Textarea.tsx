import { useFormContext } from 'react-hook-form';

interface Props {
  input: {
    name: string;
    placeholder: string;
  };
}

export default function Textarea({ input }: Props) {
  const { name, placeholder } = input;
  const {
    register,
    formState: { errors },
  }: any = useFormContext();
  return (
    <>
      <textarea
        placeholder={placeholder}
        className="my-2 w-full rounded-md border border-gray-300 p-2 focus:border-gray-500 focus:ring-gray-500 sm:text-sm"
        rows={3}
        {...register(name)}
      ></textarea>
      {errors[name] && (
        <p className="p-0 text-xs  text-red-500">{errors[name]?.message}</p>
      )}
    </>
  );
}
