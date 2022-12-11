import { useState } from 'react';
import styled from 'styled-components';
import Button from '../Button';
import Input from '../Input';
import useAuth from '../../hooks/useAuth';
import Loader from '../Loader';
import { useAppDispatch } from '../../store/hooks';
import { logOut, sendLoginEmail } from '../../store/actionCreators';

const ThemedActionsDiv = styled.div`
    padding-top: 20px;
    display: flex;
    justify-content: flex-end;
`;

const ThemedLabelDiv = styled.div`
    font-size: 14px;
    margin-bottom: 6px;
`;

const ThemedFormFieldDiv = styled.div`
    margin-bottom: 20px
`;

export default function AuthPage() {
  const { user, emailSent, loading } = useAuth();
  const [emailInput, setEmailInput] = useState('');
  const dispatch = useAppDispatch();
  if (user) {
    return (
      <>
        Logged in as
        {' '}
        {user?.email}
        <ThemedActionsDiv>
          <Button onClick={() => dispatch(logOut())}>Log Out</Button>
        </ThemedActionsDiv>
      </>
    );
  }

  if (loading) {
    return <Loader />;
  }

  if (emailSent) {
    return <>Check your email inbox.</>;
  }

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      dispatch(sendLoginEmail(emailInput));
      setEmailInput('');
    }}
    >
      <ThemedFormFieldDiv>
        <ThemedLabelDiv>email</ThemedLabelDiv>
        <Input type="email" required onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmailInput(e.target.value)} />
      </ThemedFormFieldDiv>
      <ThemedActionsDiv>
        <Button type="submit">Send magic link</Button>
      </ThemedActionsDiv>
    </form>
  );
}
