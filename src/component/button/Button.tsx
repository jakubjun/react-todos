import styled from 'styled-components';

interface ButtonProps {
  children: React.ReactNode
  onClick: () => void
}

const ThemedButton = styled.button`
  color: ${(props) => props.theme.color.primary};
  background-color: ${(props) => props.theme.color.background};
  border: ${(props) => props.theme.color.primary} solid 1px;
  padding: 10px;
  font-size: 14px;
  font-weight: 800;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.color.primary};
    color: ${(props) => props.theme.color.background}

  }
`;

const CLASS_NAME = 'button';
export default function Button({ children, onClick }: ButtonProps) {
  return <ThemedButton onClick={onClick} className={CLASS_NAME}>{children}</ThemedButton>;
}
