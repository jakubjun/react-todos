import { useState } from 'react';
import styled from 'styled-components';
import { add } from '../../store/todoSlice';
import supabase from '../../db/supabase';
import Loader from '../../loader/Loader';
import { useAppDispatch, useAppSelector } from '../../store/hooks';

const ThemedForm = styled.form`
  display: flex;
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
        background-color: darken(${(props) => props.theme.color.background}, 2%);
      }
`;

const ThemedButton = styled.button`
    flex-grow: 1;
    background-color: ${(props) => props.theme.color.background};
    border: 0;
    cursor: pointer;
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
  const dispatch = useAppDispatch();
  const [title, setTitle] = useState('');
  const [loading, setLoading] = useState(false);
  const user = useAppSelector((state) => state.user.user);

  const onSubmit = async (event: React.FormEvent<HTMLElement>) => {
    event.preventDefault();

    if (!user) {
      return;
    }
    setLoading(true);
    const { data, error } = await supabase
      .from('todos')
      .insert([
        { user_id: user.id, title },
      ]).select('*');

    if (!error) {
      dispatch(add(data[0]));
    }
    setTitle('');
    setLoading(false);
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <ThemedForm onSubmit={onSubmit}>
      <ThemedInput value={title} onChange={(e) => setTitle(e.target.value)} type="text" />
      <ThemedButton type="submit">add</ThemedButton>
    </ThemedForm>
  );
}
