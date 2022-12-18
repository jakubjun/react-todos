import { useEffect, useState } from 'react';
import routes, { notFoundRoute } from '../config/routes';
import useRouter from '../utils/router/useRouter';

export default function Router() {
  const [Layout, Page] = useRouter(routes, notFoundRoute);

  // eslint-disable-next-line
  const [currentUrl, setCurrentUrl] = useState<string>(window.location.href);

  // https://stackoverflow.com/a/64927639
  useEffect(() => {
    // back button
    window.addEventListener('popstate', () => { setCurrentUrl(window.location.href); });
    // client navigation
    window.history.pushState = new Proxy(window.history.pushState, {
      apply: (target, thisArg, argArray) => {
        setCurrentUrl(argArray[2]);
        target.apply(thisArg, argArray as any);
      }
      ,
    });
  }, []);

  return (
    <Layout>
      <Page />
    </Layout>
  );
}
