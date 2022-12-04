import { useState } from 'react';
import { add } from '../../store/todoSlice';
import './todoAdder.less';
import supabase from '../../db/supabase';
import Loader from '../../loader/Loader';
import {useAppDispatch, useAppSelector} from '../../store/hooks';

const CLASS_NAME = 'todo-adder';
export default function TodoAdder() {
  const dispatch = useAppDispatch();
  const [title, setTitle] = useState('');
  const [loading, setLoading] = useState(false);
  const user = useAppSelector((state) => state.user.user);

  const onSubmit = async (event: React.FormEvent<HTMLElement>) => {
    event.preventDefault();

    if (!user) {
      return;
    }
    setLoading(true);
    const { data, error } = await supabase
      .from('todos')
      .insert([
        { user_id: user.id, title },
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
