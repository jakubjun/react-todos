import { useEffect } from 'react';
import dbAddTodo from '../db/addTodo';
import { getTodos } from '../db/getTodos';
import { removeTodo as dbRemoveTodo } from '../db/removeTodo';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import {
  add, initialize, remove, setError, setLoading, setAddLoading,
} from '../store/todoSlice';

export default function useTodos() {
  const dispatch = useAppDispatch();
  const {
    items,
    loading: loadingState,
    addLoading: addLoadingState,
    error: errorState,
  } = useAppSelector((state) => state.todos);
  const { user } = useAppSelector((state) => state.user);

  useEffect(() => {
    if (!user) {
      return;
    }

    if (items !== null) {
      return;
    }

    dispatch(setLoading(true));
    getTodos().then(({ data }) => {
      dispatch(initialize(data));
      dispatch(setError(false));
    }).catch(() => {
      dispatch(setError(false));
    }).finally(() => {
      dispatch(setLoading(false));
    });
  }, [user]);

  const removeTodoWithDispatch = async (todoId: number) => {
    dispatch(setAddLoading(true));
    const { error } = await dbRemoveTodo(todoId);
    dispatch(remove(todoId));
    dispatch(setError(!!error));
    dispatch(setAddLoading(false));
  };

  const addTodoWithDispatch = async (title: string) => {
    dispatch(setAddLoading(true));
    const { data, error } = await dbAddTodo(title, user?.id);
    dispatch(setError(!!error));
    dispatch(add(data?.[0]));
    dispatch(setAddLoading(false));
  };

  return {
    todos: items,
    todosLoading: loadingState,
    todosError: errorState,
    addTodo: addTodoWithDispatch,
    addLoading: addLoadingState,
    removeTodo: removeTodoWithDispatch,
  };
}
