import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import {
  StylesProvider,
} from '@material-ui/core/styles';
import { createBrowserHistory } from 'history';

import Header from './components/Header';
import Landing from './components/Landing'

const history = createBrowserHistory();

export default () => {
  return (
    <Router history={history}>
      <StylesProvider>
        <div>
          <Header />
          <Switch>
            <Route path="/">
              <Landing />
            </Route>
          </Switch>
        </div>
      </StylesProvider>
    </Router>
  );
};
