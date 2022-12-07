import { useEffect } from 'react';
import { getUser } from '../db/getUser';
import logOut from '../db/logOut';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { setError, setLoading, setUser } from '../store/userSlice';

export default function useAuth() {
  const dispatch = useAppDispatch();

  const { user, loading, error } = useAppSelector((state) => state.user);

  useEffect(() => {
    if (user) {
      return;
    }
    setLoading(true);
    getUser().then(({ data: { user: fetchedUser } }) => {
      dispatch(setUser(fetchedUser));
      dispatch(setError(false));
    }).catch(() => {
      dispatch(setError(true));
    }).finally(() => {
      dispatch(setLoading(false));
    });
  }, []);

  const logOutWithDispatch = async () => {
    dispatch(setUser(null));
    await logOut();
  };

  return {
    user,
    userLoading: loading,
    userError: error,
    logOut: logOutWithDispatch,
  };
}
