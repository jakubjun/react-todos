import { createSlice } from '@reduxjs/toolkit';
import { Todo } from '../db/getTodos';

const defaultSortOption = {
  id: 'alpha',
  sortFn: (a: Todo, b: Todo) => (a.title || '').localeCompare(b.title || ''),
  label: 'abc',
};

export const sortOptions = Object.freeze([
  defaultSortOption,
]);

interface TodoSliceState {
  items: Todo[] | null,
  loading: boolean,
  addLoading: boolean,
  error: boolean,
  selectedOptionId: string,
  reverse: boolean
}

const initialState:TodoSliceState = {
  items: null,
  loading: false,
  addLoading: false,
  error: false,
  selectedOptionId: defaultSortOption.id,
  reverse: false,
};

export const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    loadTodosSuccess: (state, action) => {
      state.loading = false;
      state.error = false;
      state.items = action.payload;
    },
    loadTodosError: (state) => {
      state.loading = false;
      state.error = true;
    },
    loadTodosRequest: (state) => {
      state.loading = true;
    },
    addTodoRequest: (state) => {
      state.addLoading = true;
    },
    addTodoError: (state) => {
      state.addLoading = false;
      state.error = true;
    },
    addTodoSuccess: (state, action) => {
      state.addLoading = false;
      state.error = false;
      state.items.push(action.payload);
    },
    removeTodoRequest: (state) => {
      state.addLoading = true;
    },
    removeTodoSuccess: (state, action) => {
      state.addLoading = false;
      state.items = state.items.filter((todo) => todo.id !== action.payload);
    },
    removeTodoError: (state) => {
      state.addLoading = false;
      state.error = true;
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
  selectSortOption, loadTodosRequest, addTodoSuccess, addTodoError,
  removeTodoError, addTodoRequest, removeTodoRequest, removeTodoSuccess,
  loadTodosError, loadTodosSuccess,
} = todoSlice.actions;

export default todoSlice.reducer;
