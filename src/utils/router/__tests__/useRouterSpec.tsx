import renderer from 'react-test-renderer';
import React from 'react';
import useRouter, { NotFoundRoute, Route } from '../useRouter';

const routesConfig:Route[] = [
  ['/', () => <div>index layout</div>, () => <div>index page</div>],

];

const notFoundRoute:NotFoundRoute = [() => <div>index layout</div>, () => <div>index page</div>];

const cases = [
  '/',
];

describe('useRouter', () => {
  beforeEach(() => {
    // @ts-ignore
    delete window.location;
  });

  test.each(cases)('should route to %s', (route) => {
    window.location = new URL(`http://hello.world${route}`) as any;
    const [Layout, Page] = useRouter(routesConfig, notFoundRoute);
    const layoutComponent = renderer.create(<Layout />).toJSON();
    const pageComponent = renderer.create(<Page />).toJSON();
    expect(layoutComponent).toMatchSnapshot();
    expect(pageComponent).toMatchSnapshot();
  });
});
