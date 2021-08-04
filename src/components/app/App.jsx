import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import ListPage from '../../containers/ListPage';
import DetailPage from '../../containers/DetailPage';

export default function App() {
  return <main className="App">
    <Router>
      <Switch>

        <Route exact path="/" render={routerProps => (
          <ListPage {...routerProps}/>
        )}/>

        <Route exact path="/:id" render={routerProps => (
          <DetailPage {...routerProps}/>
        )}/>

        <Redirect to="/"/>

      </Switch>
    </Router>
  </main>;
}
