import { useFormContext } from 'react-hook-form';

import countries from '@/json/countries.json';
import type { FormElementProps } from '@/types/interfaces';

export default function SelectCountry({ input }: FormElementProps) {
  const {
    register,
    formState: { errors },
  }: any = useFormContext();
  return (
    <select
      name={input.name}
      className="my-2 w-full rounded-md border border-gray-300 p-2 focus:border-gray-500 focus:ring-gray-500 sm:text-sm"
      {...register('country')}
    >
      <option>Select {input.placeholder}</option>
      {countries.map((option) => (
        <option key={option.Iso3} value={option.name}>
          {option.name}
        </option>
      ))}
    </select>
  );
}
