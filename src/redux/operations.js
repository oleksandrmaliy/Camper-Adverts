import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchAdverts } from '../components/API/adverts.js';

export const fetchAdvertsPage = createAsyncThunk(
  'adverts/fetchAdvertsPage',
  async (pageq, thunkAPI) => {
    try {
      const response = await fetchAdverts(pageq);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

// import { createAsyncThunk } from '@reduxjs/toolkit';
// import { fetchAdverts } from '../components/API/adverts.js';

// export const fetchAdvertsPage = createAsyncThunk(
//   'adverts/fetchAdvertsPage',
//   async (page, thunkAPI) => {
//     try {
//       const response = await fetchAdverts(page);

//       // Предполагаем, что response.data содержит массив объявлений
//       // и мы добавляем информацию о текущей странице
//       return { adverts: response.data, page };
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );

// import { createAsyncThunk } from '@reduxjs/toolkit';
// import { fetchAdverts } from '../components/API/adverts.js';

// export const fetchAdvertsPage = createAsyncThunk(
//   'adverts/fetchAdvertsPage',
//   async (page, thunkAPI) => {
//     const { loadedPages } = thunkAPI.getState().adverts;
//     if (loadedPages.has(page)) {
//       return thunkAPI.rejectWithValue('Page already loaded');
//     }

//     try {
//       const response = await fetchAdverts(page);
//       return { adverts: response.data, page };
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );
