import File from '@/components/form/File';
import Input from '@/components/form/Input';
import Select from '@/components/form/Select';
import SelectCountry from '@/components/form/SelectCountry';
import Skill from '@/components/form/Skill';
import Textarea from '@/components/form/Textarea';
import EmploymentHistory from '@/components/form/EmploymentHistory';
import Education from '@/components/form/Education';
import Reference from '@/components/form/Reference';
import type { inputType } from '@/types';

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
    case 'file':
      return <File input={input} />;
    case 'skill':
      return <Skill />;
    case 'employment':
      return <EmploymentHistory />;
    case 'education':
      return <Education />;
    case 'reference':
      return <Reference />;
  }
}
