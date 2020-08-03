import React, { FC, ButtonHTMLAttributes } from 'react';

// Components
import Loader from 'components/Loader';

// Styles
import { ButtonBase } from './styles';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
}

const Button: FC<Props> = ({ loading, children, ...restProps }) => {
  return (
    <ButtonBase {...restProps} disabled={loading}>
      {!loading ? children : <Loader />}
    </ButtonBase>
  );
};

Button.defaultProps = {
  loading: false
} as Partial<Props>;

export default Button;
