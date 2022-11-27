import { useDispatch } from 'react-redux';
import { check, remove } from '../../store/todosSlice';
import './todoItem.less';

const CLASS_NAME = 'todo-item';

export default function TodoItem(props) {
  const { todo } = props;

  const dispatch = useDispatch();
  return (
    <div className={CLASS_NAME}>
      <div className={`${CLASS_NAME}_title`}>{todo.title}</div>
      <div className={`${CLASS_NAME}_actions`}>
        <button onClick={() => dispatch(check(todo.id))} className={`${CLASS_NAME}_actions_action`}>✔</button>
        <button onClick={() => dispatch(remove(todo.id))} className={`${CLASS_NAME}_actions_action`}>x</button>
      </div>
    </div>
  );
}
