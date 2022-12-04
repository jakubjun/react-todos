import {useAppSelector} from '../../store/hooks';
import TodoItem from '../todoItem/TodoItem';

export default function TodoList() {
  const todos = useAppSelector((state) => state.todos.items);

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
