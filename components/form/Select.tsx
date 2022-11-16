import useReduxForm from '@/hooks/useReduxForm';
import type { SelectProps } from '@/types/interfaces';

export default function Select({ input }: SelectProps) {
  const { onChangeHandler, getInputValue } = useReduxForm();
  const inputValue = getInputValue(input.id);

  return (
    <select
      name={input.name}
      value={inputValue}
      onChange={(e) => onChangeHandler(e, input.id)}
    >
      <option>Select {input.placeholder}</option>
      {input?.options?.map((option) => (
        <option key={option.value} value={option.value}>
          {option.text}
        </option>
      ))}
    </select>
  );
}
