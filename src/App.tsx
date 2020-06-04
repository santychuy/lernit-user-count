import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import AuthScreen from './screens/Auth';
import CounterScreen from './screens/Counter';

export default () => (
  <>
    <Router>
      <Switch>
        <Route exact path="/" component={AuthScreen} />
        <Route exact path="/counter" component={CounterScreen} />
      </Switch>
    </Router>
  </>
);
