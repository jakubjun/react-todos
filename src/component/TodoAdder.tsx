import { useState } from 'react';
import styled from 'styled-components';
import useTodos from '../hooks/useTodos';
import Loader from './Loader';

const ThemedForm = styled.form`
  display: flex;
  min-height: 30px;
  border-top: 1px solid ${(props) => props.theme.color.primary};

  @media only screen and (max-width: 500px) {
    border-bottom: 1px solid ${(props) => props.theme.color.primary};
  }

`;

const ThemedInput = styled.input`
    background-color: ${(props) => props.theme.color.background};
    border: 0;
    padding: 0;
    margin: 0;
    color: ${(props) => props.theme.color.primary};
    display: block;
    width: 100%;
    font-size: 20px;
    flex-grow: 1;
    padding: 8px;

    &:focus, &:hover {
        outline:0;
      }
`;

const ThemedButton = styled.button`
    flex-grow: 1;
    background-color: ${(props) => props.theme.color.background};
    border: 0;
    width: 80px;
    cursor: ${(props) => (props.disabled ? 'auto' : 'pointer')};
    border-left: 1px solid ${(props) => props.theme.color.primary};
    color: ${(props) => props.theme.color.primary};
    font-weight: 800;
    font-size: 18px;
    padding: 0px 8px;

    &:hover {
        background-color: ${(props) => props.theme.color.primary};
        color: ${(props) => props.theme.color.background};
    }
`;

export default function TodoAdder() {
  const [title, setTitle] = useState('');
  const { todosLoading, addTodo, addLoading } = useTodos();
  const onSubmit = async (event: React.FormEvent<HTMLElement>) => {
    event.preventDefault();
    addTodo(title);
    setTitle('');
  };

  return (
    <ThemedForm onSubmit={onSubmit}>
      <ThemedInput disabled={todosLoading} value={title} onChange={(e) => setTitle(e.target.value)} type="text" />
      <ThemedButton disabled={todosLoading} type="submit">{addLoading ? <Loader /> : 'add'}</ThemedButton>
    </ThemedForm>
  );
}
