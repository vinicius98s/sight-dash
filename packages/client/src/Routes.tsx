import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from './components/Login';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Login />
      </Route>
    </Switch>
  );
};

export default Routes;
