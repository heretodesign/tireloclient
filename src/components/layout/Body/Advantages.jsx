import React from 'react'
import { Link } from "react-router-dom"
import imgOffice from '../../../assets/shaah-shahidh--subrrYxv8A-unsplash.png'

import 'react-bulma-components/dist/react-bulma-components.min.css'

const Advantages = () => {
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
                      <h3 className="subtitle is-6 has-text-left is-uppercase" id="headTitle">Introduction to the Company</h3>
                      <p className="subtitle has-text-left is-2" style={colorStyle}>Competitive Advantages</p>

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

const headerStyle = {
  fontSize: '2.6rem',
  marginTop: '80px',
  color: '#011240'
}

const paragraphStyle = {
  fontSize: '1.2rem',
  color: '#011240'
}

const colorStyle = {
  color: '#011240'
}

  const pStyle = {
    color: '#011240',
    marginTop: '20px',
    fontSize: '1.1rem'
  }
  const bkStyle = {
    background: '#1167bf',
    color: 'white'
  }

export default Advantages;
