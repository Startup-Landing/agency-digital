/** @jsx jsx */
import { jsx } from 'theme-ui';
import { rgba } from 'polished';
import { BiPlus, BiMinus } from 'react-icons/bi';

const ActionButton = ({ isOpen, handleClick }) => {
  return (
    <span sx={styles.button} onClick={handleClick} aria-hidden="true">
      {isOpen ? (
        <BiPlus size="28px" color={rgba('#0F2137', 0.3)} sx={styles.button} />
      ) : (
        <BiMinus size="28px" color={rgba('#0F2137', 0.3)} sx={styles.button} />
      )}
    </span>
  );
};

export default ActionButton;

const styles = {
  button: {
    cursor: 'pointer',
    position: 'absolute',
    right: 0,
  },
};
