import React, { ButtonHTMLAttributes } from 'react';

import { ButtonBase } from './styles';

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
}

const Button: React.FC<IProps> = ({ loading = false, children, ...rest }) => {
  return <ButtonBase {...rest}>{!loading ? <>{children}</> : <div />}</ButtonBase>;
};

export default Button;
