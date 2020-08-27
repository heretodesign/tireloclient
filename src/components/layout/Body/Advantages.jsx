import React from 'react'
import { Link } from "react-router-dom"
import imgOffice from '../../../assets/shaah-shahidh--subrrYxv8A-unsplash.png'

import 'react-bulma-components/dist/react-bulma-components.min.css'
import styled from 'styled-components'

const AdvParagraph = styled.p`
  font-size: 1.2rem;
  margin-top: 10px;
`
const AdvTitle = styled.p`
  font-size: 2.6rem;
  color: #003468;
  font-family: 'Open Sans', sans-serif;

  @media (max-width: 768px) { 
    color: #003468;
    font-family: 'Open Sans', sans-serif;
    font-size: 2rem;
    text-align: center;
	}
`
const AdvGet = styled.p`
  font-size: 2.6rem;
  margin-top: 0px;
  color: #011240;
  font-family: 'Open Sans', sans-serif;
`
const Advantages = () => {
  return (
    <>
      <section className="section is-paddingless-horizontal" id="servicesPage">
        <div className="container grid is-large" id="contAboutPage">
          <div className="firstssection">
              <div className="content">
                <div class="columns">
                  <div class="column">
                    <div className="content">
                      <AdvParagraph className="subtitle is-6 has-text-left is-uppercase" id="headTitle">Introduction to the Company</AdvParagraph>
                      <AdvTitle className="subtitle has-text-left is-2">Competitive Advantages</AdvTitle>
                        <ul class="menu-list" style={pStyle}>
                            <ul style={pStyle}>
                                <li><p style={pStyle}>Vast intellectual capital in the industry </p></li>
                                <li><p style={pStyle}>Competitive pricing by virtue of negotiated supply agreements and streamlined overhead structure </p></li>
                                <li><p style={pStyle}>We engage and understand our Clients specific requirements and have the capacity to provide supply-side solutions specifically tailored to meet each Buyers criterion.</p></li>
                                <li><p style={pStyle}>A proactive rather than reactive approach to business and our Clients requirements.</p></li>
                                <li><p style={pStyle}>Management structured to expedient decision making</p></li>
                            </ul>
                        </ul>
                        <br />
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
    </>
  );
}

const colorStyle = {
  color: '#003468'
}

  const pStyle = {
    color: '#003468',
    marginTop: '20px',
    fontSize: '1.1rem'
  }

export default Advantages;
