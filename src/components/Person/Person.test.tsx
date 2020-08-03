import React from 'react';

// RTL
import { render, screen } from '@testing-library/react';

// Components
import Person from './Person';

const defaultProps = {
  person: {
    name: 'Darth Vader',
    avatar: ''
  }
};

const renderComponent = (props = defaultProps) => render(<Person {...props} />);

describe('Person component', () => {
  test('Should render the component', () => {
    renderComponent();

    expect(screen.getByRole('img')).toBeInTheDocument();
    expect(screen.getByText(/darth vader/i)).toBeInTheDocument();
  });
});
