import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Loader from '../../loader/Loader';
import { remove } from '../../store/todoSlice';
import supaBase from '../../supaBase.ts';
import './todoItem.less';

const CLASS_NAME = 'todo-item';

export default function TodoItem(props) {
  const { todo } = props;

  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);

  const check = async () => {
    setLoading(true);
    const { data, error } = await supaBase
      .from('todos')
      .delete()
      .eq('id', todo.id);

    if (!error) {
      dispatch(remove(todo.id));
    }
    setLoading(false);
  };

  return (
    <div className={CLASS_NAME}>
      <div className={`${CLASS_NAME}_title`}>{loading ? <Loader /> : todo.title}</div>
      <div className={`${CLASS_NAME}_actions`}>
        <button onClick={check} className={`${CLASS_NAME}_actions_action`}>✔</button>
      </div>
    </div>
  );
}
