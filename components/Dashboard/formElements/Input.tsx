import { useFormContext } from 'react-hook-form';

interface Props {
  name: string;
  defaultValue?: string;
  placeholder: string;
  type?: string;
}

export default function Input({
  defaultValue,
  name,
  placeholder,
  type,
}: Props) {
  const {
    register,
    formState: { errors },
  }: any = useFormContext();
  const inputType = type ? { type } : { type: 'text' };
  const defaultInputValue = defaultValue ? { defaultValue } : '';
  const inputProps = { ...inputType, ...defaultInputValue };
  return (
    <div>
      <input
        className="my-2 w-full rounded-md border border-gray-300 p-2 focus:border-gray-500 focus:ring-gray-500 sm:text-sm"
        placeholder={placeholder}
        {...inputProps}
        {...register(name)}
      />
      {errors[name] && (
        <p className="p-0 text-xs  text-red-500">{errors[name]?.message}</p>
      )}
    </div>
  );
}
