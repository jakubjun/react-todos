import { useState } from 'react';
import dbSendLoginEmail from '../db/sendLoginEmail';

export default function useSendLoginEmail() {
  const [sendLoginEmailError, setSendLoginEmailError] = useState<boolean>(false);
  const [sendLoginEmailLoading, setSendLoginEmailLoading] = useState<boolean>(false);
  const [emailSent, setEmailSent] = useState<boolean>(false);

  const sendLoginEmail = async (email: string) => {
    setSendLoginEmailLoading(true);

    const { error } = await dbSendLoginEmail(email);

    if (error) {
      setSendLoginEmailLoading(true);
    } else {
      setSendLoginEmailError(false);
    }

    setSendLoginEmailLoading(false);
    setEmailSent(true);
  };

  return {
    sendLoginEmail,
    sendLoginEmailError,
    sendLoginEmailLoading,
    emailSent,
  };
}
