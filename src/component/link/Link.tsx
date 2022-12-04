import {ReactNode} from 'react';

interface LinkProps {
  href: string,
  children: ReactNode
}

export default function Link(props: LinkProps) {
  const { href, children } = props;

  function onClick(e: React.MouseEvent<HTMLElement>) {
    e.preventDefault();
    window.history.pushState({}, '', href);
  }

  return <a href={href} onClick={onClick}>{children}</a>;
}
