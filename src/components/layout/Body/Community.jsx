import React from 'react';
import { Link } from "react-router-dom"
import imgOffice from '../../../assets/elderly.jpg'

const cardTitle = {
  color: '#003468',
  textDecoration: 'underline',
  textAlign: 'center',
  fontSize: '1.2rem',
  ':hover': {
    color: '#fba502'
  }
}

const paragraphStyle = {
  fontSize: '1.2rem',
  color: '#011240'
}

const colorStyle = {
  color: '#011240'
}


const Community = () => {
  return (
    <>
      <section className="section is-paddingless-horizontal" id="servicesPage">
        <div className="container grid is-large" id="contAboutPage">
          <div className="firstsection">
              <div className="content">
                  <p className="subtitle is-6 has-text-left has-text-grey has-text-weight-semibold is-uppercase">
                  
                  </p>
              </div>
              <div className="content">
                <div class="columns">
                  
                  <div class="column">
                    <div className="content" id="contentSide">
                      <h3 className="subtitle is-6 has-text-left is-uppercase" id="headTitle">COMMUNITY PARTNERSHIP</h3>
                      <p className="subtitle has-text-left is-2" style={colorStyle}>Philanthropic Endeavor</p>

                      <p className="has-text-left" style={paragraphStyle}>
                        We’re deeply invested in leaving our communities better, we have adopted Theopathy Elderly Care Association which is an NGO that aims at improving the well-being of frail elderlies affected by among other diseases: Diabetes, High Blood Pressure, Kidney Diseases, Stroke disease etc.
                        <br /><br />The aim is to relieve the care giver by providing around the clock day care and transitional care for those discharged from hospitals whom the care giver is still adjusting to caring for. <br /><br /> They do wellness activities including health screening for diabetes and hypertension nationwide.
                        <br /><br />Building stronger community together.
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
    </>
  );
}

export default Community;
