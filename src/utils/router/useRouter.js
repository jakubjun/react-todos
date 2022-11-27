import useLocation from './useLocation';
import configRoutes from '../../config/routes';

export const notFoundPathName = 'notfound';

export default function useRouter(routes = configRoutes) {
  const path = useLocation();

  return routes[path] || routes[notFoundPathName];
}
