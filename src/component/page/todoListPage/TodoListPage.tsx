import Sorter from '../../sorter/Sorter';
import TodoList from '../../todoList/TodoList';
import TodoAdder from '../../todoAdder/TodoAdder';

export default function TodoListPage() {
  return (
    <div>
      <TodoList />
      <TodoAdder />
    </div>
  );
}
