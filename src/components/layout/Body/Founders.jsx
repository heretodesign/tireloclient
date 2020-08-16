import React from 'react';
import { Link } from "react-router-dom"
// import { Button, Columns} from "react-bulma-components/full"
import 'react-bulma-components/dist/react-bulma-components.min.css'
import imgOffice from '../../../assets/dimitry-anikin-ATyawSn-NsE-unsplash.png'

const Founders = () => {
  return (
    <>
      <section className="section is-paddingless-horizontal" id="aboutPage">
        <div className="container-fluid grid is-large" id="contAboutPage">
            <div className="firstsection">
                <div className="content">
                  <div class="columns">
                    <div class="column is-two-thirds">
                      <div className="content" id="contentSide">
                        <h3 className="subtitle is-6 has-text-left is-uppercase" id="headTitle">Our Pioneers Message</h3>
                        <br />
                        <p className="has-text-left" style={paragraphStyle}>
                          Our vision has always been and is to resource and supply sufficient oil and petroleum resources to enable our partners and clients throughout the region to function in a time to great stress and uncertainty. 
                          During the global pandemic season, we've further reiterated our ambition to scale our business and acquire more clients, and therefore create job opportunities for the right talent to join our growing SRP family.  
                        </p>
                        <br />
                        <p className="has-text-left" style={colorsStyle}>
                          Brian, Tirelo && Keabetswe
                        </p>
                        <h4 className="subtitle is-6 has-text-left has-text-weight-semibold" style={marginS}>
                          The Founding Team
                        </h4>
                      </div>
                    </div>
                    <div class="column" id="founderImg">
                      {/* <img className="content" id="imgCover" src={imgOffice} alt="office" /> */}
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
  marginBottom: '0px',
  color: '#fff'
}

const colorsStyle = {
  color: '#fff'
}

const marginS = {
  marginTop: '10px',
  color: '#fba502'
}

export default Founders;
