import Header from '../header/Header';
import SortOption from '../sortOption/SortOption';
import './sorter.less';
import { selectSortOption, sortOptions } from '../../store/todoSlice';
import {useAppDispatch, useAppSelector} from '../../store/hooks';

const CLASS_NAME = 'sorter';

export default function Sorter() {
  const { reverse, selectedOptionId } = useAppSelector((state) => state.todos);
  const dispatch = useAppDispatch();

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
