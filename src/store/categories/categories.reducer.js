import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  categoriesArray: [],
  isLoading: false,
  error: null,
};

export const categoriesSlice = createSlice({
  name: "categories",
  initialState: INITIAL_STATE,
  reducers: {
    fetchCategoriesStart: (state, action) => {
      state.isLoading = action.payload;
    },
    fetchCategoriesFailed: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    fetchCategoriesSuccess: (state, action) => {
      state.isLoading = false;
      state.categoriesArray = action.payload;
    },
  },
});

export const {
  fetchCategoriesStart,
  fetchCategoriesFailed,
  fetchCategoriesSuccess,
} = categoriesSlice.actions;

export const categoriesReducer = categoriesSlice.reducer;
