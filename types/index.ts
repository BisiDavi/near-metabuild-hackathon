export type inputType = {
  name: string;
  placeholder: string;
  type: string;
  id: string;
  options?: Array<{ value: string; text: string }>;
};

export type skillType = Array<{
  name: string;
  placeholder: string;
  type: string;
  id: string;
}>;

export type cvsGroupType =
  | 'profile'
  | 'address'
  | 'skills'
  | 'employmentHistory'
  | 'education';
