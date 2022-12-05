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

const CLASS_NAME = 'input';
export default function Input({ type, onChange }) {
  return <ThemedInput className={CLASS_NAME} type={type} onChange={onChange} />;
}
