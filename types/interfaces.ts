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
    id: string;
  };
}

export interface SelectProps {
  input: inputType;
}

export interface ButtonProps {
  onClick: () => void;
  className: string;
  type: 'button' | 'submit' | 'reset';
  text: string;
  disabled?: boolean;
  title?: string;
}

export interface FormProgressProps {
  currentStage: number;
}
