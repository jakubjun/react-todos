import { useAppSelector } from '../store/hooks';
import {
} from '../store/todoSlice';

export default function useTodos() {
  const {
    items,
    loading: loadingState,
    addLoading: addLoadingState,
    error: errorState,
  } = useAppSelector((state) => state.todos);

  return {
    todos: items,
    todosLoading: loadingState,
    todosError: errorState,
    addLoading: addLoadingState,
  };
}
