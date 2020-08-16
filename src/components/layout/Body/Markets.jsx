import React from 'react';
// import { Button, Columns} from "react-bulma-components/full"
import 'react-bulma-components/dist/react-bulma-components.min.css'
import imgfice from '../../../assets/josue-isai-ramos-figueroa-n2NBgIx3A28-unsplash.jpg'
import newD from '../../../assets/jay-skyler-4vkqO73C7O8-unsplash.jpg'
import mine from '../../../assets/juniperphoton-KKFKrOu3BVc-unsplash.png'
import buyer from '../../../assets/sippakorn-yamkasikorn-0aJOTBQfEFE-unsplash.jpg'

const Markets = () => {
  return (
    <>
      <section className="section is-paddingless-horizontal">
        <div className="container grid is-large">
            <div className="firstsection">
                <div className="content">
                    {/* <p className="subtitle is-6 has-text-left has-text-grey has-text-weight-semibold is-uppercase">Your sgdfgsdf logistics solution</p> */}
                </div>
                <div className="content">
                  <div class="columns">
                  <div className="column">
                      
                      <div className="columns">
                        <div className="column is-half">
                          <div class="card card-shadow">
                            <div class="card-image">
                                <img src={imgfice} alt="Placeholder image" />
                            </div>
                            <div class="card-content">
                              <div class="media">
                                <div class="media-content">
                                  <p class="title is-5 has-text-centered" style={colorStyle}>Governments</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="column is-half">
                          <div class="card">
                            <div class="card-image">
                                <img src={mine} alt="Placeholder image" />
                            </div>
                            <div class="card-content">
                              <div class="media">
                                <div class="media-content">
                                  <p class="title is-5 has-text-centered" style={colorStyle}>Mining</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="columns">
                        <div className="column is-half">
                          <div class="card">
                            <div class="card-image">
                                <img src={newD} alt="Placeholder image" />
                            </div>
                            <div class="card-content">
                              <div class="media">
                                <div class="media-content">
                                  <p class="title is-5 has-text-centered" style={colorStyle}>Commercial</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="column">
                          <div class="card">
                            <div class="card-image">
                                <img src={buyer} alt="Placeholder image" />
                            </div>
                            <div class="card-content">
                              <div class="media">
                                <div class="media-content">
                                  <p class="title is-5 has-text-centered" style={colorStyle}>Wholesale Buyers</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="column is-half">
                      <div className="content marketproduct" id="contentSide">
                        <h3 className="subtitle is-6 has-text-left is-uppercase" id="headTitle">Who are our partners and clients</h3>
                        <p className="subtitle has-text-left is-2" style={colorStyle}>Intended Markets </p>

                        <p className="has-text-left" style={paragraphStyle}>
                          As we continue to evolve and widen our reach within the southern hemisphere, our partnerships and valued customers have increased exponentially. <br /><br />Our growing clients base are in these following industry sectors. 
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

const textColor = {
  color: '#003468'
}

const paragraphStyle = {
  fontSize: '1.2rem',
  color: '#003468',
  marginBottom: '100px'
}

const colorStyle = {
  color: '#003468'
}
export default Markets;
