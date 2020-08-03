import React, { FC, Suspense } from 'react';

// Third party
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

// Components
import Loader from 'components/Loader';

const Home = React.lazy(() => import('pages/Home'));
const Side = React.lazy(() => import('pages/Side'));

const Routes: FC = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/side" component={Side} />
          <Redirect from="*" to="/" />
        </Switch>
      </Router>
    </Suspense>
  );
};

export default Routes;
