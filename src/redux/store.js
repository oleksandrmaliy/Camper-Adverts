import { configureStore } from '@reduxjs/toolkit';
import { advertsReducer } from './advertsSlice.js';

export const store = configureStore({
  reducer: {
    adverts: advertsReducer,
  },
});
