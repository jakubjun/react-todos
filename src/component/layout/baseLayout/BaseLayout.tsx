import {ReactNode} from 'react';
import Loader from '../../../loader/Loader';
import {useAppSelector} from '../../../store/hooks';
import Sorter from '../../sorter/Sorter';
import './baseLayout.less';

const CLASS_NAME = 'layout__base';

interface BaseLayoutProps {
  children: ReactNode
}

export default function BaseLayout(props: BaseLayoutProps) {
  const { children } = props;
  const loading = useAppSelector((state) => state.loading.loading);

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
