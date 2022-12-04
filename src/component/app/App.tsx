import { useEffect } from 'react';
import { initialize } from '../../store/todoSlice';
import Router from '../router/Router';
import './app.less';
import supabase from '../../db/supabase';
import { setUser } from '../../store/userSlice';
import { stop } from '../../store/loadingSlice';
import {useAppDispatch} from '../../store/hooks';
import {getTodos} from '../../db/getTodos';
import {getUser} from '../../db/getUser';

function App() {
  const dispatch = useAppDispatch();

  const fetchState = async () => {
    const { data: { user } } = await getUser()

    if (!user) {
      dispatch(stop());
      return;
    }

    const { data: todos, error } = await getTodos()
    dispatch(setUser(user));
    dispatch(initialize(todos));
    dispatch(stop());
  };

  useEffect(() => {
    fetchState();
  }, []);

  return (
    <Router />
  );
}

export default App;
