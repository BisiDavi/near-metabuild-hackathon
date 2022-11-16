import Input from '@/components/form/Input';
import Select from '@/components/form/Select';
import { inputType } from '@/types';

export default function displayFormElement(input: inputType) {
  switch (input.type) {
    case 'input':
      return <Input input={input} />;
    case 'select':
      return <Select input={input} />;
  }
}
