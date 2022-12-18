import { FC } from 'react';
import BaseLayout from '../component/layout/BaseLayout';
import TodoListPage from '../component/page/TodoListPage';
import NotFoundPage from '../component/page/NotFoundPage';
import AuthPage from '../component/page/AuthPage';
import AboutPage from '../component/page/AboutPage';
import TodoListLayout from '../component/layout/TodoListLayout';
import { Route } from '../utils/router/useRouter';

const routes:Route[] = [
  ['/', TodoListLayout, TodoListPage],
  ['/auth', BaseLayout, AuthPage],
  ['/about', BaseLayout, AboutPage],
];

export const notFoundRoute:[FC, FC] = [BaseLayout, NotFoundPage];

export default routes;
