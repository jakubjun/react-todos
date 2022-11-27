import BaseLayout from '../component/layout/baseLayout/BaseLayout';
import TodoListPage from '../component/page/todoListPage/TodoListPage';
import TestPage from '../component/page/testPage/TestPage';
import NotFoundPage from '../component/page/notFoundPage/NotFoundPage';

const routes = [
  ['/', BaseLayout, TodoListPage],
  ['/test', BaseLayout, TestPage],
  // [/\/todo\/[a-z0-9]+$/, BaseLayout, TodoPage],
];

export const notFoundRoute = [BaseLayout, NotFoundPage];

export default routes;
