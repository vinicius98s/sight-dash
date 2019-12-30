import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Routes';
import {
  BrowserRouter as Router
} from "react-router-dom";
import { RelayEnvironmentProvider } from 'react-relay/hooks';

import * as serviceWorker from './serviceWorker';
import environment from './relay/environment';

ReactDOM.render(
  <RelayEnvironmentProvider environment={environment}>
    <Router>
      <Routes />
    </Router>
  </RelayEnvironmentProvider>,
document.getElementById('root'));

serviceWorker.unregister();
