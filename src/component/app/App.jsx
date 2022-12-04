import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { initialize } from '../../store/todoSlice';
import Router from '../router/Router';
import './app.less';
import supaBase from '../../supaBase.ts';
import { setUser } from '../../store/userSlice';
import { stop } from '../../store/loadingSlice';

function App() {
  const dispatch = useDispatch();

  const fetchState = async () => {
    const { data: { user } } = await supaBase.auth.getUser();
    const { data: todos, error } = await supaBase
      .from('todos')
      .select('*');
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
