export type BuilderStateType = {
  cvs: {
    profile: {
      name: string;
      role: string;
      intro: string;
      profile: string;
    };
    address: {
      address: string;
      state: string;
      city: string;
      zip: string;
      country: string;
      phone: string;
      email: string;
    };
    skills: Array<{ [key: string]: string }>;
    employmentHistory: {
      text: string;
      name: string;
      placeholder: string;
      id: string;
    }[][][];
    education: {
      text: string;
      name: string;
      placeholder: string;
      id: string;
    }[][][];
    references: {
      text: string;
      name: string;
      placeholder: string;
      id: string;
    }[][];
  };
};

export type addBuilderKeyType =
  | 'skills'
  | 'employmentHistory'
  | 'education'
  | 'references';

export type builderKeyType =
  | 'references'
  | 'profile'
  | 'address'
  | 'education'
  | 'skills'
  | 'employmentHistory';

export type achievementType = 'education' | 'employmentHistory';
