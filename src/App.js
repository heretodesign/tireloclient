import React, { Component, Suspense, lazy } from 'react';
import './App.scss';
import { Route, Link, Switch } from "react-router-dom"

import ContactUs from './components/layout/Body/ContactUs'
import Cards from './components/layout/Body/Cards'
import OurServices from './components/layout/Body/OurServices'
import Founder from './components/layout/Body/Founder'
import Header from './components/layout/Header/Header';
import Market from './components/layout/Body/Market'

import Footer from './components/layout/Footer/Footer'
const AboutUs = lazy(() => import('./components/layout/Body/AboutUs'));
const Landing = lazy(() => import('./components/layout/Body/Landing'));
const Testimonials = lazy(() => import('./components/layout/Body/Testimonials'));
const TheTeam = lazy(() => import('./components/layout/Body/TheTeam'));

const renderLoader = () => <p>Loading...</p>;

class App extends Component {

  render() {
    return (
      <div className="App">
        <Suspense fallback={renderLoader()}>
          <Header />
        </Suspense>
        <Cards />
        <OurServices />
        <Suspense fallback={renderLoader()}>
          <AboutUs />
        </Suspense>
        <Market />
        <Suspense fallback={renderLoader()}>
          <Testimonials />
        </Suspense>
        {/*<Suspense fallback={renderLoader()}>
          <Landing />
    </Suspense>*/}
        <Founder />
        <Suspense fallback={renderLoader()}>
          <ContactUs />
        </Suspense>
        <Footer />
      </div>
    );
  }
}

export default App;
