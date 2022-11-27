import { useEffect, useState } from 'react';
import useRouter from '../../utils/router/useRouter';

export default function Router() {
  const [Layout, Page] = useRouter();

  const [currentUrl, setCurrentUrl] = useState(window.location.pathname.replace('/react-todos', ''));

  // https://stackoverflow.com/a/64927639
  useEffect(() => {
    // back button
    window.addEventListener('popstate', setCurrentUrl);
    // client navigation
    window.history.pushState = new Proxy(window.history.pushState, {
      apply: (target, thisArg, argArray) => {
        setCurrentUrl(argArray[2]);
        target.apply(thisArg, argArray);
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
