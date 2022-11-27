import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './todosSlice';

export default configureStore({
  reducer: {
    todos: todoReducer,
  },
});
