import styled from 'styled-components';
import Header from './Header';
import SortOption from './SortOption';
import { selectSortOption, sortOptions } from '../store/todoSlice';
import { useAppDispatch, useAppSelector } from '../store/hooks';

const StyledWrapperDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid ${(props) => props.theme.color.primary};
  border-bottom: 0;

  @media only screen and (max-width: 500px) {
    border: 0;
    border-top: 1px solid ${(props) => props.theme.color.primary};
    border-bottom: 1px solid ${(props) => props.theme.color.primary};
  }
`;

const StyledHeaderDiv = styled.div`
  display: flex;
`;

export default function Sorter() {
  const { reverse, selectedOptionId } = useAppSelector((state) => state.todos);
  const dispatch = useAppDispatch();

  return (
    <StyledWrapperDiv>
      <Header />
      <StyledHeaderDiv>
        {sortOptions.map(
          (sortOption) => (
            <SortOption
              key={sortOption.id}
              selected={selectedOptionId === sortOption.id}
              onClick={() => dispatch(selectSortOption(sortOption.id))}
              reverse={selectedOptionId === sortOption.id && reverse}
              label={sortOption.label}
            />
          ),
        )}
      </StyledHeaderDiv>
    </StyledWrapperDiv>
  );
}
