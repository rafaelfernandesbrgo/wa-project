import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';
import Main from '../components/pages/Main';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Main} isPrivate={false} />
    <Route path="/main" component={Main}  isPrivate={false} />
  </Switch>
);

export default Routes;
