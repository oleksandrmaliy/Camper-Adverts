import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchAdverts } from '../components/API/adverts.js';

export const fetchAdvertsPage = createAsyncThunk(
  'adverts/fetchAdvertsPage',
  async (page, thunkAPI) => {
    try {
      const response = await fetchAdverts(page);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
