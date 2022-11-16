/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { BuilderStateType } from '@/types/redux-types';

const initialState: BuilderStateType = {
  cvs: {
    profile: {
      name: 'Tony Sanders',
      role: 'CUSTOMER SERVICE REPRESENTATIVE',
      intro: '',
      profile: '',
    },
    details: {
      address: 'CUSTOMER SERVICE REPRESENTATIVE',
      state: '',
      zip: '',
      country: '',
      phone: '',
      email: '',
    },
    skills: {},
    employmentHistory: {},
    education: {},
  },
};

const CVSlice = createSlice({
  name: 'CV',
  initialState,
  reducers: {
    updateCV(state, action: PayloadAction<BuilderStateType['cvs']>) {
      console.log('action.payload', action.payload);
      state.cvs = action.payload;
    },
  },
});

export const { updateCV } = CVSlice.actions;
export default CVSlice.reducer;
