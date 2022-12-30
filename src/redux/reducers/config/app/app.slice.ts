import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  dark: false
};

export const appConfigSlice = createSlice({
  name: 'appConfig',
  initialState,
  reducers: {
    SET_THEME: state => ({
      ...state,
      dark: !state.dark
    })
  }
});

export const { SET_THEME } = appConfigSlice.actions;
