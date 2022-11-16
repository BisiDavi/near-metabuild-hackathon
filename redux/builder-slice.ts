/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { BuilderStateType } from '@/types/redux-types';

const initialState: BuilderStateType = {
  cvs: {
    profile: {
      name: 'Tony Sanders',
      role: 'CUSTOMER SERVICE REPRESENTATIVE',
      intro:
        'Dedicated Customer Service Representative dedicated to providing quality care for ultimate customer satisfaction.Proven ability toestablish and maintain excellent communication and relationshipswith clients. Adept in general accounting and financetransactions.',
      profile: '',
    },
    address: {
      address: '123460 22nd Ave. SW',
      state: 'Seattle',
      zip: 'WA 98116',
      country: 'United States',
      phone: '(206) 742-5187',
      email: 'tonysandy@gmail.com',
    },
    skills: {
      skill1: { text: 'Troubleshooting Skills', percentage: '80%' },
      skill2: { text: 'Multitasking Skills', percentage: '90%' },
      skill3: { text: 'Marketing Skills', percentage: '100%' },
      skill4: { text: 'Mediation & Negotiation Skills', percentage: '90%' },
      skill5: { text: 'Excellent CommunicationSkills', percentage: '80%' },
    },
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
