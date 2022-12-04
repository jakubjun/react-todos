import { useSelector } from 'react-redux';
import Loader from '../../../loader/Loader';
import { layoutPropTypes } from '../../../utils/propTypes';
import Header from '../../header/Header';
import Sorter from '../../sorter/Sorter';
import './baseLayout.less';

const CLASS_NAME = 'layout__base';

export default function BaseLayout(props) {
  const { children } = props;
  const loading = useSelector((state) => state.loading.loading);

  return (
    <div className={CLASS_NAME}>
      <div className={`${CLASS_NAME}__container`}>
        <Sorter />
        <div className={`${CLASS_NAME}__container__content`}>
          {loading ? <Loader /> : children}

        </div>
      </div>
    </div>
  );
}

BaseLayout.propTypes = layoutPropTypes;
