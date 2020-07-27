import React from 'react'
import imgOffice from '../../../assets/sippakorn-yamkasikorn-0aJOTBQfEFE-unsplash.jpg'
import 'react-bulma-components/dist/react-bulma-components.min.css'

const Founder = () => {
  return (
    <>
      <section className="section is-paddingless-horizontal" style={founderStyle}>
        <div className="grid is-large" id="founderWords">
          <div className="firstsection">
              <div className="content">
                  <p className="subtitle is-6 has-text-left has-text-grey has-text-weight-semibold is-uppercase">
                  </p>
              </div>
              <div className="content">
                <div class="columns" style={innerStyle}>
                  <div class="column is-two-thrids">
                    <div className="content" id="contentSide" style={parentDiv}>
                      <h3 className="subtitle is-6 has-text-left is-uppercase" id="headTitle" style={textColor}>Our Pioneers Message</h3>
                      <p className="has-text-left" style={paragraphStyle}>
                        Our vision has always been and is to resource and supply sufficient oil and petroleum resources to enable our partners and clients throughout the region to function in a time to great stress and uncertainty. 
                        During the global pandemic season, we've further reiterated our ambition to scale our business and acquire more clients, and therefore create job opportunities for the right talent to join our growing SRP family.  
                      </p>
                      <br />
                      <p className="has-text-left" style={colorStyle}>
                        Brian, Tirelo && Keabetswe
                      </p>
                      <h4 className="subtitle is-6 has-text-left has-text-weight-semibold" style={marginS}>
                        The Founding Team
                      </h4>
                    </div>
                  </div>
                  <div class="column is-one-third" id="founderImg">
                    {/* <img className="content" src={imgOffice} height="100%" width="100%" id="imgCover" alt="office" /> */}
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
  marginBottom: '0px',
  color: '#fff'
}
const colorStyle = {
  color: '#fff'
}

const marginS = {
  marginTop: '10px',
  color: '#fba502'
}

const parentDiv = {
  marginTop: '80px',
  marginLeft: '70px',
  marginRight: '50px'
}

const founderStyle = {
  padding: '0px 0px',
  // background: '#005fbf',
  // background: '#084a8c',
  background: '#003468',
  // background: '#F6F9FF',
  color: '#011240'
}

const innerStyle = {
  height: '500px'
}

const textColor = {
  color: '#9aa8bd'
}

export default Founder;
