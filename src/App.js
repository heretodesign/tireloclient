import React, { Component } from 'react';
import './App.scss';
import { Route, Link, Switch } from "react-router-dom"
import Careers from './pages/Careers'
import Home from './pages/HomePage'
import Footer from './components/layout/Footer/Footer'
import Apply from './pages/Apply';

const App = () => {

  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home}  />
        <Route exact path="/careers-at-srp" component={Careers} />
        <Route exact path="/apply-for-this-job" component={Apply} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
