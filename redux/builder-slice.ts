/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { BuilderStateType } from '@/types/redux-types';

const initialState: BuilderStateType = {
  styles: {},
};

const UISlice = createSlice({
  name: 'UI',
  initialState,
  reducers: {
    updateStyles(state, action: PayloadAction<BuilderStateType['styles']>) {
      state.styles = action.payload;
    },
  },
});

export const { updateStyles } = UISlice.actions;
export default UISlice.reducer;
