import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { RelayEnvironmentProvider } from 'react-relay/hooks';

import Routes from './Routes';
import environment from './relay/environment';

ReactDOM.render(
  <RelayEnvironmentProvider environment={environment}>
    <Router>
      <Routes />
    </Router>
  </RelayEnvironmentProvider>,
  document.getElementById('root')
);
