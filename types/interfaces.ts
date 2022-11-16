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
  register: any;
}

export interface SelectProps {
  input: inputType;
  register: any;
}

export interface ButtonProps {
  onClick: () => void;
  className: string;
  type: 'button' | 'submit' | 'reset';
  text: string;
  disabled?: boolean;
}

export interface FormProgressProps {
  currentStage: number;
}
