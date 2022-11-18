import type { employmentHistoryType, inputType } from '@/types';
import type { BuilderStateType } from '@/types/redux-types';

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

export interface ResumeAside1 {
  dCvs: BuilderStateType['cvs'];
}

export interface employmentHistoryProps {
  details: {
    role: string;
    startedOn: string;
    endOn: string;
    achievements: employmentHistoryType;
  };
}

export interface educationProps {
  details: {
    course: string;
    startedOn: string;
    endOn: string;
    achievements: employmentHistoryType;
  };
}

export interface profileProps {
  profile: {
    intro: string;
  };
}
