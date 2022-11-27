import useTodos from '../../utils/todos/useTodos';
import TodoItem from '../todoItem/TodoItem';

export default function TodoList() {
  const todos = useTodos();

  return <div>{todos.map((todo) => <TodoItem todo={todo} />)}</div>;
}
