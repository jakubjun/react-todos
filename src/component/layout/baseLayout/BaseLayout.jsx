import { layoutPropTypes } from '../../../utils/propTypes';
import Header from '../../header/Header';
import Sorter from '../../sorter/Sorter';
import './baseLayout.less';

const CLASS_NAME = 'layout__base';

export default function BaseLayout(props) {
  const { children } = props;

  return (
    <div className={CLASS_NAME}>
      <div className={`${CLASS_NAME}__container`}>
        <Header />
        <Sorter />
        <div className={`${CLASS_NAME}__container__content`}>

          {children}
        </div>
      </div>
    </div>
  );
}

BaseLayout.propTypes = layoutPropTypes;
