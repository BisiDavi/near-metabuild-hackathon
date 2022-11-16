import countries from '@/json/countries.json';
import type { FormElementProps } from '@/types/interfaces';

export default function SelectCountry({ input }: FormElementProps) {
  return (
    <select name={input.name}>
      <option>Select {input.placeholder}</option>
      {countries.map((option) => (
        <option key={option.Iso3} value={option.name}>
          {option.name}
        </option>
      ))}
    </select>
  );
}
