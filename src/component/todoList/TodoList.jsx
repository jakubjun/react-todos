import { useSelector } from 'react-redux';
import TodoItem from '../todoItem/TodoItem';

export default function TodoList() {
  const todos = useSelector((state) => state.todos.items);

  return (
    <div>
      {todos.map(
        (todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ),
      )}
    </div>
  );
}
