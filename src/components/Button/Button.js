/* eslint-disable react/prop-types */
// eslint-disable-next-line react/jsx-filename-extension
import React from 'react';

const Button = ({
  Icon, text = null, id = null, handleClick,
}) => (
  <span>
    <button type="button" id={id} onClick={handleClick}>
      {Icon ? <Icon /> : text}
    </button>
  </span>
);

export default Button;
