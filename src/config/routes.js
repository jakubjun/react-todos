import notFoundPathName from './constants';
import BaseLayout from '../component/layout/baseLayout/BaseLayout';
import TodoListPage from '../component/page/todoListPage/TodoListPage';
import NotFoundPage from '../component/page/notFoundPage/NotFoundPage';
import TestPage from '../component/page/testPage/TestPage';

const routes = {
  // path, [layout, component]
  '/': [BaseLayout, TodoListPage],
  '/test': [BaseLayout, TestPage],
  '/todo/:id': [BaseLayout, TodoListPage],
  [notFoundPathName]: [BaseLayout, NotFoundPage],
};

export default routes;
