import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../component/todoList/todoSlice';
import sorterReducer from '../component/sorter/sorterSlice';

export default configureStore({
  reducer: {
    todos: todoReducer,
    sorter: sorterReducer,
  },
});
