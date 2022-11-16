import type { inputType } from '@/types';

export interface DragItem {
  type: string;
  id: string;
  top: number;
  left: number;
}

export interface FormElementProps {
  input: {
    name: string;
    placeholder: string;
  };
}

export interface SelectProps {
  input: inputType;
}
