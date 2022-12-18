import { useEffect } from 'react';
import useAuth from '../hooks/useAuth';
import useTodos from '../hooks/useTodos';
import { loadTodos, loadUser } from '../store/actionCreators';
import { useAppDispatch } from '../store/hooks';
import Router from './Router';

function App() {
  const dispatch = useAppDispatch();
  const { user, loading } = useAuth();
  const { todos } = useTodos();

  useEffect(() => {
    if (!user && !loading) {
      dispatch(loadUser());
      return;
    }

    if (todos === null) {
      dispatch(loadTodos());
    }
  }, []);

  return (
    <Router />
  );
}

export default App;
