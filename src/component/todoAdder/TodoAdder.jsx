import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { add } from '../todoList/todoSlice';
import './todoAdder.less';

const CLASS_NAME = 'todo-adder';
export default function TodoAdder() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  return (
    <div className={CLASS_NAME}>
      <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" />
      <button onClick={() => { dispatch(add(title)); setTitle(''); }}>save</button>
    </div>
  );
}
