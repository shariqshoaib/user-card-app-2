import React from 'react';
import PropType from 'prop-types';
import styled from 'styled-components';

const Button = ({
  Icon, text, id, handleClick, className,
}) => (
  <StyledButton className={className} type="button" id={id} onClick={handleClick}>
    {Icon ? <Icon /> : text}
  </StyledButton>
);

Button.defaultProps = {
  className: null,
  Icon: null,
  text: null,
  id: null,
  handleClick: null,
};

Button.propTypes = {
  className: PropType.string,
  Icon: PropType.elementType,
  text: PropType.string,
  id: PropType.number,
  handleClick: PropType.func,
};

export default Button;

const StyledButton = styled.button`
  background: none;
  border: none;
  font-size: 20px;
`;
