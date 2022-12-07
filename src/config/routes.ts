import BaseLayout from '../component/layout/BaseLayout';
import TodoListPage from '../component/page/TodoListPage';
import NotFoundPage from '../component/page/NotFoundPage';
import AuthPage from '../component/page/AuthPage';
import AboutPage from '../component/page/AboutPage';
import TodoListLayout from '../component/layout/TodoListLayout';

const routes = [
  ['/', TodoListLayout, TodoListPage],
  ['/auth', BaseLayout, AuthPage],
  ['/about', BaseLayout, AboutPage],
];

export const notFoundRoute = [BaseLayout, NotFoundPage];

export default routes;
