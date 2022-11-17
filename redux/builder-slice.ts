/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { BuilderStateType } from '@/types/redux-types';
import { cvsData } from '@/lib/seeder';

const initialState: BuilderStateType = {
  cvs: cvsData.cv1,
};

const CVSlice = createSlice({
  name: 'CV',
  initialState,
  reducers: {
    updateCV(state, action: PayloadAction<BuilderStateType['cvs']>) {
      state.cvs = action.payload;
    },
    updateSkill(state, action) {
      const { index, text } = action.payload;
      state.cvs.skills[index].text = text;
    },
    addReference(state, action) {
      state.cvs.references = [...state.cvs.references, action.payload];
    },
    removeReference(state, action) {
      state.cvs.references = action.payload;
    },
  },
});

export const { updateCV, updateSkill, addReference, removeReference } =
  CVSlice.actions;
export default CVSlice.reducer;
