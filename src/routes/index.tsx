import React, { FC, Suspense } from 'react';

// Third party
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Components

const Home = React.lazy(() => import('pages/Home'));

const Routes: FC = () => {
  return (
    <Suspense fallback={<div />}>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="*" component={() => <h2>Page not found</h2>} />
        </Switch>
      </Router>
    </Suspense>
  );
};

export default Routes;
