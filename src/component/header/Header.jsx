import Link from '../link/Link';
import './header.less';

const CLASS_NAME = 'header';
export default function Header() {
  return (
    <div className={CLASS_NAME}>
      <Link href="hello">react-todo</Link>
      <Link href="test">test</Link>
    </div>
  );
}
