import { combineReducers } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

import resumeReducer from '@/redux/resume-slice';

const reducers = combineReducers({
  resume: resumeReducer,
});

const persistConfig = {
  key: 'root',
  storage,
};

const RootReducer = persistReducer(persistConfig, reducers);

export type RootState = ReturnType<typeof RootReducer>;

export default RootReducer;
