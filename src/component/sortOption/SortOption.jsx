import PropTypes from 'prop-types';
import classNamer from '../../utils/classNamer/classNamer';
import './sortOption.less';

const CLASS_NAME = 'sort-option';

export default function SortOption(props) {
  const {
    label, selected, reverse, onClick,
  } = props;
  return (
    <button
      type="button"
      onClick={onClick}
      className={classNamer(CLASS_NAME, {
        [`${CLASS_NAME}--selected`]: selected,
      })}
    >
      {label}
      {reverse ? '↑' : '↓'}
    </button>
  );
}

SortOption.propTypes = {
  label: PropTypes.string.isRequired,
  selected: PropTypes.bool.isRequired,
  reverse: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};
