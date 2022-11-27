import useLocation from './useLocation';
import { routes as configRoutes, notFoundPathName } from '../../config/routes';

export default function useRouter(routes = configRoutes) {
  const path = useLocation();

  return routes[path] || routes[notFoundPathName];
}
