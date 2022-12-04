import { createSlice } from '@reduxjs/toolkit';
import {Todo} from '../db/getTodos';


const defaultSortOption = {
    id: 'alpha',
    sortFn: (a: Todo, b: Todo) => (a.title || "").localeCompare(b.title || ""),
    label: 'abc',
  }

export const sortOptions = Object.freeze([
  defaultSortOption
]);



interface TodoSliceState {
  items: Todo[],
  loading: boolean,
  selectedOptionId: string,
  reverse: boolean
}

const initialState:TodoSliceState = {
    items: [],
    loading: true,
    selectedOptionId: defaultSortOption.id,
    reverse: false,
}


export const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    initialize: (state, action) => {
      state.items = action.payload;
      state.loading = false;
    },
    remove: (state, action) => {
      state.items = state.items.filter((todo) => todo.id !== action.payload);
    },
    add: (state, action) => {
      state.items.push(action.payload);
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
        (sortOptions.find(
          (sortOption) => sortOption.id === action.payload,
        ) || defaultSortOption).sortFn,
      );
    },

  },
});

// Action creators are generated for each case reducer function
export const {
  initialize, remove, add, selectSortOption,
} = todoSlice.actions;

export default todoSlice.reducer;
