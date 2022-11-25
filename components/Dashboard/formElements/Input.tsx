import { useFormContext } from 'react-hook-form';

interface Props {
  input: {
    name: string;
    defaultValue?: string;
    placeholder: string;
    type?: string;
  };
}

export default function Input({ input }: Props) {
  const {
    register,
    formState: { errors },
  }: any = useFormContext();
  const { defaultValue, name, placeholder, type } = input;
  const inputType = type ? { type } : { type: 'text' };
  const defaultInputValue = defaultValue ? { defaultValue } : '';
  const inputProps = { ...inputType, ...defaultInputValue };
  return (
    <div className='my-1'>
      <input
        className="w-full rounded-md border border-gray-300 p-2 focus:border-gray-500 focus:ring-gray-500 sm:text-sm"
        placeholder={placeholder}
        {...inputProps}
        {...register(name)}
      />
      {errors[name] && (
        <p className="text-xs  text-red-500">{errors[name]?.message}</p>
      )}
    </div>
  );
}
