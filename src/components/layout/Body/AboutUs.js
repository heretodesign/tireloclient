import React from 'react'
import { Link } from "react-router-dom"
// import { Button, Columns} from "react-bulma-components/full"
import 'react-bulma-components/dist/react-bulma-components.min.css'
import imgOffice from '../../../assets/dimitry-anikin-ATyawSn-NsE-unsplash.png'

const AboutUs = () => {
  return (
    <>
      <section className="section is-paddingless-horizontal" id="aboutPage">
        <div className="container grid is-large" id="contAboutPage">
            <div className="firstsection">
                <div className="content">
                    {/* <p className="subtitle is-6 has-text-left has-text-grey has-text-weight-semibold is-uppercase">Your sgdfgsdf logistics solution</p> */}
                </div>
                <div className="content">
                  <div class="columns">
                    <div class="column is-half">
                      <img className="content" id="imgCover" src={imgOffice} alt="office" />
                    </div>
                    <div class="column">
                      <div className="content" id="contentSide">
                        <h3 className="subtitle is-6 has-text-left is-uppercase" id="headTitle">Where we get our supply</h3>
                        <p className="subtitle has-text-left is-2" style={colorStyle}>Source of Products</p>

                        <p className="has-text-left" style={paragraphStyle}>
                          Direct product from Refineries in Africa, Russia and the Middle East as well as strategic alliances with selected Crude and Refined Petroleum
                          Traders across the globe.<br /><br /> As such we are able to ensure that our Clients are supplied timeously, in accordance with their specific requirements,
                          and at competitive pricing. 
                        </p>
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

const parentDiv = {
  marginTop: '80px',
  marginLeft: '70px',
  marginRight: '50px'
}

const founderStyle = {
  padding: '0px 0px',
  background: '#1167bf',
  // background: '#001240',
  // background: '#F6F9FF',
  color: '#011240'
}

const innerStyle = {
  height: '500px'
}

export default AboutUs;
