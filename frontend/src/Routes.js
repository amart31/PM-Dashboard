import React from 'react';
import { Switch, Redirect } from 'react-router-dom';

import { RouteWithLayout } from './components';
import { Main as MainLayout, Minimal as MinimalLayout } from './layouts';

import {
  Dashboard as DashboardView,
  Tasks as TasksView,
  Tableau as TableauView,
  NotFound as NotFoundView,
  Capabilities as CapabilitiesView

} from './views';

const Routes = () => {
  return (
    <Switch>
      <RouteWithLayout
        component={DashboardView}
        exact
        layout={MainLayout}
        path="/"
      />
      <RouteWithLayout
        component={CapabilitiesView}
        exact
        layout={MainLayout}
        path="/capabilities"
      />
      <RouteWithLayout
        component={TasksView}
        exact
        layout={MainLayout}
        path="/financials"
      />
      <RouteWithLayout
        component={TableauView}
        exact
        layout={MainLayout}
        path="/budget"
      />
      <RouteWithLayout
        component={NotFoundView}
        exact
        layout={MinimalLayout}
        path="/not-found"
      />
      <Redirect to="/" />
    </Switch>
  );
};

export default Routes;
