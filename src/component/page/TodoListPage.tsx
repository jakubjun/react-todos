import TodoList from '../TodoList';
import TodoAdder from '../TodoAdder';
import RouterLink from '../RouterLink';
import useAuth from '../../hooks/useAuth';
import Loader from '../Loader';
import useTodos from '../../hooks/useTodos';
import ContentPaddingDiv from '../ContentPaddingDiv';

export default function TodoListPage() {
  const { user, userLoading } = useAuth();
  const { todos, todosLoading } = useTodos();

  if (userLoading || todosLoading) {
    return <Loader />;
  }

  if (!user) {
    return (
      <ContentPaddingDiv>
        Please log in on the
        {' '}
        <RouterLink href="/auth">auth page</RouterLink>
        .
      </ContentPaddingDiv>
    );
  }

  return (
    <>
      {todos?.length ? <TodoList /> : (
        <ContentPaddingDiv>
          There are no todos yet, you should add some!
        </ContentPaddingDiv>
      )}
      <TodoAdder />
    </>
  );
}
