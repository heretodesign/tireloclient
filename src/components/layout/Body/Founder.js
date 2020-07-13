import React from 'react'
import { Link } from "react-router-dom"
import imgOffice from '../../../assets/s-o-c-i-a-l-c-u-t-1RT4txDDAbM-unsplash.jpg'
// import imgOffice from '../../../assets/christina-wocintechchat-com-vLwH8bWoi_8-unsplash.jpg'

import 'react-bulma-components/dist/react-bulma-components.min.css'

const Founder = () => {
  return (
    <>
      <section className="section is-paddingless-horizontal" id="foundersSection">
        <div className="container grid is-large" id="founderWords">
          <div className="firstsection">
              <div className="content">
                  <p className="subtitle is-6 has-text-left has-text-grey has-text-weight-semibold is-uppercase">
                  </p>
              </div>
              <div className="content">
                <div class="columns">

                  <div class="column is-two-thrids">
                    <div className="content" id="contentSide">
                      <h3 className="subtitle is-6 has-text-left is-uppercase" id="headTitle">Our Pioneer</h3>
                      <h4 className="subtitle is-6 has-text-left has-text-grey has-text-weight-semibold" id="headingAbout">
                        We endeveour to solve our countries fuel crisis during the pandemic and beyond.
                      </h4>
                      <p className="subtitle is-6 has-text-left has-text-weight-semibold" id="headPara">
                        Our vision to resource and supply sufficient petroluem resource in the Southern hemisphere
                      </p>
                    </div>
                  </div>
                  <div class="column is-one-third">
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

export default Founder;
