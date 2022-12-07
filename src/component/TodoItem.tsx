import styled from 'styled-components';
import { Todo } from '../db/getTodos';
import useTodos from '../hooks/useTodos';

interface TodoItemProps {
  todo: Todo
}

const ThemedDiv = styled.div`
  border-bottom: 1px solid ${(props) => props.theme.color.primary};
  display: flex;
  min-height: 35px;

  &:last-of-type {
    border: 0;
  }
`;

const ThemedTitleDiv = styled.div`
    flex-grow: 1;
    padding: 2px 8px;
    display: flex;
    align-items: center;
    line-height: 100%;
`;

const ThemedActionsDiv = styled.div`
    display: flex;
    align-items: center;
`;

const ThemedButton = styled.div`
    border-left: 1px solid ${(props) => props.theme.color.primary};
    color: ${(props) => props.theme.color.primary};
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 30px;
    cursor: pointer;

    &:hover {
      background-color: ${(props) => props.theme.color.primary};
      color: ${(props) => props.theme.color.background};
    }
`;

export default function TodoItem({ todo }:TodoItemProps) {
  const { removeTodo } = useTodos();

  return (
    <ThemedDiv>
      <ThemedTitleDiv>{todo.title}</ThemedTitleDiv>
      <ThemedActionsDiv>
        <ThemedButton onClick={() => removeTodo(todo.id)}>✔</ThemedButton>
      </ThemedActionsDiv>
    </ThemedDiv>
  );
}
