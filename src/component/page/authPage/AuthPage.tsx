import { useState } from 'react';
import Button from '../../button/Button';
import Input from '../../input/Input';
import './authPage.less';
import supabase from '../../../db/supabase';
import { setUser } from '../../../store/userSlice';
import {useAppDispatch, useAppSelector} from '../../../store/hooks';

const CLASS_NAME = 'auth-page';

export default function AuthPage() {
  const user = useAppSelector((state) => state.user.user);
  const dispatch = useAppDispatch();
  const [email, setEmail] = useState('');
  const [emailSent, setEmailSent] = useState(false);
  const loginWithEmail = async () => {
    await supabase.auth.signInWithOtp({
      email,
    });
    setEmailSent(true);
  };

  const logOut = async () => {
    await supabase.auth.signOut();
    dispatch(setUser(null));
  };

  if (user) {
    return (
      <div className={CLASS_NAME}>
        Logged in as
        {' '}
        {user?.email}
        <div className={`${CLASS_NAME}_actions`}>
          <Button onClick={logOut}>Log Out</Button>
        </div>
      </div>
    );
  }

  if (emailSent) {
    return <div className={CLASS_NAME}>Check your email inbox</div>;
  }

  return (
    <div className={CLASS_NAME}>
      <div className={`${CLASS_NAME}_formfield`}>
        <div className={`${CLASS_NAME}_label`}>email</div>
        <Input type="text" onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div className={`${CLASS_NAME}_actions`}>
        <Button onClick={loginWithEmail}>Send magic link</Button>
      </div>
    </div>
  );
}
