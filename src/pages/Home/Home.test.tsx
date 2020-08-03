import React from 'react';

// RTL
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

// Components
import Home from './Home';

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

const renderComponent = () =>
  render(
    <ThemeContext.Provider value={theme}>
      <SideContext.Provider value={null}>
        <Router history={history}>
          <Home />
          <ToastContainer />
        </Router>
      </SideContext.Provider>
    </ThemeContext.Provider>
  );

describe('Home component', () => {
  beforeEach(() => {
    history = createMemoryHistory();
  });

  test('Should render the component', () => {
    renderComponent();

    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /welcome to iclinic/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /frontend challenge/i })).toBeInTheDocument();
  });

  test('Should fetch people on click start button', async () => {
    renderComponent();

    axiosMock.onGet('people/1').reply(200);
    axiosMock.onGet('people/4').reply(200);

    const buttonStart = screen.getByRole('button');
    userEvent.click(buttonStart);

    await waitFor(() => {
      expect(history.location.pathname).toBe(`/side`);
    });
  });

  test('Should display toast when an error occurs', async () => {
    renderComponent();

    axiosMock.onGet('people/1').reply(400);
    axiosMock.onGet('people/4').reply(400);

    const buttonStart = screen.getByRole('button');
    userEvent.click(buttonStart);

    await waitFor(() => {
      expect(screen.getByText(/error, try again/i)).toBeInTheDocument();
    });
  });
});
