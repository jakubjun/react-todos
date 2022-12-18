import styled from 'styled-components';
import Loader from '../Loader';
import Sorter from '../Sorter';
import useTodos from '../../hooks/useTodos';

const ThemedWrapperDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 140px;

  @media only screen and (max-width: 500px) {
    padding-top: 0;
  }
`;

const ThemedContainerDiv = styled.div`
      @media only screen and (min-width: 501px) {
        width: 500px; 
      }

      @media only screen and (max-width: 500px) {
        width:100%  
      }
`;

const ThemedContentDiv = styled.div`
      border: 1px solid ${(props) => props.theme.color.primary};
      color: ${(props) => props.theme.color.primary};
      @media only screen and (max-width: 500px) {
        border: 0;
      }
`;

export default function TodoListLayout(props: React.HTMLAttributes<HTMLElement>) {
  const { children } = props;

  const { todosLoading } = useTodos();

  return (
    <ThemedWrapperDiv>
      <ThemedContainerDiv>
        <Sorter />
        <ThemedContentDiv>
          {todosLoading ? <Loader /> : children}
        </ThemedContentDiv>
      </ThemedContainerDiv>
    </ThemedWrapperDiv>
  );
}
