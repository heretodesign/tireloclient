import React from 'react'
import { Link } from "react-router-dom"
// import { Button, Columns} from "react-bulma-components/full"
import 'react-bulma-components/dist/react-bulma-components.min.css'
import imgOffice from '../../../assets/josue-isai-ramos-figueroa-n2NBgIx3A28-unsplash.jpg'
import newD from '../../../assets/jay-skyler-4vkqO73C7O8-unsplash.jpg'
import mine from '../../../assets/robin-sommer-wnOJ83k8r4w-unsplash.jpg'
import buyer from '../../../assets/sippakorn-yamkasikorn-0aJOTBQfEFE-unsplash.jpg'

const Testimonials = () => {
  return (
    <>
     <section className="section is-paddingless-horizontal" id="market-clients">
        <div className="container grid is-large">
            <div className="firstsection">
                <div className="content">
                  <h4 className="subtitle is-3 has-text-left has-text-weight-semibold" id="headingTestimonials">
                    Markets
                  </h4>
                  <p className="subtitle is-6 has-text-left has-text-weight-semibold" id="marketSub">Our valued customer and clients spread across the southern hemisphere, in these following industry sectors</p>
                </div>
                <div className="content">
                  <div class="columns">
                    <div class="column is-one-quarter">
                      <div class="card card-shadow">
                        <div class="card-image">
                            <img src={imgOffice} alt="Placeholder image" />
                        </div>
                        <div class="card-content">
                          <div class="media">
                            <div class="media-content">
                              <p class="title is-5 has-text-centered">Government</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="column">
                      <div class="card">
                        <div class="card-image">
                            <img src={mine} alt="Placeholder image" />
                        </div>
                        <div class="card-content">
                          <div class="media">
                            <div class="media-content">
                              <p class="title is-5 has-text-centered">Mining</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="column">
                      <div class="card">
                        <div class="card-image">
                            <img src={newD} alt="Placeholder image" />
                        </div>
                        <div class="card-content">
                          <div class="media">
                            <div class="media-content">
                              <p class="title is-5 has-text-centered">Commercial</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="column">
                      <div class="card">
                        <div class="card-image">
                            <img src={buyer} alt="Placeholder image" />
                        </div>
                        <div class="card-content">
                          <div class="media">
                            <div class="media-content">
                              <p class="title is-5 has-text-centered">Buyers</p>
                            </div>
                          </div>
                        </div>
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



export default Testimonials;
