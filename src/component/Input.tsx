import styled from 'styled-components';

const ThemedInput = styled.input`
  background-color: ${(props) => props.theme.color.background};
  border: 1px solid ${(props) => props.theme.color.primary};
  color: ${(props) => props.theme.color.primary};
  padding: 5px;
  font-size: 16px;

  &:focus, &:hover {
    outline: none;
    background-color: ${(props) => props.theme.color.primary};
    color: ${(props) => props.theme.color.background}
  }
`;

export default function Input(props: React.InputHTMLAttributes<HTMLElement>) {
  return <ThemedInput {...props} />;
}
