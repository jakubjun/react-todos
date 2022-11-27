import Link from '../link/Link';
import './header.less';

const CLASS_NAME = 'header';
export default function Header() {
  return (
    <div className={CLASS_NAME}>
      <Link href="/">react-todo ⚛️</Link>
      <Link href="/">about</Link>
      <Link href="/">github</Link>
    </div>
  );
}
