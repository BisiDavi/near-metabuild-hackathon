import { useFormContext } from 'react-hook-form';
import type { SelectProps } from '@/types/interfaces';

export default function Select({ input }: SelectProps) {
  const {
    register,
    formState: { errors },
  }: any = useFormContext();

  return (
    <select {...register(input.name)}>
      <option>Select {input.placeholder}</option>
      {input?.options?.map((option) => (
        <option key={option.value} value={option.value}>
          {option.text}
        </option>
      ))}
    </select>
  );
}
