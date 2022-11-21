import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import type {
  BuilderStateType,
  builderKeyType,
  addBuilderKeyType,
  achievementType,
} from '@/types/redux-types';
import { cvsData } from '@/lib/seeder-1';

const initialState: BuilderStateType = {
  cvs: cvsData.cv1,
};

const CVSlice = createSlice({
  name: 'resume',
  initialState,
  reducers: {
    updateCV(state, action: PayloadAction<BuilderStateType['cvs']>) {
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
      const { index1, index2,index3, text ,sectionKey} = action.payload;
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
} = CVSlice.actions;
export default CVSlice.reducer;
