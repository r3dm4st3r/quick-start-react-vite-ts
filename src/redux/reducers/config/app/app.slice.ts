import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../../rootReducer';

const initialState = {
  dark: false
};

export const appConfigSlice = createSlice({
  name: 'appConfig',
  initialState,
  reducers: {
    SET_THEME: (state, action: PayloadAction<boolean>) => ({
      ...state,
      dark: action.payload
    })
  }
});

export const { SET_THEME } = appConfigSlice.actions;

export const DARK_MODE = (state: RootState) => state.config.app.dark;
