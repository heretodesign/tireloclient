import React from 'react'
import { Link } from "react-router-dom"
// import { Button, Columns} from "react-bulma-components/full"
import 'react-bulma-components/dist/react-bulma-components.min.css'
import imgOffice from '../../../assets/vladimir-patkachakov-ZAP1duyEIR4-unsplash.jpg'

const Market = () => {
  return (
    <>
     <section className="section is-paddingless-horizontal" id="market-section">
        <div className="container grid is-large" id="contAboutPage">
            <div className="firstsection">
                <div className="content">
                  <h4 className="subtitle is-3 has-text-left has-text-weight-semibold" id="headingAbout" style={textColor}>
                    Product Range and Availability
                  </h4>
                </div><br />
                <div className="content">
                  <div className="columns">
                    <div className="column">
                      
                      <div className="columns">
                        <div className="column is-half">
                          <h6 id="marketTitle">Diesel 50ppm</h6>
                          <p id="marketPara">
                            Off-Grid (South Africa)<br />
                            Beird and Matota Deports (Mozambique)<br />
                            Road Tanker <br />
                            Vessel
                          </p>
                        </div>
                        <div className="column">
                          <h6 id="marketTitle">Diesel 500ppm</h6>
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
                          <h6 id="marketTitle">Lead Replacement Petrol 93 (ULP93)</h6>
                          <p id="marketPara">
                            Off-Grid (South Africa)<br />
                            Road Tanker<br />
                            Vessel
                          </p>
                        </div>
                        <div className="column">
                          <h6 id="marketTitle">Lead Replacement Petrol 95 (ULP95)</h6>
                          <p id="marketPara">
                            Off-Grid (South Africa)<br />
                            Road Tanker<br />
                            Vessel
                          </p>
                        </div>
                      </div>
                      <div className="columns">
                        <div className="column is-half">
                          <h6 id="marketTitle">Liquefied Natural Gas (LNG)</h6>
                          <p id="marketPara">
                            Vessel
                          </p>
                        </div>
                        <div className="column">
                          <h6 id="marketTitle">Liquefied Natural Gas (LNG)</h6>
                          <p id="marketPara">
                            Vessel
                          </p>
                        </div>
                      </div>
                      <div className="columns">
                        <div className="column is-half">
                          <h6 id="marketTitle">Jet Fuel</h6>
                          <p id="marketPara">
                            Vessel
                          </p>
                        </div>
                        <div className="column">
                          <h6 id="marketTitle">Crude</h6>
                          <p id="marketPara">
                            Vessel
                          </p>
                        </div>
                      </div>
                      <div className="columns">
                        <div className="column is-half">
                          <h6 id="marketTitle">Mazut</h6>
                          <p id="marketPara">
                            Vessel
                          </p>
                        </div>
                        <div className="column">
                          <h6 id="marketTitle"></h6>
                          <p id="marketPara">
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

const textColor = {
  color: '#003468'
}
export default Market;
