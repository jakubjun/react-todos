import styled from 'styled-components';

interface SortOptionProps {
  label: string,
  selected: boolean,
  reverse: boolean,
  onClick: () => void
}

interface ThemedButtonProps {
  selected: boolean
}

const ThemedButton = styled.button<ThemedButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 60px;
  font-weight: 800;;
  padding: 0 3px; 
  font-size: 15px;
  color: ${(props) => props.theme.color.primary}
  border: 0;
  cursor: pointer;
  border-left: 1px solid ${(props) => props.theme.color.primary};
  background-color: ${(props) => (props.selected ? props.theme.color.primary : props.theme.color.background)};
  color: ${(props) => (props.selected ? props.theme.color.background : null)}
`;

export default function SortOption(props: SortOptionProps) {
  const {
    label, selected, reverse, onClick,
  } = props;
  return (
    <ThemedButton
      type="button"
      onClick={onClick}
      selected={selected}
    >
      {label}
      {reverse ? '↑' : '↓'}
    </ThemedButton>
  );
}

// SortOption.propTypes = {
//   label: PropTypes.string.isRequired,
//   selected: PropTypes.bool.isRequired,
//   reverse: PropTypes.bool.isRequired,
//   onClick: PropTypes.func.isRequired,
// };
