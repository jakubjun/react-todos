import { FC } from 'react';
import useLocation from './useLocation';

export type Route = [string, FC<any>, FC<any>];

export type NotFoundRoute = [FC<any>, FC<any>];

export default function useRouter(
  routes:Route[],
  notFoundRoute: [FC<any>, FC<any>],
): NotFoundRoute {
  const path = useLocation();

  const matchedRoute = routes.find(([pattern]) => {
    if (typeof pattern === 'string') {
      return pattern === path;
    }

    // TODO add support for regex route patterns
    // if (pattern instanceof RegExp) {
    //   return pattern.test(path);
    // }

    return false;
  });

  if (!matchedRoute) {
    return notFoundRoute;
  }

  return [matchedRoute[1], matchedRoute[2]];
}
