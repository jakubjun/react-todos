import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './todoSlice';
import userReducer from './userSlice';
import loadingReducer from './loadingSlice';

export default configureStore({
  reducer: {
    todos: todoReducer,
    user: userReducer,
    loading: loadingReducer,
  },
});
