import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  pizzasData: [],
  isLoadingPizza: true,
  selectId: 0,
  categoriesId: 0,
};

export const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    setPizzasData: (state, action) => {
      state.pizzasData = [...action.payload];
    },
    getCategoriesIndex: (state, action) => {
      debugger;
      state.selectId = action.payload.selectId;
    },
    getSortCategories: (state, action) => {
      debugger;
      state.categoriesId = action.payload.categoriesId;
    },
    setIsLoadingPizza: (state, action) => {
      state.isLoadingPizza = action.payload;
    },
  },
});

export const { setPizzasData, getCategoriesIndex, getSortCategories, setIsLoadingPizza } =
  homeSlice.actions;

export default homeSlice.reducer;
