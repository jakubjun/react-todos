import useRouter from '../../utils/router/useRouter';
import Router from '../router/Router';
import './app.less';

function App() {
  const [Layout, Page] = useRouter();

  return (
    <div>
      <Router />
    </div>
  );
}

export default App;
