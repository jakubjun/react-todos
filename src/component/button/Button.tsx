import './button.less';

const CLASS_NAME = 'button';
export default function Button({ children, onClick }) {
  return <button onClick={onClick} className={CLASS_NAME}>{children}</button>;
}
