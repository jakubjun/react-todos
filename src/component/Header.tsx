import styled from 'styled-components';
import useAuth from '../hooks/useAuth';
import RouterLink from './RouterLink';
import ThemedAnchor from './themed/ThemedAnchor';

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

`;

export default function Header() {
  const { user } = useAuth();
  return (
    <ThemedDiv>
      <RouterLink href="/">list 📝</RouterLink>
      <RouterLink href="/about">about ❔</RouterLink>
      <ThemedAnchor target="_blank" href="https://github.com/jakubjun/react-todos" rel="noreferrer">github 🗃️</ThemedAnchor>
      <RouterLink href="/auth">
        auth
        {' '}
        {user ? '🔓' : '🔒'}
      </RouterLink>
    </ThemedDiv>
  );
}
