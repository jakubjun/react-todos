import { createSlice } from '@reduxjs/toolkit';

export const sortOptions = [
  {
    id: 'alpha',
    sortFn: (a, b) => a.title.localeCompare(b.title),
    label: 'abc',
  },
  {
    id: 'null',
    sortFn: () => 1,
    label: 'null',
  },

];

export const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    items: [],
    loading: true,
    selectedOptionId: sortOptions[0].id,
    reverse: false,
  },
  reducers: {
    initialize: (state, action) => {
      state.items = action.payload;
      state.loading = false;
    },
    check: (state, action) => {
      state.items = state.items.filter((todo) => todo.id !== action.payload);
    },
    remove: (state, action) => {
      state.items = state.items.filter((todo) => todo.id !== action.payload);
    },
    add: (state, action) => {
      let id = null;

      const isIdUsed = (id) => state.items.find((todo) => todo.id === id);

      do {
        id = Math.floor(Math.random() * 1000);
      } while (isIdUsed(id));

      state.items.push({ title: action.payload, id });
    },
    selectSortOption: (state, action) => {
      if ((state.selectedOptionId === action.payload) && !state.reverse) {
        state.reverse = true;
        state.items = state.items.reverse();
        return;
      }

      state.reverse = false;
      state.selectedOptionId = action.payload;
      state.items = state.items.sort(
        sortOptions.find(
          (sortOption) => sortOption.id === action.payload,
        ).sortFn,
      );
    },

  },
});

// Action creators are generated for each case reducer function
export const {
  initialize, check, remove, add, selectSortOption,
} = todoSlice.actions;

export default todoSlice.reducer;
