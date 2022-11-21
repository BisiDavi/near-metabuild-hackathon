import type { employmentHistoryType, inputType } from '@/types';
import type { resumeStateType } from '@/types/redux-types';

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
  type?: 'button' | 'submit' | 'reset';
  text: string;
  disabled?: boolean;
  title?: string;
  iconUrl?: string;
}

export interface FormProgressProps {
  currentStage: number;
}

export interface ResumeAside1 {
  dCvs: resumeStateType['cvs'] | any;
  bg: string;
}
export interface ResumeBody {
  dCvs: resumeStateType['cvs'] | any;
}

export interface employmentHistoryProps {
  history: {
    role: string;
    startedOn: string;
    endOn: string;
    achievements: employmentHistoryType;
  }[];
}

export interface educationProps {
  details: {
    course: string;
    startedOn: string;
    endOn: string;
    achievements: employmentHistoryType;
  }[];
}

export interface profileProps {
  profile: {
    intro: string;
  };
}
