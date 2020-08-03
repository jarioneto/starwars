import React from 'react';

// RTL
import { render, screen } from '@testing-library/react';

// Components
import Person from './Person';

// Assets
import avatarDarth from 'assets/images/darth-vader.png';

const defaultProps = {
  person: {
    name: 'Darth Vader',
    avatar: avatarDarth
  }
};

const renderComponent = (props = defaultProps) => render(<Person {...props} />);

describe('Person component', () => {
  test('Should render the component', () => {
    renderComponent();

    expect(screen.getByRole('img', { name: /darth vader/i })).toBeInTheDocument();

    expect(
      screen.getByRole('heading', { name: /your master is darth vader/i })
    ).toBeInTheDocument();
  });
});
