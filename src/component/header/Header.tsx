import styled from 'styled-components';
import Link from '../link/Link';

const ThemedDiv = styled.div`
  color: ${(props) => props.theme.color.primary};
  margin-bottom: 14px;
  font-size: 16px;
  font-weight: 800;
  display: flex;
  justify-content: center;
  gap: 10px;
  padding-left: 20px;
  margin-bottom: -3px;

  a {
    color: ${(props) => props.theme.color.primary};
  }
`;

export default function Header() {
  return (
    <ThemedDiv>
      <Link href="/">react-todo ⚛️</Link>
      <Link href="/about">about</Link>
      <a target="_blank" href="https://github.com/jakubjun/react-todos" rel="noreferrer">github</a>
      <Link href="/auth">auth</Link>
    </ThemedDiv>
  );
}
