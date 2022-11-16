import Input from '@/components/form/Input';
import { inputType } from '@/types';

export default function displayFormElement(input: inputType) {
  switch (input.type) {
    case 'input':
      return <Input input={input} />;
  }
}
