import React, { Component, Suspense, lazy } from 'react';
import './App.scss';
import { Route, Link, Switch } from "react-router-dom"

import Header from './components/layout/Header/Header'
import Careers from './pages/Careers'
import Home from './pages/HomePage'
import Footer from './components/layout/Footer/Footer'

class App extends Component {

  render() {
    return (
      <div className="App">
        <Route>
          <Home path="/" />
          <Careers path="/careers" />
        </Route>
        <Footer />
      </div>
    );
  }
}

export default App;
