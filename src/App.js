import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.scss';

import Navbar from './components/Navbar';
import Main from './components/Main';
import NotFound from './components/NotFound';

import fb from './img/iconfb.png';
import twitter from './img/icontwitter.png';


const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route component={NotFound} />
        </Switch>
        <div className="footer">
          <a href="http://www.facebook.com" target="_blank"><img src={fb} className="icon"/></a>
          <a href="http://www.twitter.com" target="_blank"><img src={twitter} className="icon"/></a>
          <a href="http://www.youtube.com" target="_blank"><img src='path_to_your_image' className="icon"/></a>
         </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
