import React, { Component } from 'react'
import { Link } from "react-router-dom"
import 'react-bulma-components/dist/react-bulma-components.min.css'


const BtmFooter = () => {

  return (
    <footer className="section footer-btm">
        <div className="container content has-text-centered">
            <div className="columns">
                <div className="column is-2">
                    <div className="firstFooter">
                        <h1 className="title is-4 has-text-weight-bold has-text-centered is-uppercase" id="mainFooter"><Link to="/" id="mainFooter"> Home </Link></h1>
                    </div>
                </div>
                <div className="column is-2">
                    <div className="firstFooter">
                        <h1 className="title is-4 has-text-weight-bold has-text-centered is-uppercase" id="mainFooter"><Link to="/" id="mainFooter"> Solutions </Link></h1>
                    </div>
                </div>
                <div className="column is-2">
                    <div className="firstFooter">
                        <h1 className="title is-4 has-text-weight-bold has-text-centered is-uppercase" id="mainFooter"><Link to="/about-us" id="mainFooter"> About Us </Link></h1>
                    </div>
                </div>
                <div className="column is-2">
                    <div className="firstFooter">
                        <h1 className="title is-4 has-text-weight-bold has-text-centered is-uppercase" id="mainFooter">Logistic Knowledge</h1>
                    </div>
                </div>
                <div className="column is-2">
                    <div className="firstFooter">
                    <h1 className="title is-4 has-text-weight-bold has-text-centered  is-uppercase" id="mainFooter">Careers <Link to="/careers-at-srp" className="is-small hiring-btn is-active">Join Us</Link></h1>
                    </div>
                </div>
                <div className="column is-2">
                    <div className="firstFooter">
                    <h1 className="title is-4 has-text-weight-bold has-text-centered is-uppercase" id="mainFooter">Social Media</h1>
                    </div>
                </div>
            </div>
        </div>
        <section className="section" id="reserved">
            <div className="container">
                <div className="columns">
                    <div className="column is-half is-offset-one-quarter">
                        <div className="content">
                            <div className="subtitle is-5 has-text-white">
                                <p className="has-text-centered has-text-weight-light">
                                    <a href="#" className="has-text-centered is-5" id="mainFooter">Seth Resources Petroleum<br />Plot 54368, iTowers North, Unit 4A CBD,<br /> Gaborone, Botswana</a>
                                </p>
                                <p className="has-text-centered has-text-weight-light">
                                    <a href="#" className="has-text-centered" id="mainFooter">© 2020 Seth Resources Petroleum. All rights reserved.</a>
                                </p>
                                <p className="has-text-centered is-medium">Botswana | BWP</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </footer>
    );
}

export default BtmFooter;
