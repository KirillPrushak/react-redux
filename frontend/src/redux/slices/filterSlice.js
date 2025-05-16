import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  title: '',
  author: '',
  onlyFaforite: false,
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setTitleFilter: (state, action) => {
      //Просто присваиваем новое значение
      state.title = action.payload;
      //   return { ...state, title: action.payload };
    },
    setAuthorFilter: (state, action) => {
      //Просто присваиваем новое значение
      state.author = action.payload;
      //   return { ...state, title: action.payload };
    },
    setOnlyFavoriteFilter: (state) => {
      state.onlyFaforite = !state.onlyFaforite;
    },
    resetFilters: () => {
      return initialState;
    },
  },
});

export const {
  setTitleFilter,
  setAuthorFilter,
  setOnlyFavoriteFilter,
  resetFilters,
} = filterSlice.actions;

export const selectTitleFilter = (state) => state.filter.title;
export const selectAuthorFilter = (state) => state.filter.author;
export const selectOnlyFavoriteFilter = (state) => state.filter.onlyFaforite;

export default filterSlice.reducer;
