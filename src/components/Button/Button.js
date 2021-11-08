import React from 'react';
import PropType from 'prop-types';

const Button = ({
  Icon, text = null, id = null, handleClick,
}) => (
  <span>
    <button type="button" id={id} onClick={handleClick}>
      {Icon ? <Icon /> : text}
    </button>
  </span>
);

Button.defaultProps = {
  Icon: null,
  text: null,
  id: null,
  handleClick: null,
};

Button.propTypes = {
  Icon: PropType.elementType,
  text: PropType.string,
  id: PropType.number,
  handleClick: PropType.func,
};

export default Button;
