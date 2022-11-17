import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import type {
  BuilderStateType,
  builderKeyType,
  addBuilderKeyType,
} from '@/types/redux-types';
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
    updateReference(state, action) {
      const { index1, index2, text } = action.payload;
      state.cvs.references[index1][index2].text = text;
    },
    updateSection(
      state,
      action: PayloadAction<{ sectionKey: builderKeyType; section: any }>,
    ) {
      const { sectionKey, section } = action.payload;
      state.cvs[sectionKey] = section;
    },
    addSection(
      state,
      action: PayloadAction<{ sectionKey: addBuilderKeyType; section: any }>,
    ) {
      const { sectionKey, section } = action.payload;
      state.cvs[sectionKey] = [...state.cvs[sectionKey], section];
    },
  },
});

export const {
  updateCV,
  updateSkill,
  addSection,
  updateReference,
  updateSection,
} = CVSlice.actions;
export default CVSlice.reducer;
