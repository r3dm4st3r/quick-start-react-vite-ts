import { combineReducers } from '@reduxjs/toolkit';
import { appConfigSlice } from './app/app.slice';

export const configReducer = combineReducers({
  app: appConfigSlice.reducer
});
