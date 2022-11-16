import Input from '@/components/form/Input';
import Select from '@/components/form/Select';
import SelectCountry from '@/components/form/SelectCountry';
import Textarea from '@/components/form/Textarea';
import { inputType } from '@/types';

export default function displayFormElement(input: inputType) {
  switch (input.type) {
    case 'input':
      return <Input input={input} />;
    case 'select':
      return <Select input={input} />;
    case 'selectCountry':
      return <SelectCountry input={input} />;
    case 'textarea':
      return <Textarea input={input} />;
  }
}
