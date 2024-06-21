import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  searchValue: '',
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchValue: (state, action) => {
      state.searchValue = action.payload.searchValue;
    },
  },
});

export const { setSearchValue } = searchSlice.actions;

export default searchSlice.reducer;
