import type { SelectProps } from '@/types/interfaces';

export default function Select({ input }: SelectProps) {
  return (
    <select>
      <option>Select {input.placeholder}</option>
      {input?.options?.map((option) => (
        <option key={option.value} value={option.value}>
          {option.text}
        </option>
      ))}
    </select>
  );
}
