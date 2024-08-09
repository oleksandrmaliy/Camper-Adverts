import { createSlice } from '@reduxjs/toolkit';
import { fetchAdvertsPage } from './operations';

const advertsSlice = createSlice({
  name: 'adverts',
  initialState: {
    adverts: [],
    page: 1,
    isLoading: false,
    error: null,
  },
  reducers: {
    incrementPage(state) {
      state.page += 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAdvertsPage.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchAdvertsPage.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.adverts = [...state.adverts, ...action.payload];
      })
      .addCase(fetchAdvertsPage.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const advertsReducer = advertsSlice.reducer;
export const { incrementPage } = advertsSlice.actions;
