import React from 'react';

// RTL
import { render } from '@testing-library/react';

// Components
import Loader from './Loader';

// Context
import { ThemeContext } from 'styled-components';

// Styles
import theme from 'styles/theme';

const renderComponent = () =>
  render(
    <ThemeContext.Provider value={theme}>
      <Loader />
    </ThemeContext.Provider>
  );

describe('Loader component', () => {
  test('Should render the component', () => {
    const { container } = renderComponent();

    expect(container).toBeDefined();
  });
});
