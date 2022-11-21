export type resumeStateType = {
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
  } | null;
  selectedResume: 'resume-1' | 'resume-2' | 'resume-3' | 'resume-4' | null;
  asideBg: { [key: string]: string };
};

export type addResumeKeyType =
  | 'skills'
  | 'employmentHistory'
  | 'education'
  | 'references';

export type resumeKeyType =
  | 'references'
  | 'profile'
  | 'address'
  | 'education'
  | 'skills'
  | 'employmentHistory';

export type achievementType = 'education' | 'employmentHistory';
