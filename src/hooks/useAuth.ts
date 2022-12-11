import { useAppSelector } from '../store/hooks';

export default function useAuth() {
  return useAppSelector((state) => state.user);
}
