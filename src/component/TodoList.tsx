import useTodos from '../hooks/useTodos';
import TodoItem from './TodoItem';

export default function TodoList() {
  const { todos } = useTodos();

  return (
    <>
      {todos.map(
        (todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ),
      )}
    </>
  );
}
