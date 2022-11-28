import { useDispatch, useSelector } from 'react-redux';
import Header from '../header/Header';
import SortOption from '../sortOption/SortOption';
import './sorter.less';
import { selectSortOption, sortOptions } from '../todoList/todoSlice';

const CLASS_NAME = 'sorter';

export default function Sorter() {
  const { reverse, selectedOptionId } = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <div className={CLASS_NAME}>
      <Header />
      <div className="header-sorter">
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
      </div>
    </div>
  );
}
