import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router';

const App=() => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact />
      </Switch>
    </Router>
  );
};

export default App;