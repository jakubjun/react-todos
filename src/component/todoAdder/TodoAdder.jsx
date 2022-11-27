import './todoAdder.less';

const CLASS_NAME = 'todo-adder';
export default function TodoAdder() {
  return (
    <div className={CLASS_NAME}>
      <div>
        <input type="text" />
      </div>
      <button>hello</button>
    </div>
  );
}
