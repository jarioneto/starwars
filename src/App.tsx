import React from 'react';

// Routes
import Routes from 'routes';

// Third party
import { ThemeContext } from 'styled-components';
import { ToastContainer } from 'react-toastify';

// Context
import SideContext from 'contexts/SideContext';

// Styles
import Styles from 'styles/main';
import theme from 'styles/theme';

const App: React.FC = () => {
  return (
    <ThemeContext.Provider value={theme}>
      <SideContext.Provider value={null}>
        <Routes />
        <Styles />
        <ToastContainer />
      </SideContext.Provider>
    </ThemeContext.Provider>
  );
};

export default App;
