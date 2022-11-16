import File from '@/components/form/File';
import Input from '@/components/form/Input';
import Select from '@/components/form/Select';
import SelectCountry from '@/components/form/SelectCountry';
import Skill from '@/components/form/Skill';
import Textarea from '@/components/form/Textarea';
import type { inputType } from '@/types';

export default function displayFormElement(input: inputType, register: any) {
  switch (input.type) {
    case 'input':
      return <Input input={input} register={register} />;
    case 'select':
      return <Select input={input} register={register} />;
    case 'selectCountry':
      return <SelectCountry input={input} register={register} />;
    case 'textarea':
      return <Textarea input={input} register={register} />;
    case 'file':
      return <File input={input} register={register} />;
    case 'skill':
      return <Skill register={register} />;
  }
}
