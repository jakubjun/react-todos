import BaseLayout from '../component/layout/baseLayout/BaseLayout';
import IndexPage from '../component/page/index/IndexPage';

export const notFoundPathName = 'notfound';

export const routes = {
  // path, [layout, component]
  '/': [BaseLayout, IndexPage],
  [notFoundPathName]: [BaseLayout, IndexPage],
};
