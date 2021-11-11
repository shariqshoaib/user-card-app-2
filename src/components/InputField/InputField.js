import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import StyledInputField from './InputField.styled';

const InputField = ({ label, value, onChange }) => (
  <StyledInputField>
    <label htmlFor={label}>
      {`${label}: `}
    </label>
    <Input id={label} type="text" value={value} onChange={onChange} />
  </StyledInputField>
);

export default InputField;

InputField.defaultProps = {
  label: null,
  value: null,
  onChange: null,
};

InputField.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

const Input = styled.input`
  border: 1px solid #d9d9d9;
  cursor: text;
  min-height: 32px;
  min-width: 60%;
  padding: 11px 4px;
 `;
