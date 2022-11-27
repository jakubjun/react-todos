import Sorter from '../../sorter/Sorter';
import TodoList from '../../todoList/TodoList.jsx';
import TodoAdder from '../../todoAdder/TodoAdder.jsx';

export default function TodoListPage() {
  return (
    <div>
      <TodoList />
      <TodoAdder />
    </div>
  );
}
