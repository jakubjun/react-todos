import { ReactNode } from 'react';
import styled from 'styled-components';
import Loader from '../../../loader/Loader';
import { useAppSelector } from '../../../store/hooks';
import Sorter from '../../sorter/Sorter';

interface BaseLayoutProps {
  children: ReactNode
}

const ThemedDiv = styled.div`
  background-color: ${(props) => props.theme.color.background};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 140px;

  @media only screen and (max-width: 500px) {
    padding-top: 0;
  }
  &__container {
  
    &__content {
    }
  }
`;

const ThemedContainerDiv = styled.div`
      @media only screen and (min-width: 501px) {
        min-width: 500px; 
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

export default function BaseLayout(props: BaseLayoutProps) {
  const { children } = props;
  const loading = useAppSelector((state) => state.loading.loading);

  return (
    <ThemedDiv>
      <ThemedContainerDiv>
        <Sorter />
        <ThemedContentDiv>
          {loading ? <Loader /> : children}

        </ThemedContentDiv>
      </ThemedContainerDiv>
    </ThemedDiv>
  );
}
