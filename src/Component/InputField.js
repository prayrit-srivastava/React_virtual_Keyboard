import React from 'react';

const InputField = ({ value }) => {
  return (
    <div className="input">
      <input type="text" value={value} data-testid="input-field" readOnly />
    </div>
  );
};

export default InputField;
