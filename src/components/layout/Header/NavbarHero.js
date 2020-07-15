import React, { Component } from 'react';
// import { Button, Columns, Navbar, Header} from "react-bulma-components/full"
import 'react-bulma-components/dist/react-bulma-components.min.css'
// import logo from '../../../assets/logo.png'


const NavbarHero = () => {

  return (
    <>
      <section className="hero is-primary is-medium imgLanding">
        <div className="is-paddingless-horizontal topNav">
            <div className="container-fluid grid">
                <div className="firstsection">
                    <p className="subtitl is-5 has-text-centered isdata">
                    <strong className="has-text-white">RSP</strong> – dedicated fuel distributer & forwarder, powering economic growth
                    </p>
                 </div>
            </div>
        </div>
        <div className="hero-head">
          <nav className="navbar">
            <div className="container">
              <div className="navbar-brand" id="logoStyle">
                <a className="navbar-item" href="https://freighthub.com/en/">
                  Seth Resources | Petroleum
                </a>
                <span className="navbar-burger burger" data-target="navbarMenuHeroA">
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
              </div>
              <div id="navbarMenuHeroA" className="navbar-menu">
                <div className="navbar-end">
                  <a className="navbar-item">
                    <strong>Why SethResources</strong>
                  </a>
                  <a className="navbar-item">
                    Solutions
                  </a>
                  <a className="navbar-item">
                    About Us
                  </a>
                  <a className="navbar-item">
                    Logistics Knowledge
                  </a>
                  <span className="navbar-item">
                  <a className="button is-info is-outlined">
                    Talk to us
                  </a>
                  </span>
                </div>
              </div>
            </div>
          </nav>
        </div>

        <div className="hero-body">
          <div className="container has-text-centered">
          <div className="firstsection">
              <div className="content">
                <div className="columns">
                  <div className="column is-half">
                    <p className="subtitle has-text-left is-2" style={colorStyle}>
                      Seth Resources Petroleum – Specializing in Petroleum Transportation
                    </p>

                    {/* <h1 className="title has-text-left has-text-weight-light" id="titleBlack">Seth Resources Petroleum – Specializing in Petroleum Transportation
                    </h1> */}
                  </div>
                  <div className="column"></div>
                </div>
                <div className="columns">
                  <div className="column is-two-fifths">
                    <p className="has-text-left"> We are your co-pilot:
                        from remote regions to cities and beyond borders, with our fleet of delivery fuel tankers & vehicles,
                        SPR offers comfortable, realiable solutions to ensure that your petroleum delivery are made on time, every time. Our years of experience spans over 5 years,
                      You benefit from reliable processes, transparent data and an efficient supply chain.
                     </p>
                  </div>
                  <div className="column"></div>
                </div>
              </div>
              <div className="content" id="landingForm">
                <div className="columns">
                  <div className="column is-one-quarter">
                    <a className="button is-large is-info has-test-small is-fullwidth" id="landBtn">Talk to us</a>
                  </div>
                  <div className="column"></div>
                </div>

              </div>

           </div>
          </div>
        </div>
      </section>
    </>
  );
}

const headerStyle = {
  fontSize: '2.6rem',
  marginTop: '80px',
  color: '#011240'
}

const paragraphStyle = {
  fontSize: '1.2rem',
  color: '#011240'
}

const colorStyle = {
  color: '#fff',
  fontSize: '2.8rem',
  fontWeight: 'bolder'
}

export default NavbarHero;
