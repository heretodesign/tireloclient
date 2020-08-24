import React from 'react'
import 'react-bulma-components/dist/react-bulma-components.min.css'
import { Link } from "react-router-dom"
import styled from 'styled-components'
import imgOffice from '../assets/christina-wocintechchat-com-vLwH8bWoi_8-unsplash.jpg'
import Navbar from '../components/layout/Header/Navbar'
import { faAddressCard, faPhone, faShieldAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Section = styled.section`
  background: #003468;
  color: white;
`

const HeaderTitle = styled.p`
  font-size: 2.6rem;
  margin-top: 0px;
  color: #fff;
`
const MainPara = styled.p`
  font-size: 1.2rem;
  color: #fff;
`

const TextPara = styled.p`
  font-size: 1.2rem;
  color: #003468;
`
const Response = styled.p`
  font-size: 1.2rem;
  color: #fff;
  margin-top: 20px;
  font-weight: bold;
`


const Contact = () => {
  return (
    <>
      <Navbar />
      <Section className="section is-paddingless-horizontal">
      <br />
      <br />
        <div className="container grid is-large">
            <div className="firstsectionS">
              <div className="content">
                <div class="columns">
                  <div class="column">
                    <div className="content">
                      <HeaderTitle className="has-text-left is-uppercase">Contact Us – at Seth Resources Petroluem</HeaderTitle>
                      <MainPara className="has-text-left">
                        Our world class team of dedicated support will get back to within the next 2 hours upon receiving your inquiry.
                      </MainPara>
                    </div>
                  </div>
                  <div class="column is-half">
                    <img className="content" src={imgOffice} id="imgCover" alt="office" />
                  </div>
                </div>
              </div>
            </div>
        </div>
      </Section>
      <section className="section is-paddingless-horizontal">
        <div className="container grid is-large">
          <div className="firstsections">
              <div className="content">
                <p className="subtitle is-2" style={colorStyle}>Our dedicated team will respond within the next 24hours</p>
              </div>
              <div className="content">
                <div class="columns">
                  <div class="column">
                    <div className="content">
                      <h3 className="subtitle is-6 has-text-left is-uppercase" id="headTitle"></h3>
                      <p className="has-text-left" style={paragraphStyle}>
                        Reach our team via phone: 
                      </p>
                      <TextPara className="has-text-left">
                        +267 71572088  or  +267 75034118   &   +267 74237959
                      </TextPara>
                      
                    </div>
                  </div>
                </div>
                <div className="content">
                  <h3 style={colorStyle}>Fill all Details (email)</h3>
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
                                <Response className="has-text-left">{' '} Our Response Process</Response>
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
