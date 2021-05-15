import React, { ButtonHTMLAttributes } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  buttonText: string;
  buttonColor?: 'primary' | 'secondary' | 'light' | 'dark';
  buttonBackgroundColor: 'primary' | 'secondary' | 'light' | 'dark';
  buttonWidth?: 'w-25' | 'w-50' | 'w-75' | 'w-100';
  styles?: string;
};

export const Button: React.FC<ButtonProps> = ({
  buttonText,
  buttonColor,
  buttonBackgroundColor,
  buttonWidth,
  styles,
  ...props
}) => {
  return <button className={`btn btn-${buttonBackgroundColor} ${buttonWidth} ${styles}`}>{buttonText}</button>;
};
export default Button;
