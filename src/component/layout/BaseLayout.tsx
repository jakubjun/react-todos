import ContentPaddingDiv from '../ContentPaddingDiv';
import TodoListLayout from './TodoListLayout';

export default function BaseLayout(props: React.HTMLAttributes<HTMLElement>) {
  const { children } = props;

  return (
    <TodoListLayout>
      <ContentPaddingDiv>{children}</ContentPaddingDiv>
    </TodoListLayout>
  );
}
