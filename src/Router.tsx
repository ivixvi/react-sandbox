import React, {  Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { App } from './components/pages/create-react-app/App';
import { TicTacToe } from './components/pages/tic-tac-toe/TicTacToe';

export function Router() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/" component={App}></Route>
          <Route path="/tic-tac-toe" component={TicTacToe}></Route>
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}