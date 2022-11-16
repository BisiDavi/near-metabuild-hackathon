import useReduxForm from '@/hooks/useReduxForm';
import countries from '@/json/countries.json';
import type { FormElementProps } from '@/types/interfaces';

export default function SelectCountry({ input }: FormElementProps) {
  const { onChangeHandler, getInputValue } = useReduxForm();
  const inputValue = getInputValue(input.id);

  return (
    <select
      name={input.name}
      value={inputValue}
      className="my-2 w-full rounded-md border border-gray-300 p-2 focus:border-gray-500 focus:ring-gray-500 sm:text-sm"
      onChange={(e) => onChangeHandler(e, input.id)}
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
