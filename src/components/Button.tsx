import { ButtonHTMLAttributes } from 'react';

import '../styles/button.scss';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  // eslint-disable-next-line react/require-default-props
  isOutlined?: boolean;
};

export function Button({ isOutlined = false, ...props }: ButtonProps) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <button
      type='button'
      className={`button ${isOutlined ? 'outlined' : ''}`}
      /* eslint-disable react/jsx-props-no-spreading */
      {...props}
    />
  );
}