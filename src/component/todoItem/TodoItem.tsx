import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Loader from '../../loader/Loader';
import {useAppDispatch} from '../../store/hooks';
import { remove } from '../../store/todoSlice';
import supabase from '../../db/supabase';
import styled from 'styled-components'

const CLASS_NAME = 'todo-item';

const ThemedDiv = styled.div`
  border-bottom: 1px solid ${props => props.theme.color.primary};
  display: flex;
  min-height: 32px;

  &:hover {
    background-color: darken(${props => props.theme.color.background}, 2%)
  }
`

const ThemedTitleDiv = styled.div`
    flex-grow: 1;
    padding: 8px 16px;
`

const ThemedActionsDiv = styled.div`
    display: flex;
    align-items: center;
`

const ThemedButton = styled.div`
      background-color: inherit;
      border: 0;
      border-left: 1px solid ${props => props.theme.color.primary};
      color: ${props => props.theme.color.primary};
      padding: 0;
      display: block;
      height: 100%;
      width: 30px;
      cursor: pointer;


      &:hover {
        background-color: ${props => props.theme.color.primary};
        color: ${props => props.theme.color.background};
      }
`

export default function TodoItem(props) {
  const { todo } = props;

  const dispatch = useAppDispatch();

  const [loading, setLoading] = useState<boolean>(false);

  const check = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('todos')
      .delete()
      .eq('id', todo.id);

    if (!error) {
      dispatch(remove(todo.id));
    }
    setLoading(false);
  };

  return (
    <ThemedDiv>
      <ThemedTitleDiv>{loading ? <Loader /> : todo.title}</ThemedTitleDiv>
      <ThemedActionsDiv>
        <ThemedButton onClick={check} className={`${CLASS_NAME}_actions_action`}>✔</ThemedButton>
      </ThemedActionsDiv>
    </ThemedDiv>
  );
}
