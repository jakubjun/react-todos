import useLocation from './useLocation';
import { routes, notFoundPathName } from '../../config/routes';

export default function useRouter() {
  const path = useLocation();

  return routes[path] || routes[notFoundPathName];
}
