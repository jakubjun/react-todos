import SortOption from '../sortOption/SortOption';
import './sorter.less';

const CLASS_NAME = 'sorter';
export default function Sorter() {
  return (
    <div className={CLASS_NAME}>
      <SortOption selected label="A->z" />
      <SortOption label="A->z" />
    </div>
  );
}
