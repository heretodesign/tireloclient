import React from 'react'
import 'react-bulma-components/dist/react-bulma-components.min.css'
import imgOffice from '../../../assets/dimitry-anikin-ATyawSn-NsE-unsplash.png'
import styled from 'styled-components'

const AboutParagraph = styled.p`
  font-size: 1.2rem;
  margin-top: -10px;
  color: #fff;
  font-family: 'Open Sans', sans-serif;
  @media (max-width: 768px) { 
    text-align: center;
    margin-top: -10px;
    color: #fff;
    font-family: 'Open Sans', sans-serif;
	}
`
const AboutTitle = styled.p`
  font-size: 2.6rem;
  color: #fff;
  font-family: 'Open Sans', sans-serif;

  @media (max-width: 768px) { 
    color: #fff;
    font-family: 'Open Sans', sans-serif;
    font-size: 2rem;
    text-align: center;
	}
`
const AboutHeader = styled.p`
  font-size: 2.6rem;
  margin-top: 0px;
  color: #011240;
  font-family: 'Open Sans', sans-serif;
`

const AboutUs = () => {
  return (
    <>
      <section className="section is-paddingless-horizontal" id="aboutPage">
        <div className="container grid is-large" id="contAboutPage">
            <div className="firstssection">
                <div className="content">
                  <div class="columns">
                    <div class="column is-half">
                      <img className="content" id="imgCover" src={imgOffice} alt="office" />
                    </div>
                    <div class="column">
                      <div className="content" id="contentSide">
                        <AboutHeader className="subtitle is-6 has-text-left is-uppercase" id="headTitle">Where we get our supply</AboutHeader>
                        <AboutTitle className="subtitle has-text-left is-2">Source of Products</AboutTitle>
                        <AboutParagraph className="has-text-left">
                          Direct product from Refineries in Africa, Russia and the Middle East as well as strategic alliances with selected Crude and Refined Petroleum
                          Traders across the globe.<br /><br /> As such we are able to ensure that our Clients are supplied timeously, in accordance with their specific requirements,
                          and at competitive pricing. 
                        </AboutParagraph>
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

export default AboutUs;
