import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  page: 1,
};

const paginationSlice = createSlice({
  name: 'pagination',
  initialState,
  reducers: {
    setPage(state, action: PayloadAction<number>) {
      state.page = action.payload;
    },
  },
});

export const { setPage } = paginationSlice.actions;
export default paginationSlice.reducer;
