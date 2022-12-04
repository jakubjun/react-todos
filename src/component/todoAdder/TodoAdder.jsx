import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../../store/todoSlice';
import './todoAdder.less';
import supaBase from '../../supaBase.ts';
import Loader from '../../loader/Loader';

const CLASS_NAME = 'todo-adder';
export default function TodoAdder() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [loading, setLoading] = useState(false);
  const userState = useSelector((state) => state.user);

  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    const { data, error } = await supaBase
      .from('todos')
      .insert([
        { user_id: userState.user.id, title },
      ]).select('*');

    if (!error) {
      dispatch(add(data[0]));
    }
    setTitle('');
    setLoading(false);
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <form className={CLASS_NAME} onSubmit={onSubmit}>
      <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" />
      <button type="submit">add</button>
    </form>
  );
}
