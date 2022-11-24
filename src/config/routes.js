import BaseLayout from '../component/layout/baseLayout/BaseLayout';
import TodoListPage from '../component/page/todoListPage/TodoListPage';

export const notFoundPathName = 'notfound';

export const routes = {
  // path, [layout, component]
  '/': [BaseLayout, TodoListPage],
  '/todo/:id': [BaseLayout, TodoListPage],
  [notFoundPathName]: [BaseLayout, TodoListPage],
};
