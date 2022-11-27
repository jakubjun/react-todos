import React from 'react';
import { render } from '@testing-library/react';
import useRouter from '../useRouter';

const Layout = React.createElement('div');

const routes = {
  // path, [layout, component]
  '/': [Layout, Layout],
  // '/todo/:id': [BaseLayout, TodoListPage],
  // [notFoundPathName]: [BaseLayout, TodoListPage],
};
describe('useRouter', () => {
  const router = useRouter(routes);
  it('should route', () => {
    expect(render(router)).toMatchSnapshot();
  });
});
