import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { add } from '../todoList/todoSlice';
import './todoAdder.less';

const CLASS_NAME = 'todo-adder';
export default function TodoAdder() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  return (
    <form className={CLASS_NAME} onSubmit={(e) => { e.preventDefault(); dispatch(add(title)); setTitle(''); }}>
      <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" />
      <button type="submit">save</button>
    </form>
  );
}
