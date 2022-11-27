import renderer from 'react-test-renderer';
import useRouter from '../useRouter';
import { notFoundPathName } from '../../../config/routes';

const routes = {
  // path, [layout, component]
  '/': ['index_layout', 'index_page'],
  // '/todo/:id': [BaseLayout, TodoListPage],
  [notFoundPathName]: ['not_found_layout', 'not_found_page'],
};
describe('useRouter', () => {
  delete window.location;
  window.location = 'http://hello.world/';
  const [layout, page] = useRouter(routes);
  const component = renderer.create(layout).toJSON();

  it('should route', () => {
    expect(component).toMatchSnapshot();
  });
});
