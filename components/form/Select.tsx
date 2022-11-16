import { inputType } from '@/types';

interface SelectProps {
  input: inputType;
}

export default function Select({ input }: SelectProps) {
  return (
    <select name={input.name}>
      <option>Select {input.placeholder}</option>
      {input?.options?.map((option) => (
        <option key={option.value} value={option.value}>
          {option.text}
        </option>
      ))}
    </select>
  );
}
