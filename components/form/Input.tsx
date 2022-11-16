import useReduxForm from '@/hooks/useReduxForm';
import type { FormElementProps } from '@/types/interfaces';

export default function Input({ input }: FormElementProps) {
  const { onChangeHandler, getInputValue } = useReduxForm();

  const inputValue = getInputValue(input.id);

  return (
    <input
      className="my-2 w-full rounded-md border border-gray-300 p-2 focus:border-gray-500 focus:ring-gray-500 sm:text-sm"
      placeholder={input.placeholder}
      onChange={(e) => onChangeHandler(e, input.name)}
      name={input.name}
      value={inputValue}
    />
  );
}
