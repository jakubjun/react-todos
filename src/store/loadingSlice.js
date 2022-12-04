import { createSlice } from '@reduxjs/toolkit';

export const loadingSlice = createSlice({
  name: 'loading',
  initialState: {
    loading: true,
  },
  reducers: {
    start: (state) => {
      state.loading = true;
    },
    stop: (state) => {
      state.loading = false;
    },

  },
});

// Action creators are generated for each case reducer function
export const {
  start, stop,
} = loadingSlice.actions;

export default loadingSlice.reducer;
