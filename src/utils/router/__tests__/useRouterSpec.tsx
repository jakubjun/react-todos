import renderer from 'react-test-renderer';
import React from 'react';
import useRouter from '../useRouter';

const routesConfig = [
  ['/', <div>index layout</div>, <div>index page</div>],

];

const cases = [
  '/',
];

describe('useRouter', () => {
  beforeEach(() => {
    delete window.location;
  });

  test.each(cases)('should route to %s', (route) => {
    window.location = new URL(`http://hello.world${route}`);
    const [Layout, Page] = useRouter(routesConfig);
    const layoutComponent = renderer.create(Layout).toJSON();
    const pageComponent = renderer.create(Page).toJSON();
    expect(layoutComponent).toMatchSnapshot();
    expect(pageComponent).toMatchSnapshot();
  });
});
