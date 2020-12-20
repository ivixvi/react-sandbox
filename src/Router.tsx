import React, {  Suspense, lazy } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { App } from './components/pages/create-react-app/App'

export function Router() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/" component={App}></Route>
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}