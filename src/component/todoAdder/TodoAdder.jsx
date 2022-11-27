import './todoAdder.less';

const CLASS_NAME = 'todo-adder';
export default function TodoAdder() {
  return (
    <div className={CLASS_NAME}>
      <input type="text" />
      <button>save</button>
    </div>
  );
}
