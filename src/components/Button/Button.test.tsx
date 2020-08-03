import React from 'react';

// RTL
import { render, screen } from '@testing-library/react';

// Components
import Button from './Button';

// Context
import { ThemeContext } from 'styled-components';

// Styles
import theme from 'styles/theme';

const defaultProps = {
  loading: false
};

const renderComponent = (props = defaultProps) =>
  render(
    <ThemeContext.Provider value={theme}>
      <Button {...props}>Cancel</Button>
    </ThemeContext.Provider>
  );

describe('Button component', () => {
  test('Should render the component', () => {
    renderComponent();

    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByText(/cancel/i)).toBeInTheDocument();
  });

  test('Should render the component with loader', () => {
    renderComponent({ loading: true });

    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.queryByText(/cancel/i)).not.toBeInTheDocument();
  });
});
