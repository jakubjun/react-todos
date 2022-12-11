import { useEffect } from 'react';
import { getTodos } from '../db/getTodos';
import useAuth from '../hooks/useAuth';
import useTodos from '../hooks/useTodos';
import { loadTodos, loadUser } from '../store/actionCreators';
import { useAppDispatch } from '../store/hooks';
import Router from './Router';

function App() {
  const dispatch = useAppDispatch();
  const { user, userLoading } = useAuth();
  const { todos } = useTodos();

  useEffect(() => {
    if (!user && !userLoading) {
      dispatch(loadUser());
      return;
    }

    if (todos === null) {
      dispatch(loadTodos());
    }
  }, [user]);

  return (
    <Router />
  );
}

export default App;
