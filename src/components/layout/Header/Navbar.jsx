import React from 'react';
import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <>
            <section className="hero is-primary is-medium container-fluid imgLanding">
                <div className="is-paddingless-horizontal topNav">
                    <div className="container-fluid grid">
                        <div className="devsection">
                            <p className="subtitl is-5 has-text-centered isdata">
                            <strong className="has-text-white">RSP</strong> – dedicated fuel distributer & forwarder, powering economic growth and sustainable living –– +267 71572088 | 75034118 | 74237959
                            </p>
                        </div>
                    </div>
                </div> 

                <nav className="navbar" role="navigation" aria-label="main navigation" style={bkStyle}>
                    <div className="container">
                        <div className="navbar-brand" id="logoStyle">
                            <a className="navbar-item" href="https://sethresourcespetroleum.com"  style={fullStyle}>
                                <strong className="has-text-white is-2">Seth Resources Petroleum</strong>
                            </a>

                            <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                            </a>
                        </div>

                        <div id="navbarBasicExample" className="navbar-menu">
                            <div className="navbar-end">
                                    <div className="navbar-item">
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
                                    <div className="buttons">
                                        <Link 
                                            to="/contact-us" 
                                            className="navbar-item button has-text-small" 
                                            style={bkStyle}>
                                            Contact Us
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </section>
        </>
    );
}

const pStyle = {
    color: '#fff'
}

const bkStyle = {
    // background: '#1167bf',
    background: '#003468',
    color: 'white'
}

const fullStyle = {
    background: '#white',
    color: '#011240'
}
export default Navbar;
