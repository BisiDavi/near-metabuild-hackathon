import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import type {
  resumeStateType,
  resumeKeyType,
  addResumeKeyType,
  achievementType,
} from '@/types/redux-types';
import { seeder1 } from '@/lib/seeder-1';

const initialState: resumeStateType = {
  cvs: seeder1,
  selectedResume: null,
};

const resumeSlice = createSlice({
  name: 'resume',
  initialState,
  reducers: {
    selectResume(
      state,
      action: PayloadAction<{
        type: resumeStateType['selectedResume'];
        seeder: any;
      }>,
    ) {
      const { type, seeder } = action.payload;
      state.selectedResume = type;
      state.cvs = seeder;
    },
    updateCV(state, action: PayloadAction<resumeStateType['cvs']>) {
      state.cvs = action.payload;
    },
    updateSkill(state, action) {
      const { index, text } = action.payload;
      state.cvs.skills[index].text = text;
    },
    updateReference(
      state,
      action: PayloadAction<{
        index1: number;
        index2: number;
        text: string;
      }>,
    ) {
      const { index1, index2, text } = action.payload;
      state.cvs.references[index1][index2].text = text;
    },
    updateSection(
      state,
      action: PayloadAction<{ sectionKey: resumeKeyType; section: any }>,
    ) {
      const { sectionKey, section } = action.payload;
      state.cvs[sectionKey] = section;
    },
    addSection(
      state,
      action: PayloadAction<{ sectionKey: addResumeKeyType; section: any }>,
    ) {
      const { sectionKey, section } = action.payload;
      state.cvs[sectionKey] = [...state.cvs[sectionKey], section];
    },
    updateAchievement(
      state,
      action: PayloadAction<{
        sectionKey: achievementType;
        section: any;
        index: number;
        achievementId: number;
      }>,
    ) {
      const { sectionKey, section, index, achievementId } = action.payload;
      state.cvs[sectionKey][index][achievementId] = [
        ...state.cvs[sectionKey][index][achievementId],
        section,
      ];
    },
    removeAchievement(
      state,
      action: PayloadAction<{
        sectionKey: achievementType;
        index: number;
        achievementId: number;
        index2: number;
      }>,
    ) {
      const { sectionKey, index, achievementId, index2 } = action.payload;
      const tempAchievement = [...state.cvs[sectionKey][index][achievementId]];
      tempAchievement.splice(index2, 1);
      state.cvs[sectionKey][index][achievementId] = tempAchievement;
    },

    updateSectionText(
      state,
      action: PayloadAction<{
        index1: number;
        index2: number;
        index3: number;
        text: string;
        sectionKey: achievementType;
      }>,
    ) {
      const { index1, index2, index3, text, sectionKey } = action.payload;
      state.cvs[sectionKey][index1][index2][index3].text = text;
    },
  },
});

export const {
  updateCV,
  updateSkill,
  addSection,
  updateReference,
  updateSection,
  updateAchievement,
  removeAchievement,
  updateSectionText,
  selectResume,
} = resumeSlice.actions;
export default resumeSlice.reducer;
