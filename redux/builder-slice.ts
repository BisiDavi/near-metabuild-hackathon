/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { BuilderStateType } from '@/types/redux-types';

const initialState: BuilderStateType = {
  cv: {},
};

const CVSlice = createSlice({
  name: 'CV',
  initialState,
  reducers: {
    updateCV(state, action: PayloadAction<BuilderStateType['cv']>) {
      console.log('action.payload', action.payload);
      state.cv = action.payload;
    },
  },
});

export const { updateCV } = CVSlice.actions;
export default CVSlice.reducer;
