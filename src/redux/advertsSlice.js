import { createSlice } from '@reduxjs/toolkit';
import { fetchAdvertsPage } from './operations';

const advertsSlice = createSlice({
  name: 'adverts',
  initialState: {
    adverts: [],
    page: 1,
    isLoading: false,
    error: null,
    // loadedPages: new Set(),
  },
  // reducers: {
  //   incrementPage(state) {
  //     state.page += 1;
  //   },
  // },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAdvertsPage.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchAdvertsPage.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        // const { adverts, page } = action.payload;
        state.adverts = [...state.adverts, ...action.payload];
        state.page += 1;
        // state.loadedPages.add(page);
        // state.adverts = [...state.adverts, ...action.payload];
        // state.loadedPages.add(action.payload.page);
      })
      .addCase(fetchAdvertsPage.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const advertsReducer = advertsSlice.reducer;
export const { incrementPage } = advertsSlice.actions;
