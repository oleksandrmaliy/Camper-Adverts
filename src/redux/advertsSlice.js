import { createSlice } from '@reduxjs/toolkit';

const advertsSlice = createSlice({
  name: 'adverts',
  initialState: [],
  reducers: {
    addAdverts: {
      reducer(state, action) {
        state.push(...action.payload);
      },
      prepare(adverts) {
        return {
          payload: adverts,
        };
      },
    },
  },
});

export const { addAdverts } = advertsSlice.actions;
export const advertsReducer = advertsSlice.reducer;
