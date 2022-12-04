import BaseLayout from '../component/layout/baseLayout/BaseLayout';
import TodoListPage from '../component/page/todoListPage/TodoListPage';
import TestPage from '../component/page/testPage/TestPage';
import NotFoundPage from '../component/page/notFoundPage/NotFoundPage';
import AuthPage from '../component/page/authPage/AuthPage';

const routes = [
  ['/', BaseLayout, TodoListPage],
  ['/test', BaseLayout, TestPage],
  ['/auth', BaseLayout, AuthPage],
];

export const notFoundRoute = [BaseLayout, NotFoundPage];

export default routes;
