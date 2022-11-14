import { combineReducers } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

import BuilderReducer from '@/redux/builder-slice';

const reducers = combineReducers({
  builder: BuilderReducer,
});

const persistConfig = {
  key: 'root',
  storage,
  //   blacklist: ['UI'],
};

const RootReducer = persistReducer(persistConfig, reducers);

export type RootState = ReturnType<typeof RootReducer>;

export default RootReducer;
