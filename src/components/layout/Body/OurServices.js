import React from 'react'
import { Link } from "react-router-dom"
import imgOffice from '../../../assets/s-o-c-i-a-l-c-u-t-1RT4txDDAbM-unsplash.jpg'
// import imgOffice from '../../../assets/christina-wocintechchat-com-vLwH8bWoi_8-unsplash.jpg'

import 'react-bulma-components/dist/react-bulma-components.min.css'

const OurServices = () => {
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
                      <p className="subtitle has-text-left is-2" style={colorStyle}>Get to know us</p>

                      <p className="has-text-left" style={paragraphStyle}>
                        Seth Energy Resources is a privately held Energy Company and division of Seth Resources (Pty) Ltd 
                        established in 2015, whose core business is to Supply and Transport Gas and Liquid Fuels thoughout Africa and the rest of the world.
                        <br />
                        <br />
                        The company has associate offices in Africa, Middle East and Europe which together offer a unique blend of trading, international banking, 
                        structured finances, and marketing experience to the benefit of our client base.
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

export default OurServices;
