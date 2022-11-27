import { createSlice } from '@reduxjs/toolkit';

export const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    items: [{ title: 'test' }], loading: true,
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

      const isIdUsed = (id) => !state.items.find((todo) => todo.id === id);

      do {
        id = Math.floor(Math.random() * 1000);
      } while (isIdUsed(id));

      state.items.push({ title: action.payload, id });
    },

  },
});

// Action creators are generated for each case reducer function
export const {
  initialize, check, remove, add,
} = todoSlice.actions;

export default todoSlice.reducer;
