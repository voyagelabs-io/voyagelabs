import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.scss';

import Navbar from './components/Navbar';
import Main from './components/Main';
import NotFound from './components/NotFound';

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
