import useReduxForm from '@/hooks/useReduxForm';
import type { FormElementProps } from '@/types/interfaces';

export default function Textarea({ input }: FormElementProps) {
  const { onChangeHandler, getInputValue } = useReduxForm();
  const inputValue = getInputValue(input.id);

  return (
    <textarea
      name={input.name}
      placeholder={input.placeholder}
      rows={5}
      value={inputValue}
      className="my-2 w-full rounded-md border border-gray-300 p-2 focus:border-gray-500 focus:ring-gray-500 sm:text-sm"
      onChange={(e) => onChangeHandler(e, input.id)}
    ></textarea>
  );
}
