import PropTypes from 'prop-types';
import classNamer from '../../utils/classNamer/classNamer';

const CLASS_NAME = 'sort-option';

export default function SortOption(props) {
  const { label, selected } = props;
  return (
    <div className={classNamer(CLASS_NAME, {
      [`${CLASS_NAME}--selected`]: selected,
    })}
    >
      {label}
    </div>
  );
}

SortOption.propTypes = {
  label: PropTypes.string.isRequired,
  selected: PropTypes.bool.isRequired,
};
