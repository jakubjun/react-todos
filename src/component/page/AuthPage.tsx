import { useState } from 'react';
import styled from 'styled-components';
import Button from '../Button';
import Input from '../Input';
import useAuth from '../../hooks/useAuth';
import useSendLoginEmail from '../../hooks/useSendLoginEmail';
import Loader from '../Loader';

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
  const { user } = useAuth();
  const [emailInput, setEmailInput] = useState('');
  const { sendLoginEmail, sendLoginEmailLoading, emailSent } = useSendLoginEmail();
  const { logOut } = useAuth();
  if (user) {
    return (
      <>
        Logged in as
        {' '}
        {user?.email}
        <ThemedActionsDiv>
          <Button onClick={logOut}>Log Out</Button>
        </ThemedActionsDiv>
      </>
    );
  }

  if (sendLoginEmailLoading) {
    return <Loader />;
  }

  if (emailSent) {
    return <>Check your email inbox.</>;
  }

  return (
    <form onSubmit={() => sendLoginEmail(emailInput)}>
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
