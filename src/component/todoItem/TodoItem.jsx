import './todoItem.less';

const CLASS_NAME = 'todo-item';

export default function TodoItem(props) {
  const { todo } = props;
  return <div className={CLASS_NAME}>{todo.title}</div>;
}
