import React from 'react'
import { Link } from "react-router-dom"
import imgOffice from '../../../assets/s-o-c-i-a-l-c-u-t-1RT4txDDAbM-unsplash.jpg'
import 'react-bulma-components/dist/react-bulma-components.min.css'
import styled from 'styled-components'

const ServicesParagraph = styled.p`
  font-size: 1.2rem;
  margin-top: -10px;
  color: #003468;
  font-family: 'Open Sans', sans-serif;

  @media (max-width: 768px) { 
    text-align: center;
    color: #003468;
    margin-top: -10px;
    font-family: 'Open Sans', sans-serif;
	}
`
const ServicesTitle = styled.p`
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
const ServicesGet = styled.p`
  margin-top: 0px;
  color: #011240;
  font-family: 'Open Sans', sans-serif;
`

const OurServices = () => {
  return (
    <>
      <section className="section is-paddingless-horizontal" id="servicesPage">
        <div className="container grid is-large" id="contAboutPage">
          <div className="firstssection">
              <div className="content">
                <div class="columns">
                  <div class="column">
                    <div className="content">
                      <ServicesGet className="subtitle is-6 has-text-left is-uppercase" id="headTitle">Introduction to the Company</ServicesGet>
                      <ServicesTitle className="subtitle has-text-left is-2">Get to know us</ServicesTitle>
                      <ServicesParagraph className="has-text-left">
                        Seth Resources (Pty) Ltd, is a Botswana company founded in 2015; The company is incorporated under Botswana Law (100% citizen owned), to offer customers the widest range of services 
                        in respect of Procurement and Logistics of Oil & gas Derivatives including the storage, 
                        handling and distribution (Transportation) of various products according to the needs of the users and also expands the activities out of Botswana boundaries. 
                        <br />
                        <br />
                        <Link 
                          to="/about-us" 
                          class="title is-underlined has-text-centered" 
                          style={cardTitle}>
                            Read More
                        </Link>
                      </ServicesParagraph>
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
const cardTitle = {
  color: '#003468',
  textDecoration: 'underline',
  textAlign: 'center',
  fontSize: '1.2rem',
  ':hover': {
    color: '#fba502'
  }
}

export default OurServices;
