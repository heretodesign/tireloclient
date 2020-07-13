import React from 'react'
import { Link } from "react-router-dom"
// import { Button, Columns} from "react-bulma-components/full"
import 'react-bulma-components/dist/react-bulma-components.min.css'
import imgOffice from '../../../assets/s-o-c-i-a-l-c-u-t-1RT4txDDAbM-unsplash.jpg'

const AboutUs = () => {
  return (
    <>
     <section className="section is-paddingless-horizontal" id="aboutPage">
        <div className="container grid is-large" id="contAboutPage">
            <div className="firstsection">
                <div className="content">
                    <p className="subtitle is-6 has-text-left has-text-grey has-text-weight-semibold is-uppercase">Your sgdfgsdf logistics solution</p>
                </div>
                <div className="content">
                  <div class="columns">
                    <div class="column is-half">
                      <img className="content" id="imgCover" src={imgOffice} alt="office" />
                    </div>
                    <div class="column">
                      <div className="content" id="contentSide">
                        <h3 className="subtitle is-6 has-text-left is-uppercase" id="headTitle">About Us</h3>
                        <h4 className="subtitle is-6 has-text-left has-text-weight-semibold" id="headingAbout">
                          Source of Products
                        </h4>
                        <p className="subtitle is-6 has-text-left has-text-weight-semibold" id="headPara">
                          Direct product from Refineries in Africa, Russia and the Middle East as well as strategic alliances with selected Crude and Refined Petroleum
                          Traders across the globe. As such we are able to ensure that our Clients are supplied timeously, in accordance with their specific requirements,
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

export default AboutUs;
