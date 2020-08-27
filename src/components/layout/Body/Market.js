import React from 'react'
import { Link } from "react-router-dom"
import 'react-bulma-components/dist/react-bulma-components.min.css'
import imgOffice from '../../../assets/vladimir-patkachakov-ZAP1duyEIR4-unsplash.jpg'
import styled from 'styled-components'

const AdvParagraph = styled.p`
  font-size: 14px;
  color: #9aa8bd;
  letter-spacing: 1.2px;
`
const AdvTitle = styled.p`
  font-size: 2.6rem;
  color: #003468;
  font-family: 'Open Sans', sans-serif;
  margin-top: -10px;

  @media (max-width: 768px) { 
    color: #003468;
    font-family: 'Open Sans', sans-serif;
    font-size: 2rem;
    text-align: center;
	}
`
const ServicesPara = styled.p`
  font-size: 1.1rem;
  font-weight: 600;
  margin-top: 0px;
  color: #003468;
`

const Market = () => {
  return (
    <>
      <section className="section is-paddingless-horizontal" id="market-section">
        <div className="container grid is-large" id="contAboutPage">
            <div className="firstssection">
                <div className="content">
                  <div className="columns">
                    <div className="column">
                      <AdvParagraph className="subtitle is-6 has-text-left is-uppercase" id="headTitle">Resources Availability</AdvParagraph>
                      <AdvTitle className="subtitle has-text-left is-2">Product Range and Availability</AdvTitle>
                      <div className="columns">
                        <div className="column is-half">
                          <ServicesPara id="marketTitle">Diesel 50ppm</ServicesPara>
                          <p id="marketPara">
                            Off-Grid (South Africa)<br />
                            Beird and Matota Deports (Mozambique)<br />
                            Road Tanker <br />
                            Vessel
                          </p>
                        </div>
                        <div className="column">
                          <ServicesPara id="marketTitle">Diesel 500ppm</ServicesPara>
                          <p id="marketPara">
                            Off-Grid (South Africa)<br />
                            Beird and Matota Deports (Mozambique)<br />
                            Fetuka and Msasa Depots (Zimbabwe)<br />
                            Road Tanker<br />
                            Vessel
                          </p>
                        </div>
                      </div>
                      <div className="columns">
                        <div className="column is-half">
                          <ServicesPara id="marketTitle">Lead Replacement Petrol 93 (ULP93)</ServicesPara>
                          <p id="marketPara">
                            Off-Grid (South Africa)<br />
                            Road Tanker<br />
                            Vessel
                          </p>
                        </div>
                        <div className="column">
                          <ServicesPara>Lead Replacement Petrol 95 (ULP95)</ServicesPara>
                          <p id="marketPara">
                            Off-Grid (South Africa)<br />
                            Road Tanker<br />
                            Vessel
                          </p>
                        </div>
                      </div>
                      <div className="columns">
                        <div className="column is-half">
                          <ServicesPara>Liquefied Natural Gas (LNG)</ServicesPara>
                          <p id="marketPara">
                            Vessel
                          </p>
                        </div>
                        <div className="column">
                          <ServicesPara>Liquefied Natural Gas (LNG)</ServicesPara>
                          <p id="marketPara">
                            Vessel
                          </p>
                        </div>
                      </div>
                      <div className="columns">
                        <div className="column is-one-third">
                          <ServicesPara>Jet Fuel</ServicesPara>
                          <p id="marketPara">
                            Vessel
                          </p>
                        </div>
                        <div className="column is-one-third">
                          <ServicesPara>Crude</ServicesPara>
                          <p id="marketPara">
                            Vessel
                          </p>
                        </div>
                        <div className="column is-one-third">
                          <ServicesPara>Mazut</ServicesPara>
                          <p id="marketPara">
                            Vessel
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="column is-half">
                      <img className="content" id="imgCover" src={imgOffice} alt="office" />
                    </div>
                  </div>
                </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Market;
