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
                      <h3 className="subtitle is-6 has-text-left is-uppercase" id="headTitle">About The Company</h3>
                      <h4 className="subtitle is-6 has-text-left has-text-grey has-text-weight-semibold" id="headingAbout">
                        Why do you think you are the right candidate for the position?
                      </h4>
                      <p className="subtitle is-6 has-text-left has-text-weight-semibold" id="headPara">
                        Imagine a workplace which encourages you to take on responsibility 
                        and where your ideas will be heard and implemented. Imagine a fast-paced 
                        environment where your performance makes the difference. 
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

export default OurServices;
