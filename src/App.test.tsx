import React from 'react';

// RTL
import { render } from '@testing-library/react';

// Components
import App from './App';

describe('App component', () => {
  test('Should render the component', () => {
    const { container } = render(<App />);

    expect(container).toBeDefined();
  });
});
