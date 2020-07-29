import React, { Component } from 'react';
// import { Button, Columns, Navbar, Header} from "react-bulma-components/full"
import 'react-bulma-components/dist/react-bulma-components.min.css'
// import logo from '../../../assets/logo.png'
import { Link } from "react-router-dom"


const NavbarHero = () => {

  return (
    <>
      <section className="hero is-primary is-medium imgLanding">
        <div className="is-paddingless-horizontal topNav">
            <div className="container-fluid grid">
                <div className="devsection">
                    <p className="subtitl is-5 has-text-centered isdata">
                    <strong className="has-text-white">RSP</strong> – dedicated fuel distributer & forwarder, 
                    powering economic growth and sustainable living
                     –– +267 71572088 | 75034118 | 74237959
                    </p>
                </div>
            </div>
        </div>
        <div className="hero-head">
          <nav className="navbar">
            <div className="container">
              <div className="navbar-brand" id="logoStyle">
                <a className="navbar-item" href="https://sethresourcespetroleum.com/">
                  <strong className="has-text-white is-2">Seth Resources Petroleum</strong>
                </a>
                <span className="navbar-burger burger" data-target="navbarMenuHeroA">
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
              </div>
              <div id="navbarMenuHeroA" className="navbar-menu">
                <div className="navbar-end">
                  <Link 
                      to="/" 
                      className="navbar-item has-text-small" 
                      style={bkStyle}>
                      Home
                  </Link>
                  <Link 
                      to="/" 
                      className="navbar-item has-text-small" 
                      style={bkStyle}>
                      Solutions
                  </Link>
                  <Link 
                      to="/" 
                      className="navbar-item has-text-small" 
                      style={bkStyle}>
                      About Us
                  </Link>
                  <Link 
                      to="/" 
                      className="navbar-item has-text-small" 
                      style={bkStyle}>
                      Logistics Knowledge
                  </Link>
                  <Link 
                      to="/careers-at-srp" 
                      className="navbar-item has-text-small" 
                      style={bkStyle}>
                      Careers
                  </Link>
         
                  <span className="navbar-item">
                    <Link 
                        to="/contact-us" 
                        className="navbar-item button has-text-small contactBtn" 
                        >
                        Contact Us
                    </Link>
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
                    <p className="subtitle has-text-left is-1" style={colorStyle}>
                      <strong>Seth Resources</strong> <span style={spanColor}>Petroleum</span> – Specializing in Petroleum Transportation
                    </p>

                    {/* <h1 className="title has-text-left has-text-weight-light" id="titleBlack">Seth Resources Petroleum – Specializing in Petroleum Transportation
                    </h1> */}
                  </div>
                </div>
                <div className="columns">
                  <div className="column is-half">
                    <p className="has-text-left"> We are your co-pilot:
                        from remote regions to cities and beyond borders, with our fleet of delivery fuel tankers & vehicles,
                        SPR offers comfortable, realiable solutions to ensure that your petroleum delivery are made on time, every time. 
                        {/* Our years of experience spans over 5 years, */}
                      {/* You benefit from reliable processes, transparent data and an efficient supply chain. */}
                     </p>
                  </div>
                </div>
              </div>
              <div className="content" id="landingForm">
                <div className="columns">
                  <div className="column is-one-quarter">
                    <a className="button is-medium has-test-small is-fullwidth" id="landBtn">Talk to sales</a>
                  </div>
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

const bkStyle = {
  background: 'transparent',
  color: 'white'
}

const colorStyle = {
  color: '#fff',
  fontSize: '2.8rem',
  fontWeight: 'bolder'
}

const spanColor = {
  color: '#fba502'
}

const bgColor = {
  background: '#003468',
}

export default NavbarHero;
