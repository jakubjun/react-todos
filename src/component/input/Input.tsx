import './input.less';

const CLASS_NAME = 'input';
export default function Input({ type, onChange }) {
  return <input className={CLASS_NAME} type={type} onChange={onChange} />;
}
