import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Router from '../router/Router';
import './app.less';
import { initialize } from '../../store/todosSlice';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos?userId=1').then(
      (response) => response.json(),
    ).then(
      (data) => {
        dispatch(initialize(data));
      },
    );
  }, []);

  return (
    <Router />
  );
}

export default App;
