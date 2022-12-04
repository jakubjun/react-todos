import useLocation from './useLocation';
import configRoutes, { notFoundRoute as configNotFoundRoute } from '../../config/routes';

export default function useRouter(routes = configRoutes, notFoundRoute = configNotFoundRoute) {
  const path = useLocation();

  const matchedRoute = routes.find(([pattern]) => {
    if (typeof pattern === 'string') {
      return pattern === path;
    }

    if (pattern instanceof RegExp) {
      return pattern.test(path);
    }

    return false;
  });

  if (!matchedRoute) {
    return notFoundRoute;
  }

  return [matchedRoute[1], matchedRoute[2]];
}
