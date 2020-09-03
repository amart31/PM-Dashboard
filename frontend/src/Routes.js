import React from 'react';
import { Switch, Redirect } from 'react-router-dom';

import { RouteWithLayout } from './components';
import { Main as MainLayout, Minimal as MinimalLayout } from './layouts';

import {
  Dashboard as DashboardView,
  ProductList as ProductListView,
  UserList as UserListView,
  Tasks as TasksView,
  Tableau as TableauView,
  Account as AccountView,
  Settings as SettingsView,
  SignUp as SignUpView,
  SignIn as SignInView,
  NotFound as NotFoundView
} from './views';

import Integrations from './views/Integrations/Integrations';
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
        component={UserListView}
        exact
        layout={MainLayout}
        path="/users"
      />
      <RouteWithLayout
        component={ProductListView}
        exact
        layout={MainLayout}
        path="/projects"
      />
      <RouteWithLayout
        component={Integrations}
        exact
        layout={MainLayout}
        path="/integrations"
      />
      <RouteWithLayout
        component={TasksView}
        exact
        layout={MainLayout}
        path="/resources"
      />

      <RouteWithLayout
        component={TableauView}
        exact
        layout={MainLayout}
        path="/tableau"
      />

      <RouteWithLayout
        component={AccountView}
        exact
        layout={MainLayout}
        path="/account"
      />
      <RouteWithLayout
        component={SettingsView}
        exact
        layout={MainLayout}
        path="/settings"
      />
      <RouteWithLayout
        component={SignUpView}
        exact
        layout={MinimalLayout}
        path="/sign-up"
      />
      <RouteWithLayout
        component={SignInView}
        exact
        layout={MinimalLayout}
        path="/sign-in"
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
