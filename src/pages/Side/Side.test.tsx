import React from 'react';

// Types
import { Side as SideType, Sides } from 'types';

// RTL
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

// Components
import Side from './Side';

// Third party
import { Router } from 'react-router-dom';
import { createMemoryHistory, History } from 'history';
import MockAdapter from 'axios-mock-adapter';
import { ToastContainer } from 'react-toastify';

// Services
import http from 'services/http';

// Context
import SideContext from 'contexts/SideContext';
import { ThemeContext } from 'styled-components';

// Styles
import theme from 'styles/theme';

const axiosMock = new MockAdapter(http);

let history: History;

const renderComponent = (side: SideType) =>
  render(
    <ThemeContext.Provider value={theme}>
      <SideContext.Provider value={side}>
        <Router history={history}>
          <Side />
          <ToastContainer />
        </Router>
      </SideContext.Provider>
    </ThemeContext.Provider>
  );

describe('Side component', () => {
  beforeEach(() => {
    history = createMemoryHistory({ initialEntries: ['side'], initialIndex: 0 });
  });

  test('Should render the component', () => {
    renderComponent(Sides.light);

    const buttonBack = screen.getByRole('button', { name: 'arrow.svg' });
    const buttonAgain = screen.getByRole('button', { name: /choose your path again, padawan/i });
    const avatar = screen.getByRole('img', { name: /luke skywalker/i });
    const yourMaster = screen.getByRole('heading', { name: /your master is luke skywalker/i });

    expect(buttonBack).toBeInTheDocument();
    expect(buttonAgain).toBeInTheDocument();
    expect(avatar).toBeInTheDocument();
    expect(yourMaster).toBeInTheDocument();
  });

  test('Should fetch people on click again button', async () => {
    renderComponent(Sides.light);

    axiosMock.onGet('people/1').reply(400);
    axiosMock.onGet('people/4').reply(200);

    const buttonAgain = screen.getByRole('button', { name: /choose your path again, padawan/i });
    userEvent.click(buttonAgain);

    await waitFor(() => {
      expect(screen.getByRole('img', { name: /darth vader/i })).toBeInTheDocument();
    });
  });

  test('Should display toast when an error occurs', async () => {
    renderComponent(Sides.light);

    axiosMock.onGet('people/1').reply(400);
    axiosMock.onGet('people/4').reply(400);

    const buttonAgain = screen.getByRole('button', { name: /choose your path again, padawan/i });
    userEvent.click(buttonAgain);

    await waitFor(() => {
      expect(screen.getByText(/error, try again/i)).toBeInTheDocument();
    });
  });

  test('Should go to home when click back button', async () => {
    renderComponent(Sides.light);

    const buttonBack = screen.getByRole('button', { name: 'arrow.svg' });
    userEvent.click(buttonBack);

    await waitFor(() => {
      expect(history.location.pathname).toBe(`/`);
    });
  });

  test('Should redirect to home if the context is null', async () => {
    renderComponent(null);

    await waitFor(() => {
      expect(history.location.pathname).toBe(`/`);
    });
  });
});
