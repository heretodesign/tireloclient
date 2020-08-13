import React from 'react';
import './App.scss';
import { Route, Switch } from "react-router-dom"
import Careers from './pages/Careers'
import Home from './pages/HomePage'
import Footer from './components/layout/Footer/Footer'
import Apply from './pages/Apply';
import Contact from './pages/Contact';
import About from './pages/About';

const App = () => {

  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home}  />
        <Route exact path="/careers-at-srp" component={Careers} />
        <Route exact path="/apply-for-this-job" component={Apply} />
        <Route exact path="/contact-us" component={Contact} />
        <Route exact path="/about-us" component={About} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
