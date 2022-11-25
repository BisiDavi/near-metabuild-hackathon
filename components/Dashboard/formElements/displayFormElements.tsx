import File from '@/components/form/File';
import Input from '@/components/Dashboard/formElements/Input';
import Select from '@/components/Dashboard/formElements/Select';
import Textarea from '@/components/Dashboard/formElements/Textarea';

export default function displayFormElements(input: any) {
  switch (input.elementType) {
    case 'input':
      return <Input input={input} />;
    case 'select':
      return <Select input={input} />;
    case 'textarea':
      return <Textarea input={input} />;
    case 'file':
      return <File input={input} />;
  }
}
