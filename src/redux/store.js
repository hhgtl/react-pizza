import { configureStore } from '@reduxjs/toolkit';
import homeSlice from './slice/homeSlice';
import searchSlice from './slice/searchSlice';

export default configureStore({
  reducer: {
    home: homeSlice,
    search: searchSlice,
  },
});
