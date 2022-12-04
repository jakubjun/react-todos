import BaseLayout from '../component/layout/baseLayout/BaseLayout';
import TodoListPage from '../component/page/todoListPage/TodoListPage';
import NotFoundPage from '../component/page/notFoundPage/NotFoundPage';
import AuthPage from '../component/page/authPage/AuthPage';

const routes = [
  ['/', BaseLayout, TodoListPage],
  ['/auth', BaseLayout, AuthPage],
];

export const notFoundRoute = [BaseLayout, NotFoundPage];

export default routes;
