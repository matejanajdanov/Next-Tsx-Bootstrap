import React, { InputHTMLAttributes } from 'react';

type InputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  labelText: string;
  formHandler?: (event) => void;
};

export const InputField: React.FC<InputFieldProps> = ({
  labelText,
  formHandler,
  ...props
}) => {
  return (
    <React.Fragment>
      <label htmlFor={props.id}>{labelText}</label>
      <input
        id={props.id}
        type={props.type}
        name={props.name}
        className='form-control mb-2'
        onChange={formHandler}
      />
    </React.Fragment>
  );
};
export default InputField;
