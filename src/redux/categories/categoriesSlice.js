import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
  status: 'Under construction',
};

export const categoriesSlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    checkStatus: (state) => state.status,
  },
});

export const { checkStatus } = categoriesSlice.actions;
export default categoriesSlice.reducer;
