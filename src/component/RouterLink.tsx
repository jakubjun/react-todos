import styled from 'styled-components';

const ThemedAnchor = styled.a`
  color: ${(props) => props.theme.color.primary};
  font-weight: 800;
`;

export default function Link(props: React.AnchorHTMLAttributes<HTMLElement>) {
  const { href, children } = props;

  const onClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    window.history.pushState({}, '', href);
  };

  return <ThemedAnchor href={href} onClick={onClick}>{children}</ThemedAnchor>;
}
