import { createSlice } from '@reduxjs/toolkit';

export const sortOptions = [
  {
    id: 'alpha',
    sortFn: (a, b) => a.firstname.localeCompare(b.firstname),
    label: 'abc',
  },
  {
    id: 'null',
    sortFn: (a, b) => 1,
    label: 'null',
  },

];
export const sorterSlice = createSlice({
  name: 'sorter',
  initialState: {
    selectedOptionId: sortOptions[0].id, reverse: false,
  },
  reducers: {
    selectSortOption: (state, action) => {
      if ((state.selectedOptionId === action.payload) && !state.reverse) {
        state.reverse = true;
        return;
      }

      state.reverse = false;
      state.selectedOptionId = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  selectSortOption,
} = sorterSlice.actions;

export default sorterSlice.reducer;
