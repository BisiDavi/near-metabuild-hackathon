export type elementsType = {
  [key: string]: {
    top: number;
    left: number;
    id: string;
  };
};

export type inputType = {
  name: string;
  placeholder: string;
  type: string;
  options?: Array<{ value: string; text: string }>;
};

export type skillType = Array<{
  name: string;
  placeholder: string;
  type: string;
}>;
