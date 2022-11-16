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
    skills: { [key: string]: { [key: string]: string } };
    employmentHistory: { [key: string]: string };
    education: { [key: string]: string };
  };
};
