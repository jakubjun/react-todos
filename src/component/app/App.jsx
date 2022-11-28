import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { initialize } from '../todoList/todoSlice';
import Router from '../router/Router';
import './app.less';

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
