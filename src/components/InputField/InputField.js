import React from 'react';
import PropTypes from 'prop-types';

const InputField = ({ label, value, onChange }) => (
  <div className="field">
    <label htmlFor={label}>
      {`${label}: `}
      <input id={label} type="text" value={value} onChange={onChange} />
    </label>
  </div>
);

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

export default InputField;
