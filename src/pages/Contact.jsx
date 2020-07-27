import React from 'react'
import 'react-bulma-components/dist/react-bulma-components.min.css'
import { Link } from "react-router-dom"
import imgOffice from '../assets/christina-wocintechchat-com-vLwH8bWoi_8-unsplash.jpg'
import Navbar from '../components/layout/Header/Navbar'
import { faAddressCard, faPhone, faShieldAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Contact = () => {
  return (
    <>
    <Navbar />
    <br />
    <br />
      <section className="section is-paddingless-horizontal" id="foundersSection">
        <div className="container grid is-large" id="founderWords">
            <div className="firstsection">
              <div className="content">
                <div class="columns">
                  <div class="column">
                    <div className="content" id="contentSide">
                      <h2 className="has-text-left is-uppercase" style={headerStyle}>Contact Us – at Seth Resources Petroluem</h2>
                      <p className="has-text-left" style={paragraphStyle}>
                        Our world class team of dedicated support will get back to within the next 2 hours upon receiving your inquiry.
                      </p>
                    </div>
                  </div>
                  <div class="column is-half">
                    <img className="content" src={imgOffice} id="imgCover" alt="office" />
                  </div>
                </div>
              </div>
            </div>
        </div>
      </section>
      <section className="section is-paddingless-horizontal" id="foundersSection">
        <div className="container grid is-large" id="founderWords">
          <div className="firstsection">
              <div className="content">
                <p className="subtitle is-2" style={colorStyle}>Our dedicated team will respond within the next 24hours</p>
              </div>
              <div className="content">
                <div class="columns">
                  <div class="column">
                    <div className="content" id="contentSide">
                      <h3 className="subtitle is-6 has-text-left is-uppercase" id="headTitle">Our Pioneer</h3>
                      <p className="has-text-left" style={paragraphStyle}>
                      </p>
                      
                    </div>
                  </div>
                </div>
                <div className="content">
                  <h3 style={colorStyle}>Fill all Details</h3>
                </div>
                <div class="columns">
                  <div class="column is-half">
                    <form>
                      <div class="field">
                        <div class="control">
                          <input class="input is-info" type="text" placeholder="First & Last Name*" />
                        </div>
                      </div>
                      <div class="field">
                        <div class="control">
                          <input class="input is-info" type="text" placeholder="Phone Number*" />
                        </div>
                      </div>
                      <div class="field">
                        <div class="control">
                          <input class="input is-info" type="text" placeholder="Email" />
                        </div>
                      </div>
                            <div class="field">
                            <div class="control">
                                <textarea class="textarea is-info" type="text" placeholder="message*" />
                            </div>
                            <br />
                            <a className="button is-large is-fullwidth" style={bkStyle}>Send</a>
                        </div>
                    </form>
                  </div>
                  <div class="column is-one-third">
                  <div class="card" style={bkStyle}>
                    <div class="card-content">
                        <div class="content is-medium">
                            
                            <ul class="menu-list" style={pStyle}>
                                <li>
                                <h3 className="has-text-left" style={pStyle}>{' '} Our Response Process</h3>
                                <ul style={pStyle}>
                                    <li><p style={pStyle}>Fill in the form </p></li>
                                    <li><p style={pStyle}>Email/Phone conversation </p></li>
                                </ul>
                                </li>
                            </ul>
                            <br />
                        </div>
                    </div>
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
  color: '#003468'
}
const paragraphStyle = {
  fontSize: '1.2rem',
  color: '#003468'
}
const colorStyle = {
  color: '#003468'
}
const pStyle = {
  color: '#fff',
  marginTop: '20px'
}
const bkStyle = {
  background: '#003468',
  color: 'white'
}

export default Contact;
