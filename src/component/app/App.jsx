import useRouter from '../../utils/router/useRouter';
import './app.less';

function App() {
  const [Layout, Page] = useRouter();

  return (
    <div>
      <Layout>
        <Page />
      </Layout>
    </div>
  );
}

export default App;
