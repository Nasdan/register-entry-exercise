import * as React from 'react';
import { routes } from './routes';
import { Route, Switch, HashRouter } from 'react-router-dom';
import { EntryListScene, EntryRegistryScene } from 'scenes';

export const RouterComponent = () => {
  return (
    <HashRouter>
      <Switch>
        <Route
          exact={true}
          path={[routes.root, routes.entries]}
          component={EntryListScene}
        />
        <Route
          exact={true}
          path={[routes.newEntry]}
          component={EntryRegistryScene}
        />
      </Switch>
    </HashRouter>
  );
};
