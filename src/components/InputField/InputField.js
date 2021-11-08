/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */

import React from 'react';

const InputField = ({ label, value, onChange }) => (
  <div className="field">
    <label>
      {`${label}: `}
      <input type="text" value={value} onChange={onChange} />
    </label>
  </div>
);

export default InputField;
