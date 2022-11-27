import { useEffect, useState } from 'react';

export default function useTodos() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos?userId=1').then((response) => response.json()).then((data) => {
      setTodos(data);
    });
  }, []);

  return todos;
}
