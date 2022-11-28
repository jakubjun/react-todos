import Link from '../link/Link';
import './header.less';

const CLASS_NAME = 'header';
export default function Header() {
  return (
    <div className={CLASS_NAME}>
      <Link href="/">react-todo ⚛️</Link>
      <Link href="/about">about</Link>
      <a target="_blank" href="https://github.com/jakubjun/react-todos" rel="noreferrer">github</a>
    </div>
  );
}
