import { getTodos } from '../db/getTodos';
import { getUser } from '../db/getUser';
import {
  addTodoError,
  addTodoRequest, addTodoSuccess, loadTodosError, loadTodosRequest, loadTodosSuccess, removeTodoError, removeTodoRequest, removeTodoSuccess,
} from './todoSlice';
import {
  loadUserError, loadUserRequest, loadUserSuccess, logOutUser, sendEmailError, sendEmailRequest, sendEmailSuccess,
} from './userSlice';
import dbLogOut from '../db/logOut';
import addTodo from '../db/addTodo';
import dbSendLoginEmail from '../db/sendLoginEmail';
import { removeTodo } from '../db/removeTodo';

export function loadTodos() {
  // Interpreted by the thunk middleware:
  return async function (dispatch) {
    // const { posts } = getState();
    // if (posts[userId]) {
    // There is cached data! Don't do anything.
    // return;
    // }

    dispatch(loadTodosRequest());
    const { data, error } = await getTodos();

    if (error) {
      dispatch(loadTodosError());
      return;
    }

    dispatch(loadTodosSuccess(data));
  };
}

export function loadUser() {
  return async function (dispatch) {
    dispatch(loadUserRequest());
    const { data, error } = await getUser();

    if (error) {
      dispatch(loadUserError());
      return;
    }

    dispatch(loadUserSuccess(data.user));
  };
}

export function insertTodo(title: string, userId: string) {
  return async function (dispatch) {
    dispatch(addTodoRequest());
    const { data, error } = await addTodo(title, userId);

    if (error) {
      dispatch(addTodoError());
      return;
    }

    dispatch(addTodoSuccess(data?.[0]));
  };
}

export function deleteTodo(todoId: number) {
  return async function (dispatch) {
    dispatch(removeTodoRequest());

    const { data, error } = await removeTodo(todoId);

    if (error) {
      dispatch(removeTodoError());
      return;
    }

    dispatch(removeTodoSuccess(todoId));
  };
}

export function logOut() {
  return async function (dispatch) {
    await dbLogOut();
    dispatch(logOutUser());
  };
}

export function sendLoginEmail(email: string) {
  return async function (dispatch) {
    dispatch(sendEmailRequest());
    const { error } = await dbSendLoginEmail(email);

    if (error) {
      dispatch(sendEmailError());
      return;
    }

    dispatch(sendEmailSuccess());
  };
}
